# Figma to VDS Typography Token Mapping

**Trigger phrases**: "implement text from Figma", "use Figma typography", "map Figma text styles", "convert Figma fonts to code", "Figma typography tokens", "Display/Large", "Headline/Medium", "Body/Small"

## Purpose

When implementing designs from Figma, this skill ensures correct mapping between Figma text style names and VDS typography tokens. It maps the Figma naming convention (Style/Size/Weight) to the correct VDTypography component props or CVA variant keys.

> **IMPORTANT**: Only two approaches are allowed for applying typography — `VDTypography` component or `typographyVariants()` CVA function. Do NOT use raw Tailwind typography classes (e.g., `vd-text-display-large font-semibold`) directly. The component and CVA variants resolve font size, weight, line height, and responsive behavior correctly as a unit; raw classes risk incorrect combinations.

## When to Use

Use this skill when:

- User provides a Figma file with text styles (Display, Headline, Body, Caption)
- User asks to implement text/heading/paragraph from Figma
- User mentions Figma typography style names like "Display/Large/Semibold"
- Converting Figma text designs to React components
- Applying responsive typography from Figma specs

## Workflow

### Step 1: Read the VDS Typography Token Mappings

**ALWAYS start by reading the token mappings:**

```
Read: library/vds/src/tokens/Typography/typographyTokens.ts
```

This file contains:

- `ALL_TYPOGRAPHY_STYLES` - All 11 style+size tokens with Figma names, Tailwind classes, and responsive specs
- `FONT_WEIGHTS` - Weight name to CSS value mapping
- `DEFAULT_WEIGHTS` - Default weight per style category
- `resolveFigmaTypographyStyle()` - Function to parse "Display/Large/Semibold" into token + weight
- Lookup maps: `FIGMA_TYPO_TO_TOKEN_MAP`, `VARIANT_KEY_TO_TOKEN_MAP`, `TAILWIND_TYPO_TO_TOKEN_MAP`

### Step 2: Map Figma Text Style to VDS

For a Figma text style like `Display/Large/Semibold`:

1. **Parse the name**: `Style/Size/Weight` → base=`Display/Large`, weight=`Semibold`
2. **Look up the base** in `FIGMA_TYPO_TO_TOKEN_MAP` → get `tailwindClass` and `variantKey`
3. **Resolve the weight** from `FONT_WEIGHTS` → get `tailwindClass` for weight
4. **Apply** (only these two approaches are allowed):
   - As VDTypography: `<VDTypography variant="display-large" weight="semibold">`
   - As CVA variants: `typographyVariants({ variant: 'display-large', weight: 'semibold' })`

### Step 3: Generate Code

Choose one of the two allowed approaches:

- **VDTypography component** — best for standalone text elements (headings, paragraphs, labels)
- **typographyVariants** — best for composing with other components (Link, Button, custom elements)

> **NEVER** use raw Tailwind typography classes like `vd-text-display-large font-semibold` directly in `className`. Always go through `VDTypography` or `typographyVariants()`.

## Complete Mapping Reference

### Font Styles (11 total)

| Figma Base Name     | Tailwind Class                 | CVA Variant Key        | Mobile/Tablet | Desktop (1024px+) | Responsive? |
| ------------------- | ------------------------------ | ---------------------- | ------------- | ----------------- | ----------- |
| Display/Large       | `vd-text-display-large`        | `display-large`        | 40px/48px     | 50px/60px         | Yes         |
| Display/Medium      | `vd-text-display-medium`       | `display-medium`       | 30px/36px     | 40px/48px         | Yes         |
| Headline/Large      | `vd-text-headline-large`       | `headline-large`       | 24px/32px     | 30px/36px         | Yes         |
| Headline/Medium     | `vd-text-headline-medium`      | `headline-medium`      | 20px/28px     | 24px/32px         | Yes         |
| Headline/Small      | `vd-text-headline-small`       | `headline-small`       | 18px/26px     | 20px/28px         | Yes         |
| Headline/ExtraSmall | `vd-text-headline-extra-small` | `headline-extra-small` | 16px/24px     | 18px/26px         | Yes         |
| Body/Large          | `vd-text-body-large`           | `body-large`           | 18px/26px     | 18px/26px         | No          |
| Body/Medium         | `vd-text-body-medium`          | `body-medium`          | 16px/24px     | 16px/24px         | No          |
| Body/Small          | `vd-text-body-small`           | `body-small`           | 14px/22px     | 14px/22px         | No          |
| Caption/Large       | `vd-text-caption-large`        | `caption-large`        | 12px/20px     | 12px/20px         | No          |
| Caption/Medium      | `vd-text-caption-medium`       | `caption-medium`       | 10px/16px     | 10px/16px         | No          |

### Font Weights

| Figma Weight | CSS Value | Tailwind Class  | CVA Weight Key |
| ------------ | --------- | --------------- | -------------- |
| Regular      | 400       | `font-normal`   | `regular`      |
| Medium       | 500       | `font-medium`   | `medium`       |
| Semibold     | 600       | `font-semibold` | `semibold`     |
| Bold         | 700       | `font-bold`     | `bold`         |

