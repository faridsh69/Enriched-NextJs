---
name: z-index-management
description: Enforces semantic z-index tokens from the VDS design system instead of magic numbers. Use when writing CSS, Tailwind classes, or React components that require z-index values. Prevents z-index wars by guiding proper layer selection and stacking context handling.
---

# Z-Index Management

Semantic z-index system for the VDS design system. Prevents "z-index wars" by using named tokens instead of magic numbers.

## When to Apply

Use this skill when:

- Writing CSS or Tailwind classes that need `z-index`
- Creating components with overlays, modals, dropdowns, or fixed navigation
- Debugging z-index stacking issues
- Reviewing code that uses numeric z-index values

## Quick Reference

Always use semantic tokens instead of numeric values:

| Use Case                | Token               | Tailwind Class        | Value |
| ----------------------- | ------------------- | --------------------- | ----- |
| Decorative backgrounds  | `vd-hide`           | `z-vd-hide`           | -1    |
| Standard flow           | `vd-base`           | `z-vd-base`           | 0     |
| Card hover elevation    | `vd-raised`         | `z-vd-raised`         | 10    |
| Floating action buttons | `vd-fab`            | `z-vd-fab`            | 50    |
| Dropdowns, selects      | `vd-dropdown`       | `z-vd-dropdown`       | 100   |
| Sticky headers          | `vd-sticky`         | `z-vd-sticky`         | 200   |
| Fixed navigation        | `vd-fixed`          | `z-vd-fixed`          | 300   |
| Modal backdrop          | `vd-modal-backdrop` | `z-vd-modal-backdrop` | 400   |
| Modals, dialogs         | `vd-modal`          | `z-vd-modal`          | 500   |
| Tooltips, popovers      | `vd-popover`        | `z-vd-popover`        | 600   |
| Toasts, notifications   | `vd-toast`          | `z-vd-toast`          | 700   |

## Usage Rules

### ✅ DO: Use Semantic Tokens

```tsx
// Fixed navigation
<nav className="fixed top-0 z-vd-fixed w-full">...</nav>

// Modal with backdrop
<div className="fixed inset-0 z-vd-modal-backdrop bg-black/50">
  <div className="z-vd-modal relative bg-white">...</div>
</div>

// Toast notification
<div className="fixed bottom-4 right-4 z-vd-toast">...</div>
```

### ❌ DON'T: Use Magic Numbers

```tsx
// Bad - magic numbers
<div className="z-50">Navigation</div>
<div className="z-[999]">Modal</div>
<div className="z-9999">Toast</div>
```

## Common Patterns

### Fixed Navigation

```tsx
<nav className='fixed top-0 z-vd-fixed w-full bg-white'>{/* Navigation content */}</nav>
```

### Modal with Backdrop

```tsx
<div className='fixed inset-0 z-vd-modal-backdrop bg-black/50' onClick={onClose}>
  <div className='z-vd-modal relative bg-white rounded-lg p-6'>{/* Modal content */}</div>
</div>
```

### Dropdown Menu

```tsx
<div className='relative'>
  <button>Open Menu</button>
  <div className='absolute top-full left-0 z-vd-dropdown bg-white shadow-lg'>{/* Dropdown items */}</div>
</div>
```

## Stacking Context Issues

If `z-index` isn't working as expected, the issue is usually a **stacking context**, not the z-index value.

### Common Stacking Context Creators

- `opacity < 1`
- `transform` (any value)
- `filter` (any value)
- `will-change: transform` or `opacity`
- `position: fixed` or `sticky`

### Solution: Use `isolate`

```tsx
// Problem: Modal trapped in stacking context
<div className="opacity-90">
  <div className="z-vd-modal">Modal content</div>
</div>

// Solution: Create explicit stacking context
<div className="isolate opacity-90">
  <div className="z-vd-modal">Modal content</div>
</div>
```

### Alternative: Use React Portals

For modals and tooltips, render at document root:

```tsx
import { createPortal } from 'react-dom'

function Modal({ children }) {
  return createPortal(<div className='z-vd-modal'>{children}</div>, document.body)
}
```

## Best Practices

1. **Never use values like `z-9999`** - If `z-vd-modal` (500) isn't working, changing to 9999 won't fix it. Fix the stacking context instead.

2. **Stay within the system** - If you need an intermediate value, ask: "Which layer does this belong to?" Most cases are covered by existing tokens.

3. **Document exceptions** - If you must use an arbitrary value, add a comment:

```tsx
{
  /* Special case: Needs to sit between sticky (200) and fixed nav (300) */
}
;<div className='z-[250]'>Floating filter panel</div>
```

## Complete Documentation

For detailed information including:

- Visual layer diagram
- Complete token reference
- Advanced stacking context examples
- Edge case handling

See: [docs/Z-INDEX.md](../../docs/Z-INDEX.md)
