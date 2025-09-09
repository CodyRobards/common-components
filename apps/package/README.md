# common-components

## Overview

This module was created to share common components across Wavelength product teams. All components stored in this library are unclassified.

## Getting started

You can install this package the same way that you install everything else

```
npm install @wavelengthusaf/components
```

## WavelengthForm buttons

`WavelengthForm` exposes configurable action buttons. Provide a `leftButton`,
`centerButton`, and/or `rightButton` object with a `label`, optional
`buttonProps` forwarded as attributes to the underlying `<wavelength-button>`,
and an optional `eventName` to customize the emitted event. Default events are
`form-back`, `form-center`, and `form-submit`.

```tsx
<WavelengthForm
  schema={schema}
  leftButton={{
    label: "Back",
    buttonProps: { id: "back-btn", variant: "text", size: "small" },
  }}
  centerButton={{
    label: "Save",
    buttonProps: { id: "save-btn", type: "button", variant: "outlined", size: "medium" },
  }}
  rightButton={{
    label: "Next",
    buttonProps: { id: "next-btn", variant: "contained", size: "large" },
  }}
  onBack={() => console.log("back")}
  onCenter={() => console.log("center")}
  onSubmit={() => console.log("submit")}
/>
```

The `buttonProps` object is forwarded as attributes to
`<wavelength-button>`, allowing you to customize each button via properties
like `variant` or `size`.

## Release Notes

### 3.3.9

- 8/13/2025
- Added generic button configurations to `WavelengthForm` with optional left,
  center, and right slots supporting custom events and button properties.

### 3.3.8

- 8/12/2025
- Added optional `title` and `titleAlign` props to `WavelengthForm` for displaying a heading above the form.

### 3.3.7

- 8/11/2025
- Introduced formAssociated = true for `WavelengthInput`. It allows the input to be recognized when utilized within a form element.

### 3.3.6

- 8/11/2025
- Updated `WLAutoComplete` to have the outline styling refactored, the component also features a `id` and `name` prop for form handling. Fixed dropdown visibility issues.

### 3.3.5

- 8/08/2025
- Fixed two bugs for `WavelengthButton`. One was causing the button to remain clickable when disabled, and the other was causing it to double-click.

### 3.3.4

- 8/07/2025
- Updated `WavelengthInput` to have an `id` and `name` prop.

### 3.3.3

- 8/05/2025
- Updated `WLAutoComplete` to be able to have scroll functionality and basic validation.

### 3.3.2

- 7/30/2025
- Updated `WavelengthTextField` to be a web component; also renamed to `WavelengthInput` to match HTML's naming convention for the `<input>` element this component is based off of.

### 3.3.1

- 6/22/2025
- Updated `WLAutoComplete` to be able to have scroll functionality and basic validation.

### 3.3.0

- 6/17/2025
- Added `WLDatePicker`;.

### 3.2.0

- 6/17/2025
- Added `WLAutoComplete`; With appropriate component color conventions.

### 3.1.1

- 6/13/2025
- Updated `WLChildDataTable`; Allowed buttons to accept arguments of `() => void` or `() => Promise<void>` to pass functions through.

### 3.1.0

- 6/2/2025
- Added `WLChildDataTable`; Changed naming conventions for components into their respective categories.

### 3.0.3

- 5/30/2025
- Updated `WavelengthBanner`; re-added the `classification` and `control` props

### 3.0.2

- 5/28/2025
- Updated Alert Component

### 3.0.1

- 5/27/2025
- Updated `WavelengthProgressBar` to be a web component; added several new props

### 3.0.0

- 5/16/2025
- Renamed several components to include the word `Wavelength` in front of them. The following components have been renamed accordingly:

<pre>
    sliderCarousel --------> WavelengthSliderCarousel
    GreenEllipse ----------> DELETED
    ManyPlanes ------------> WavelengthManyPlanes
    AppLogo ---------------> WavelengthAppLogo
    DefaultIcon -----------> WavelengthDefaultIcon
    NotAvailablePage ------> WavelengthNotAvailablePage
    ButtonPagination ------> WavelengthButtonPagination
    VariationPagination ---> WavelengthVariationPagination
    WavelengthPagination --> WavelengthDefaultPagination
    SearchTextField -------> WavelengthSearchTextField
    TestSnackbar ----------> WavelengthTestSnackbar
