# Entry point audit: `apps/package/src`

## Overview
- `apps/package/src/index.ts` acts as the package barrel. It first imports every web component module for their side effects, which ensures each custom element is registered when the entry file executes, and then re-exports a large set of React utilities and components.【F:apps/package/src/index.ts†L9-L111】
- No other barrel files exist under `apps/package/src`; individual component files are re-exported directly from this root index.

## Custom element definition modules
These files live under `apps/package/src/web-components/` and call `customElements.define` when they are loaded, which means merely importing the module registers the element globally.

| Module | Element registered | Notes |
| --- | --- | --- |
| `web-components/sample-component.ts` | `<sample-component>` | Guarded registration to avoid duplicate defines.【F:apps/package/src/web-components/sample-component.ts†L1-L58】 |
| `web-components/wavelength-banner.ts` | `<wavelength-banner>` | Guarded registration; implements classification banner styling logic.【F:apps/package/src/web-components/wavelength-banner.ts†L1-L134】 |
| `web-components/wavelength-button.ts` | `<wavelength-button>` | Guarded registration; wraps a styled `<button>` with ripple behavior.【F:apps/package/src/web-components/wavelength-button.ts†L1-L256】 |
| `web-components/wavelength-form.ts` | `<wavelength-form>` | Guarded registration; depends on `zod`, `../form/zodToFields`, and `../form/validator` for dynamic form rendering/validation.【F:apps/package/src/web-components/wavelength-form.ts†L1-L538】 |
| `web-components/wavelength-input.ts` | `<wavelength-input>` | Guarded registration; large custom input implementation.【F:apps/package/src/web-components/wavelength-input.ts†L1-L698】 |
| `web-components/wavelength-progress-bar.ts` | `<wavelength-progress-bar>` | Registers without a guard (will throw if defined twice).【F:apps/package/src/web-components/wavelength-progress-bar.ts†L1-L93】 |
| `web-components/wavelength-title-bar.ts` | `<wavelength-title-bar>` | Guarded registration; imports shared font helpers as side effects.【F:apps/package/src/web-components/wavelength-title-bar.ts†L1-L125】 |
| `web-components/input-datepicker.ts` | `<wavelength-input-date-picker>` | Registers without a guard.【F:apps/package/src/web-components/input-datepicker.ts†L1-L34】 |

### Side-effect implications
- Because the root `index.ts` imports seven of the eight modules above (everything except `input-datepicker.ts`), those seven elements are always registered when consumers import from the package root. The date picker element is instead registered by components that import its module directly (see below).【F:apps/package/src/index.ts†L11-L17】【F:apps/package/src/components/inputs/WavelengthInputDatePicketer.tsx†L1-L18】
- The registration modules pull in additional helpers (`../form/zodToFields`, `../styles/fontSheet`, etc.), so consuming them solely for side effects will also execute that logic.

## React wrappers around custom elements
These React components render the custom tags above. Several import the web component module themselves to guarantee registration, while two rely on the package entry point to have run first.

| React module | Custom element rendered | Local side-effect import? | Notes |
| --- | --- | --- | --- |
| `components/buttons/WavelengthButton/WavelengthButton.tsx` | `<wavelength-button>` | Yes – `import "../../../web-components/wavelength-button";` ensures registration when the wrapper is imported directly.【F:apps/package/src/components/buttons/WavelengthButton/WavelengthButton.tsx†L1-L112】 |
| `components/headers/WavelengthTitleBar/WavelengthTitleBar.tsx` | `<wavelength-title-bar>` | Yes.【F:apps/package/src/components/headers/WavelengthTitleBar/WavelengthTitleBar.tsx†L1-L24】 |
| `components/headers/WavelengthTitleBar/WavelengthBanner.tsx` | `<wavelength-banner>` | Yes.【F:apps/package/src/components/headers/WavelengthTitleBar/WavelengthBanner.tsx†L1-L34】 |
| `components/PageComponents/WavelengthProgressBar.tsx` | `<wavelength-progress-bar>` | Yes.【F:apps/package/src/components/PageComponents/WavelengthProgressBar.tsx†L1-L32】 |
| `components/inputs/WavelengthInputDatePicketer.tsx` | `<wavelength-input-date-picker>` | Yes; this is the only path that registers the date-picker element because the root barrel does not import its module.【F:apps/package/src/components/inputs/WavelengthInputDatePicketer.tsx†L1-L18】 |
| `components/samples/SampleComponent.tsx` | `<sample-component>` | Yes.【F:apps/package/src/components/samples/SampleComponent.tsx†L1-L39】 |
| `components/forms/WavelengthForm.tsx` | `<wavelength-form>` | **No** local import. Registration depends on the root barrel (or a manual import of `web-components/wavelength-form`).【F:apps/package/src/components/forms/WavelengthForm.tsx†L1-L260】 |
| `components/TextField/WavelengthInput.tsx` | `<wavelength-input>` | **No** local import. Registration depends on the root barrel (or a manual import of `web-components/wavelength-input`).【F:apps/package/src/components/TextField/WavelengthInput.tsx†L1-L185】 |

### Observations
- If we split the library into multiple entry points, we must ensure that any bundle exposing `WavelengthForm` or `WavelengthInput` also pulls in their corresponding web-component modules; today they only work if consumers touch `index.ts` first.
- Modules with local side-effect imports are self-sufficient: importing the React wrapper alone registers the element.
- `web-components/wavelength-progress-bar.ts` and `web-components/input-datepicker.ts` lack a guard before `customElements.define`, so double-registration will throw if the file executes twice in the same runtime. Any parallel entry files must avoid re-executing those modules after the element is already defined.

## Other exports
All other `export * from ...` statements in `index.ts` point to plain React components, hooks, or utility functions that do not register custom elements. They can be safely grouped into entry points without triggering extra side effects.

## Miscellaneous
- `apps/package/src/register.ts` is an unused stub that hints at a potential manual registration helper; it currently comments out the logic.【F:apps/package/src/register.ts†L1-L7】 Keeping it inactive avoids duplicate registration right now.

## Recommendations for future entry points
1. When creating alternate entry bundles (e.g., React-only vs. web-component-only), decide explicitly which bundle should execute the side-effect imports above. Consider moving the registration into dedicated helper files so React wrappers can import them directly without pulling unrelated exports.
2. Add guards to the `wavelength-progress-bar` and `input-datepicker` modules to avoid runtime errors if multiple entry files register the same element.
3. Either add explicit `import "../web-components/..."` statements to `WavelengthForm.tsx` and `WavelengthInput.tsx` or document that consumers must import `@wavelengthusaf/components/web-components` (once available) before using those React wrappers.