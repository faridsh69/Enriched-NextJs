# Figma to VDS Color Token Mapping

**Trigger phrases**: "implement from Figma", "use Figma colors", "map Figma design", "convert Figma to code", "Figma design tokens"

## Purpose

When implementing designs from Figma, this skill ensures correct mapping between Figma color variables and VDS design tokens. It integrates with the Figma MCP to automatically extract color variables and map them to the correct Tailwind classes.

## When to Use

Use this skill when:

- User provides a Figma file/URL with color specifications
- User asks to implement a design from Figma
- User mentions Figma color variables that need to be translated to code
- Converting Figma designs to React/Next.js components

## Workflow

### Step 1: Read the VDS Color Token Mappings

**ALWAYS start by reading the token mappings:**

```
Read: library/vds/src/tokens/Colors/colorTokens.ts
```

This file contains:

- `FIGMA_TO_TOKEN_MAP` - Maps Figma variable names to VDS tokens
- `ColorToken` interface with all mapping properties
- All available color tokens organized by category (Typography, Main, Separator, Background, Additional, Health, Other)

### Step 2: Get Figma Variables (if Figma URL provided)

If user provides a Figma URL, use the Figma MCP to extract variables:

**Use MCP tool**: `get_variable_defs`

Parameters:

- `nodeId`: Extract from URL (e.g., "123:456" or "123-456")
- `fileKey`: Extract from URL (the part between `/design/` and the next `/`)
- `clientLanguages`: "typescript"
- `clientFrameworks`: "react,nextjs,tailwindcss"

Example:

```
URL: https://figma.com/design/ABC123DEF456/MyDesign?node-id=1-2
→ fileKey: ABC123DEF456
→ nodeId: 1:2
```

### Step 3: Map Figma Variables to VDS Tokens

For each Figma variable from Figma (e.g., `--Typography-Primary`, `--Bg-Orange-Pale`):

1. **Look it up** in the `FIGMA_TO_TOKEN_MAP` you read from colorTokens.ts
2. **Extract the `tailwindClass`** from the matched ColorToken
3. **Apply the appropriate prefix** based on context:
   - **Text colors**: `text-{tailwindClass}`
     - Example: `--Typography-Primary` → `text-vd-typography-primary`
   - **Backgrounds**: `bg-{tailwindClass}`
     - Example: `--Bg-Orange-Pale` → `bg-vd-orange-pale`
   - **Borders**: `border-{tailwindClass}`
     - Example: `--Separator-1` → `border-vd-separator-1`

### Step 4: Generate Code

Generate React/Next.js components using:

- The mapped Tailwind classes from Step 3
- VDS component architecture (Layer 1/2/3 from route-group-components rule)
- React best practices from project rules

## Mapping Reference

| Figma Variable Category | Example Figma Name       | VDS Tailwind Class             | Common Use Case        |
| ----------------------- | ------------------------ | ------------------------------ | ---------------------- |
| Typography              | `--Typography-Primary`   | `text-vd-typography-primary`   | Primary heading text   |
| Typography              | `--Typography-Secondary` | `text-vd-typography-secondary` | Body text              |
| Main                    | `--Main-Black`           | `bg-vd-black`                  | Black background       |
| Main                    | `--Main-Beige`           | `bg-vd-beige`                  | Beige background       |
| Separator               | `--Separator-1`          | `border-vd-separator-1`        | Border/divider         |
| Background              | `--Bg-Orange-Pale`       | `bg-vd-orange-pale`            | Soft orange background |
| Background              | `--Bg-Green-Pale`        | `bg-vd-green-pale`             | Nature-themed sections |
| Background              | `--Bg-Light-Gray`        | `bg-vd-light-gray`             | Neutral light surface  |
| Additional              | `--Additional-Orange`    | `bg-vd-orange`                 | Orange accents         |
| Health                  | `--Health-Error`         | `bg-vd-health-error`           | Error states           |
| Health                  | `--Health-Warning`       | `bg-vd-health-warning`         | Warning states         |
| Health                  | `--Health-Good`          | `bg-vd-health-good`            | Success states         |
| Other                   | `--Other-Hover`          | `bg-vd-hover`                  | Hover states           |

## Complete Token List

The VDS color palette includes **27 color tokens** across 7 categories:

- **Typography Colors**: 4 tokens (Primary, Secondary, Tertiary, Disabled)
- **Main Colors**: 3 tokens (Black, Beige, White)
- **Separator Colors**: 2 tokens (Separator 1, Separator 2)
- **Background Colors**: 9 tokens (Orange Pale, Green Pale, Blue Pale, Purple Pale, Peach Pale, Yellow Warm, Gray Warm, Lemon Bright, Light Gray)
- **Additional Colors**: 5 tokens (Orange, Yellow, Green, Red, Ruby)
- **Health Colors**: 3 tokens (Error, Warning, Good)
- **Other Colors**: 1 token (Hover)

## Important Notes

- **Always read colorTokens.ts first** - Don't rely on memorized mappings, as tokens may have been updated
- **CSS variables available** - If custom styles are needed, use `token.cssVar` (e.g., `var(--vd-color-typography-primary)`)
- **Follow 3-layer architecture** - Use VDS tokens (Layer 3) for all color applications per route-group-components rule
- **Prefix matters** - The colorTokens.ts stores base classes without prefixes; add `text-`, `bg-`, or `border-` based on context

## Error Handling

### If Figma variable not found in FIGMA_TO_TOKEN_MAP:

1. **List available categories** from `COLOR_CATEGORIES` in colorTokens.ts
2. **Suggest closest match** from existing tokens based on naming similarity
3. **Ask user** if they want to:
   - Use a similar existing token, or
   - Add the new token to colorTokens.ts (requires updating the file and vd-tailwind.preset.js)

### If Figma MCP fails:

1. Ask user to verify Figma URL format and permissions
2. Suggest manually providing color variable names
3. Continue with manual mapping using colorTokens.ts

## Example Usage

**User says**: "Implement this card from Figma: https://figma.com/design/ABC123/Cards?node-id=10-5"

**Agent workflow**:

1. Read `library/vds/src/tokens/Colors/colorTokens.ts`
2. Call Figma MCP `get_variable_defs` with fileKey: "ABC123", nodeId: "10:5"
3. Receive variables: `["--Typography-Primary", "--Bg-Orange-Pale", "--Separator-1"]`
4. Map to VDS:
   - `--Typography-Primary` → `text-vd-typography-primary`
   - `--Bg-Orange-Pale` → `bg-vd-orange-pale`
   - `--Separator-1` → `border-vd-separator-1`
5. Generate React component with mapped Tailwind classes

## CSS Variables (Alternative to Tailwind)

If Tailwind classes don't fit the use case (e.g., custom styles, animations), use CSS variables:

```typescript
// From colorTokens.ts, each token has a cssVar property
const styles = {
  color: 'var(--vd-color-typography-primary)',
  backgroundColor: 'var(--vd-color-bg-orange-pale)',
  borderColor: 'var(--vd-color-separator-1)'
}
```

## Related Resources

- **Token source**: `library/vds/src/tokens/Colors/colorTokens.ts`
- **Tailwind config**: `vd-tailwind.preset.js`
- **Storybook docs**: `library/vds/src/tokens/Colors/Colors.stories.tsx`
- **Architecture rules**: `.cursor/rules/route-group-components.mdc`