</pre>

### 2.10.2

- 5/14/2025
- Updated Wavelength Alert
- Updated Textfield to include inputRef as a prop

### 2.10.1

- 5/13/2025
- Small fix to exports

### 2.10.0

- 5/13/2025
- Added Sample Component (skeleton)
- Added documentation for internal developers to create their own Web Components

### 2.9.3

- 5/06/2025
- Updated Alert Component

### 2.9.2

- 5/02/2025
- Minor fix to exports

### 2.9.1

- 5/02/2025
- `WavelengthButton` updated; new props
- Minor bug fixes

### 2.9.0

- 4/25/2025
- New Alert Component
- Added tests for new components (Alert Component)

### 2.8.1

- 4/18/2024
- Created test for the Wavelength Comment Display

### 2.7.3

- 4/8/2025
- Updated `WavelengthBanner` with various tweaks; added several props

### 2.7.2

- 4/4/2025
- Updated `WavelengthTitleBar` to be a standard `<div>` instead of an svg. Also added several props for further customization.

### 2.7.1

- 4/1/2025
- Updated `WavelengthTextField` component to have another variant.

### 2.7.0

- 3/24/2025
- Added the `WavelengthCommentDisplay` component

### 2.6.0

- Added a new component, `WavelengthProgressBar`

### 2.5.1

- 03/12/2025
- Added shrink prop to `WavelengthTextField` component
- Changed message prop in the snackbar component to be a react or jsx element

### 2.5.0

- 03/06/2025
- Added a new component, `WavelengthDragAndDrop`
- Updated `WavelengthTextField` component to take in a prop called type

### 2.4.0

- 03/03/2025
- Added 2 new components, `WavelengthStyledButton`, and `WavelengthTextField`
- Updated the confirmation modal to include more props making it more customizable
- Updated documentation to reflect these changes

### 2.3.5

- Updated `WavelengthDropdown` by adding default values to some of the props
- Fixed bugs related to WavelengthSearchbar, no longer 2 closing icons for some configurations
- Updated `WavelengthPopupMenu`, each list item can have a hover color for text, also fixed underlining of link type issue
- Standard Snackbar is not aligned properly, the Snackbars with icons are also aligned properly

### 2.3.4

- Update watch command for devs, and updated vite configuration

### 2.3.1 - 2.3.3

- Fixed a bug relating to exports not working.

### 2.3.0

- Added `DefaultPagination` component to package for numbered pagination navigation, and modified PagePagination for testbed.

### 2.2.5

- Readded `DefaultIcon` component to package.

### 2.2.2 - 2.2.4

- Updated the `Footer` component to include the `text?` and `textColor?` props; slightly changed the appearance of the full Wavelength Logo in the footer.

### 2.2.1

- Renamed `WavelengthBannerHeader` to `WavelengthBanner` to reflect its more broader, possible use.

### 2.2.0

- A new component was added, The WavelengthSlider Component.

### 2.1.0

- Added Carousel components to Mono Repo, Page Carousel with route, and information ready to be used.

### 2.0.5

- Various refactors made to the Monorepo; users can now access the Testbed website at the following link: https://wavelength2.gitlab.io/common-components/

### 2.0.4

- Added BoxShadow prop to menuSx for the dropdown menu component

### 2.0.0

- Migrated to a Mono Repo; some minor updates to various components were made throughout the package.

### 1.3.1

- Updated WavelengthBox Component, and Wavelength Button Component. Created new Dropdown Component called Wavelength Dropdown.

### 1.3.0

- Updated Footer and Snackbar component, added a basic File Download component.

### 1.0.2 - 1.0.3

- Updated dependencies

### 1.0.1

- Updated readme and added first ts component

### 1.0.0

- Created npm package
