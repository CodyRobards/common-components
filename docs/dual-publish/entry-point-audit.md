# Entry point audit: `apps/packages/react-components/src`

## Overview
- `apps/packages/react-components/src/index.ts` acts as the package barrel. It re-exports the React surface area and forwards the underlying Custom Elements from `@wavelengthusaf/web-components`, but it no longer performs registration side effects on its own.【F:apps/packages/react-components/src/index.ts†L9-L108】
- No other barrel files exist under `apps/packages/react-components/src`; individual component files are re-exported directly from this root index.

## Custom element definition modules
These files live under `apps/packages/web-components/src/web-components/` and call `customElements.define` when they are loaded, which means merely importing the module registers the element globally.

| Module | Element registered | Notes |
| --- | --- | --- |
| `web-components/sample-component.ts` | `<sample-component>` | Guarded registration to avoid duplicate defines.【F:apps/packages/web-components/src/web-components/sample-component.ts†L1-L58】 |
| `web-components/wavelength-banner.ts` | `<wavelength-banner>` | Guarded registration; implements classification banner styling logic.【F:apps/packages/web-components/src/web-components/wavelength-banner.ts†L1-L138】 |
| `web-components/wavelength-button.ts` | `<wavelength-button>` | Guarded registration; wraps a styled `<button>` with ripple behavior.【F:apps/packages/web-components/src/web-components/wavelength-button.ts†L1-L256】 |
| `web-components/wavelength-form.ts` | `<wavelength-form>` | Guarded registration; depends on `zod`, `../form/zodToFields`, and `../form/validator` for dynamic form rendering/validation.【F:apps/packages/web-components/src/web-components/wavelength-form.ts†L1-L536】 |
| `web-components/wavelength-input.ts` | `<wavelength-input>` | Guarded registration; large custom input implementation.【F:apps/packages/web-components/src/web-components/wavelength-input.ts†L1-L698】 |
| `web-components/wavelength-progress-bar.ts` | `<wavelength-progress-bar>` | Guarded registration; renders a labeled determinate progress meter.【F:apps/packages/web-components/src/web-components/wavelength-progress-bar.ts†L1-L95】 |
| `web-components/wavelength-title-bar.ts` | `<wavelength-title-bar>` | Guarded registration; imports shared font helpers as side effects.【F:apps/packages/web-components/src/web-components/wavelength-title-bar.ts†L1-L125】 |
| `web-components/wavelength-date-picker.ts` | `<wavelength-date-picker>` | Guarded registration; lightweight wrapper around a native `<input type="date">`.【F:apps/packages/web-components/src/web-components/wavelength-date-picker.ts†L1-L36】 |

### Side-effect implications
- Because the React package no longer imports these files itself, registration only occurs when consumers (or React wrappers) import `@wavelengthusaf/web-components`, which re-exports and executes the modules above.【F:apps/packages/react-components/src/index.ts†L13-L108】【F:apps/packages/web-components/src/index.ts†L9-L17】
- The registration modules pull in additional helpers (`../form/zodToFields`, `../styles/fontSheet`, etc.), so consuming them solely for side effects will also execute that logic.【F:apps/packages/web-components/src/web-components/wavelength-form.ts†L1-L20】【F:apps/packages/web-components/src/web-components/wavelength-title-bar.ts†L1-L40】

## React wrappers around custom elements
These React components render the custom tags above. Each one imports `@wavelengthusaf/web-components` to guarantee the corresponding element registers even when the React bundle is consumed in isolation.

| React module | Custom element rendered | Registration import | Notes |
| --- | --- | --- | --- |
| `components/buttons/WavelengthButton/WavelengthButton.tsx` | `<wavelength-button>` | `import "@wavelengthusaf/web-components";`【F:apps/packages/react-components/src/components/buttons/WavelengthButton/WavelengthButton.tsx†L1-L6】 | Wraps the web component and mirrors props like `variant` and `size`. |
| `components/headers/WavelengthTitleBar/WavelengthTitleBar.tsx` | `<wavelength-title-bar>` | `import "@wavelengthusaf/web-components";`【F:apps/packages/react-components/src/components/headers/WavelengthTitleBar/WavelengthTitleBar.tsx†L1-L4】 | Syncs attributes such as `title-text` and `subtitle-text`. |
| `components/headers/WavelengthTitleBar/WavelengthBanner.tsx` | `<wavelength-banner>` | `import "@wavelengthusaf/web-components";`【F:apps/packages/react-components/src/components/headers/WavelengthTitleBar/WavelengthBanner.tsx†L1-L4】 | Maps React props to banner attributes and maintains opacity/z-index. |
| `components/PageComponents/WavelengthProgressBar.tsx` | `<wavelength-progress-bar>` | `import "@wavelengthusaf/web-components";`【F:apps/packages/react-components/src/components/PageComponents/WavelengthProgressBar.tsx†L1-L4】 | Ensures determinate progress bar attributes are kept in sync. |
| `components/samples/SampleComponent.tsx` | `<sample-component>` | `import "@wavelengthusaf/web-components";`【F:apps/packages/react-components/src/components/samples/SampleComponent.tsx†L1-L5】 | Demonstrates prop forwarding to a custom element. |
| `components/forms/WavelengthForm.tsx` | `<wavelength-form>` | `import "@wavelengthusaf/web-components";`【F:apps/packages/react-components/src/components/forms/WavelengthForm.tsx†L1-L4】 | Provides a React-friendly API around the dynamic form element. |
| `components/TextField/WavelengthInput.tsx` | `<wavelength-input>` | `import "@wavelengthusaf/web-components";`【F:apps/packages/react-components/src/components/TextField/WavelengthInput.tsx†L1-L4】 | Exposes the custom input element via a controlled React component. |

### Observations
- Because every wrapper imports `@wavelengthusaf/web-components`, bundling them into separate entry points remains safe—the elements register as soon as the wrapper executes.
- The dedicated web-components package now owns the registration modules, so React-only bundles can avoid shipping those files when tree-shaking excludes the wrappers.
- Each custom element module uses an `if (!customElements.get(...))` guard, reducing the risk of duplicate definition errors even if multiple entry points import them.【F:apps/packages/web-components/src/web-components/sample-component.ts†L55-L58】【F:apps/packages/web-components/src/web-components/wavelength-progress-bar.ts†L93-L95】

## Other exports
All other `export * from ...` statements in `index.ts` point to plain React components, hooks, or utility functions that do not register custom elements. They can be safely grouped into entry points without triggering extra side effects.

## Miscellaneous
- The previous `register.ts` helper under the React package was removed during the workspace split; registration responsibilities now belong entirely to `@wavelengthusaf/web-components`.

## Recommendations for future entry points
1. When creating alternate entry bundles (e.g., React-only vs. web-component-only), verify that each React wrapper continues to import `@wavelengthusaf/web-components` so registration remains automatic in isolated builds.【F:apps/packages/react-components/src/components/buttons/WavelengthButton/WavelengthButton.tsx†L1-L6】
2. Consider extracting named registration utilities from the web-components package (for example, `registerAll`) so consumers who avoid the global import can still opt into eager element definition.【F:apps/packages/web-components/src/index.ts†L9-L17】
3. As new custom elements land, audit their React wrappers to ensure attribute/prop forwarding stays in sync with the element APIs exported from `@wavelengthusaf/web-components`.【F:apps/packages/react-components/src/components/forms/WavelengthForm.tsx†L1-L4】【F:apps/packages/react-components/src/components/TextField/WavelengthInput.tsx†L1-L4】