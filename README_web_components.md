# How to make a Web Component

This repository provides a basic skeleton for building reusable Web Components using the [Custom Elements API](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements). It includes:

- A native Web Component (`sample-component.ts`)
- A React wrapper (`SampleComponent.tsx`)
- TypeScript JSX support (`global.d.ts`)

---

## Usage

### Web Component (Vanilla HTML)

```html
<sample-component test-prop="Hello">Custom content</sample-component>
```

### React Wrapper

```ts
import { SampleComponent } from "./components/SampleComponent";

<SampleComponent test-prop="Hello">Custom content</SampleComponent>
```


## How to Build a New Component
### 1. Create Your Web Component

Duplicate and rename ``sample-component.ts``:

```ts
class SampleComponent extends HTMLElement {
  // Your custom logic here
}
customElements.define("sample-component", SampleComponent);
```

### 2. Create a React Wrapper

Add a new file like ``SampleComponent.tsx`` in your ``components/`` directory or wherever you keep your React components:

```ts
export const SampleComponent: React.FC<{ "test-prop"?: string }> = ({ children, ...props }) => {
  return <sample-component {...props}>{children}</sample-component>;
};
```

### 3. Register with JSX

In ``types/global.d.ts`` or wherever you keep your JSX config stuff, add:

```ts
declare namespace JSX {
  interface IntrinsicElements {
    "sample-component": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      "test-prop"?: string;
    };
  }
}
```

### How Attributes Work

Web Components rely on HTML attributes for props—not regular JS objects like React. Use ``getAttribute``, ``hasAttribute``, and ``attributeChangedCallback()`` in your component class. Example of setting attributes:

```ts
<sample-component test-prop="some value" disabled></sample-component>
```


### Encapsulation with Shadow DOM and HTML Templates

To keep global styles from affecting your component, Use this inside your constructor:

 ```ts
 this.attachShadow({ mode: "open" })
 ```
 

Use ``<template>`` to define reusable inner content (this is typically placed at the top of your Web Component file):

```ts
const template = document.createElement("template");
template.innerHTML = `
    <style>
        h2 { color: red }
    </style>
    <h2><slot></slot></h2>
    `;

this.shadowRoot?.appendChild(template.content.cloneNode(true));
```

### TypeScript Setup

Ensure your ``tsconfig.json`` includes:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "types": ["./src/types/global.d.ts"]
  }
}
```


### When to Use Web Components

Web Components are ideal for:
- <b>Design Systems</b> – Encapsulated styles, reusable components across frameworks.
- <b>Embedded Widgets</b> – Drop a component into any page via CDN or script tag.
- <b>CMS Plugins</b> – Add dynamic, styled functionality to CMS content safety.