### Default Weights per Style Category

| Category | Default Weight | Figma Example                    |
| -------- | -------------- | -------------------------------- |
| Display  | Medium (500)   | `Display/Large/Medium(default)`  |
| Headline | Medium (500)   | `Headline/Large/Medium(default)` |
| Body     | Regular (400)  | `Body/Medium/Regular(Default)`   |
| Caption  | Regular (400)  | `Caption/Large/Regular(default)` |

### Typography Colors

| Color Prop  | Tailwind Class                 | Use Case                     |
| ----------- | ------------------------------ | ---------------------------- |
| `primary`   | `text-vd-typography-primary`   | Headlines, important content |
| `secondary` | `text-vd-typography-secondary` | Supporting content           |
| `tertiary`  | `text-vd-typography-tertiary`  | Subtle information           |
| `disabled`  | `text-vd-typography-disabled`  | Disabled state               |
| `inherit`   | `text-inherit`                 | Inherit parent color         |

## Responsive Behavior

- **Breakpoints**: Mobile (360px+) = Tablet (720px+) < Desktop (1024px+)
- **Mobile and Tablet share identical font sizes** — no change at 720px
- **Only Display and Headline scale up at desktop** (1024px+)
- **Body and Caption are NOT responsive** — same across all breakpoints
- Implementation: mobile-first CSS in `vd-tailwind.preset.js` with `@media (min-width: 1024px)` overrides

## Usage Examples

### VDTypography Component

```tsx
// Renders <h1> with display-large responsive sizing
<VDTypography variant="display-large" weight="semibold">
  Welcome to VinoVoss
</VDTypography>

// Override HTML element
<VDTypography variant="headline-medium" weight="bold" as="label">
  Wine Name
</VDTypography>

// Compose with a Link using asChild
<VDTypography variant="body-small" weight="medium" color="secondary" asChild>
  <a href="/wines">Browse wines</a>
</VDTypography>
```

### typographyVariants (for composing with other components)

```tsx
import { typographyVariants } from 'library/vds/src/components/VDTypography/typographyVariants'
import { cn } from 'library/vds/src/lib/utils'

// On a button
<button className={cn(
  typographyVariants({ variant: 'body-medium', weight: 'semibold' }),
  'bg-vd-primary text-white rounded-vd-sm px-4 py-2'
)}>
  Add to Cart
</button>

// On a label
<label className={typographyVariants({ variant: 'caption-medium', weight: 'medium', color: 'secondary' })}>
  Wine Region
</label>
```

### Raw Tailwind Classes — NOT ALLOWED

```tsx
// ❌ WRONG — Do not use raw typography Tailwind classes directly
<h1 className='vd-text-display-large font-semibold text-vd-typography-primary'>Wrong</h1>

// ✅ CORRECT — Use VDTypography instead
<VDTypography variant="display-large" weight="semibold">Correct</VDTypography>

// ✅ CORRECT — Or use typographyVariants for non-text elements
<h1 className={typographyVariants({ variant: 'display-large', weight: 'semibold' })}>Also correct</h1>
```

## Semantic HTML Defaults

Each variant renders a sensible HTML element by default:

| Variant                                   | Default Element |
| ----------------------------------------- | --------------- |
| `display-large`, `display-medium`         | `<h1>`          |
| `headline-large`                          | `<h2>`          |
| `headline-medium`                         | `<h3>`          |
| `headline-small`                          | `<h4>`          |
| `headline-extra-small`                    | `<h5>`          |
| `body-large`, `body-medium`, `body-small` | `<p>`           |
| `caption-large`, `caption-medium`         | `<span>`        |

Override with `as="div"`, `as="label"`, etc., or use `asChild` to delegate to a child element.

## Error Handling

### If Figma text style not found in mapping:

1. Check if it's a valid `Style/Size/Weight` format
2. Verify the style exists in the Figma design library
3. Suggest closest match from existing tokens
4. If it's a new style, it needs to be added to both `typographyTokens.ts` and `vd-tailwind.preset.js`

### If Figma MCP fails:

1. Ask user to verify Figma URL format and permissions
2. Suggest manually providing text style names
3. Continue with manual mapping using the reference tables above

## Related Resources

- **Token source**: `library/vds/src/tokens/Typography/typographyTokens.ts`
- **CVA variants**: `library/vds/src/components/VDTypography/typographyVariants.ts`
- **Component**: `library/vds/src/components/VDTypography/VDTypography.tsx`
- **Tailwind config**: `vd-tailwind.preset.js` (screens + typography plugin)
- **Storybook**: `library/vds/src/components/VDTypography/VDTypography.stories.tsx`
- **Color tokens skill**: `.agents/skills/figma-vds-colors/SKILL.md`
- **Figma Design Library**: https://www.figma.com/design/zUAUzMfk0m8d3BypYnW02o/Design-library
