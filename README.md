<p align="center"><img width="150" src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue logo">
</p>

# TODOvue Card (TvCard)
A flexible and customizable Vue 3 card component for showcasing content with title, image, description, and action buttons. Perfect for Single Page Apps and Server-Side Rendered (SSR) environments like Nuxt 4.

[![npm](https://img.shields.io/npm/v/@todovue/tv-card.svg)](https://www.npmjs.com/package/@todovue/tv-card)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-card.svg)](https://www.npmjs.com/package/@todovue/tv-card)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-card.svg)](https://www.npmjs.com/package/@todovue/tv-card)
![License](https://img.shields.io/github/license/TODOvue/tv-card)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-card)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-card)
![Node Version](https://img.shields.io/node/v/@todovue/tv-card)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-card)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-card?style=social)

> Demo: https://ui.todovue.blog/card

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Style usage](#style-usage)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 4 / SSR Usage](#nuxt-4--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Events](#events)
- [Customization (Styles / Theming)](#customization-styles--theming)
- [Examples](#examples)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features
- Clean and modern card layout with image, title, and description
- Primary and secondary action buttons
- Label/tag support with customizable limit
- Fully customizable color scheme (background, text, button styles)
- Click events for buttons and labels
- Works seamlessly in SPA and SSR (Nuxt 3) contexts
- Built on top of `@todovue/tv-button` and `@todovue/tv-label`
- Tree-shake friendly (Vue marked external in library build)
- TypeScript support

## Installation
Using npm:
```bash
npm install @todovue/tv-card
```
Using yarn:
```bash
yarn add @todovue/tv-card
```
Using pnpm:
```bash
pnpm add @todovue/tv-card
```

## Style usage

### Vue 3 SPA (Vite)
```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import '@todovue/tv-card/style.css'
import '@todovue/tv-button/style.css'
import '@todovue/tv-style/style.css'
import { TvCard } from '@todovue/tv-card'

const app = createApp(App)
app.component('TvCard', TvCard)
app.mount('#app')
```

### Nuxt 3/4
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@todovue/tv-card/nuxt'
  ]
})
```

## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import { TvCard } from '@todovue/tv-card'

createApp(App)
  .use(TvCard) // enables <TvCard /> globally
  .mount('#app')
```
Local import inside a component:
```vue
<script setup>
import { TvCard } from '@todovue/tv-card'
import { ref } from 'vue'

const configCard = ref({
  title: 'Create Vue.js',
  description: 'Vue.js (commonly known as Vue; pronounced /vju/...',
  alt: 'Card Image',
  image: 'https://todovue.com/vue.webp',
  primaryButtonText: 'View more',
})

function handleButton() {
  console.log('Button clicked')
}
</script>

<template>
  <TvCard :configCard="configCard" @click-button="handleButton" />
</template>
```

## Nuxt 4 / SSR Usage
Create a plugin file: `plugins/tv-card.client.ts` (client-only is fine, or without suffix for SSR as it is safe):
```ts
import { defineNuxtPlugin } from '#app'
import { TvCard } from '@todovue/tv-card'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvCard)
})
```
Use anywhere:
```vue
<template>
  <TvCard :configCard="myConfig" @click-button="handleAction" />
</template>
```
Optional direct import (no plugin):
```vue
<script setup>
import { TvCard } from '@todovue/tv-card'
</script>
```

## Component Registration Options
| Approach                                                          | When to use                                    |
|-------------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvCard)`                                      | Many usages across app / design system install |
| Local named import `{ TvCard }`                                   | Isolated / code-split contexts                 |
| Direct default import `import { TvCard } from '@todovue/tv-card'` | Single usage or manual registration            |
| Plugin import `{ TvCardPlugin }`                                  | Explicit plugin installation                   |

## Props

| Prop Name    | Type    | Required | Default | Description                                     |
|--------------|---------|----------|---------|-------------------------------------------------|
| configCard   | object  | Yes      | -       | Configuration object for the card (see below).  |
| isHorizontal | boolean | No       | false   | If true, renders the card in horizontal layout. |

The component accepts a single prop `configCard` which is an object with the following structure:

| Property                         | Type     | Required | Default | Description                                      |
|----------------------------------|----------|----------|---------|--------------------------------------------------|
| title                            | string   | Yes      | -       | Card title text.                                 |
| description                      | string   | Yes      | -       | Card description/content text.                   |
| image                            | string   | Yes      | -       | URL of the card image.                           |
| alt                              | string   | No       | ''      | Alt text for the image (accessibility).          |
| primaryButtonText                | string   | Yes      | -       | Text for the primary action button.              |
| secondaryButtonText              | string   | No       | -       | Text for the secondary action button (optional). |
| labels                           | array    | No       | -       | Array of label objects `{id, name, color}`.      |
| limitLabels                      | number   | No       | 3       | Maximum number of labels to display.             |
| backgroundColor                  | string   | No       | -       | Custom background color for the card.            |
| color                            | string   | No       | -       | Custom text color for the card.                  |
| backgroundButtonColor            | string   | No       | -       | Custom background color for primary button.      |
| colorButton                      | string   | No       | -       | Custom text color for primary button.            |
| backgroundButtonSecondaryColor   | string   | No       | -       | Custom background color for secondary button.    |
| colorButtonSecondary             | string   | No       | -       | Custom text color for secondary button.          |

### Label Object Structure
```js
{
  id: 1,              // Unique identifier
  name: 'JavaScript', // Label text
  color: '#F7DF1E'    // Label color (hex, rgb, etc.)
}
```

## Events
| Event name (kebab)       | Payload      | Description                                     |
|--------------------------|--------------|-------------------------------------------------|
| `click-button`           | -            | Emitted when primary button is clicked.         |
| `click-secondary-button` | -            | Emitted when secondary button is clicked.       |
| `click-label`            | label object | Emitted when a label is clicked, returns label. |

Usage:
```vue
<TvCard 
  :configCard="config"
  @click-button="onPrimaryAction" 
  @click-secondary-button="onSecondaryAction"
  @click-label="onLabelClick"
/>
```

## Customization (Styles / Theming)
The card supports extensive customization through the `configCard` object:

### Basic Card with Custom Colors
```vue
<script setup>
import { ref } from 'vue'
import { TvCard } from '@todovue/tv-card'

const configCard = ref({
  title: 'Custom Styled Card',
  description: 'This card has custom colors applied',
  image: 'https://example.com/image.jpg',
  primaryButtonText: 'Action',
  backgroundColor: '#46627f',
  color: '#ffffff',
  backgroundButtonColor: '#062131',
  colorButton: '#ffffff'
})
</script>

<template>
  <TvCard :configCard="configCard" />
</template>
```

### Card with Labels
```vue
<script setup>
import { ref } from 'vue'
import { TvCard } from '@todovue/tv-card'

const configCard = ref({
  title: 'Vue.js Tutorial',
  description: 'Learn Vue.js with these comprehensive guides',
  image: 'https://todovue.com/vue.webp',
  primaryButtonText: 'Start Learning',
  labels: [
    { id: 1, name: 'JavaScript', color: '#F7DF1E' },
    { id: 2, name: 'HTML', color: '#E34F26' },
    { id: 3, name: 'CSS', color: '#1572B6' }
  ],
  limitLabels: 2 // Only show 2 labels
})
</script>

<template>
  <TvCard :configCard="configCard" @click-label="handleLabelClick" />
</template>
```

### Card with Two Buttons
```vue
<script setup>
import { ref } from 'vue'
import { TvCard } from '@todovue/tv-card'

const configCard = ref({
  title: 'Advanced Vue Tutorial',
  description: 'Deep dive into Vue.js advanced concepts',
  image: 'https://todovue.com/vuejs.webp',
  primaryButtonText: 'Read Article',
  secondaryButtonText: 'View Source',
  backgroundButtonColor: '#062131',
  colorButton: '#ffffff',
  backgroundButtonSecondaryColor: '#0eb096',
  colorButtonSecondary: '#000000'
})

function handlePrimary() {
  console.log('Primary action')
}

function handleSecondary() {
  console.log('Secondary action')
}
</script>

<template>
  <TvCard 
    :configCard="configCard"
    @click-button="handlePrimary"
    @click-secondary-button="handleSecondary"
  />
</template>
```

## Examples
Check out the demo files in `src/utils/demos/` for more examples:
- `default.vue` - Basic card usage
- `withCustomColors.vue` - Full customization example
- `withLabels.vue` - Card with labels
- `withMultipleLabels.vue` - Card with label limit
- `withTwoButtons.vue` - Card with primary and secondary buttons

## Accessibility
- Always provide `alt` text for images for screen readers.
- Button text should be descriptive of the action.
- Label clicks are keyboard accessible through the underlying `TvLabel` component.
- Color contrast should be considered when using custom colors.

## SSR Notes
- No direct DOM (`window` / `document`) access in source → safe for SSR.
- Styles are automatically applied when you import the library.
- The component works seamlessly with Nuxt 3's server-side rendering.
- Dependencies (`@todovue/tv-button` and `@todovue/tv-label`) are SSR-compatible.
- Ensure you import `@todovue/tv-card/style.css` in an SSR-compatible entry if needed.

## Development
```bash
git clone https://github.com/TODOvue/tv-card.git
cd tv-card
npm install
npm run dev     # run demo playground
npm run build   # build library
```
Local demo served from Vite using `index.html` + `src/demo` examples.

## Contributing
PRs and issues welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License
MIT © TODOvue

### Attributions
Crafted for the TODOvue component ecosystem
