<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TvCard
###### TvCard is a customizable and flexible card component for Vue 3 applications, ideal for showcasing content with a title, image, description, and action buttons. It supports additional elements like secondary buttons and labels for enhanced interactivity and visual structure.

[![npm](https://img.shields.io/npm/v/@todovue/tvcard.svg)](https://www.npmjs.com/package/@todovue/tvcard) [![Netlify Status](https://api.netlify.com/api/v1/badges/cb4b8651-1062-4a0b-aa47-28437cbf9fdc/deploy-status)](https://app.netlify.com/sites/todovue-card/deploys) [![npm](https://img.shields.io/npm/dm/@todovue/tvcard.svg)](https://www.npmjs.com/package/@todovue/tvcard) [![npm](https://img.shields.io/npm/dt/@todovue/tvcard.svg)](https://www.npmjs.com/package/@todovue/tvcard) ![GitHub](https://img.shields.io/github/license/TODOvue/todovue-card) ![GitHub Release Date](https://img.shields.io/github/release-date/TODOvue/todovue-card)

## Table of Contents
- [Demo](https://todovue-card.netlify.app/)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Events](#events)
- [Customize](#customize)
- [Development](#development)
- [Changelog](https://github.com/TODOvue/todovue-card/blob/main/CHANGELOG.md)
- [Contributing](https://github.com/TODOvue/todovue-card/blob/main/CONTRIBUTING.md)
- [License](https://github.com/TODOvue/todovue-demo/card/main/LICENSE)

## Installation
Install with npm or yarn
```bash
npm install @todovue/tvcardd
```
```bash
yarn add @todovue/tvcard
```
Import
```js
import TvCard from '@todovue/tvcard'
```

You can also import it directly in the **main.js** file, so you don't have to import it in the pages
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvCard from "@todovue/tvcard"

const app = createApp(App);
app.component("TvCard", TvCard);
app.mount("#app");
```
## Usage
```html
<template>
  <tv-card
    @click-button="handleButton"
    :configCard="configCard"
  />
</template>

<script setup>
import { ref } from "vue";
import TvCard from "@todovue/tvcard"

const configCard = ref({
  title: "Create Vue.js",
  description: "Vue.js (commonly known as Vue; pronounced /vjuː/...",
  alt: "Card Image",
  image: "https://todovue.com/vue.webp",
  primaryButtonText: "View more",
});

const handleButton = () => {
  console.log("Button clicked");
}
</script>
```

## Props
| Name       | Type   | Default                  | Description                        |
|------------|--------|--------------------------|------------------------------------|
| configCard | Object | [See below](#configcard) | Object with the card configuration |

### configCard
| Name                           | Type   | Default   | Description                                   | required |
|--------------------------------|--------|-----------|-----------------------------------------------|----------|
| title                          | String | `""`      | Card title                                    | `true`   |
| description                    | String | `""`      | Card description                              | `true`   |
| image                          | String | `""`      | Card image                                    | `true`   |
| alt                            | String | `""`      | Card image alt                                | `true`   |
| primaryButtonText              | String | `""`      | Card primary button text                      | `true`   |
| secondaryButtonText            | String | `""`      | Card secondary button text                    | `false`  |
| labels                         | Array  | `[]`      | Card labels                                   | `false`  |
| limitLabels                    | Number | `3`       | Card limit labels                             | `false`  |
| backgroundColor                | String | `#0E131F` | Card custom background color                  | `false`  |
| color                          | String | `#AFDEDC` | Card custom color                             | `false`  |
| backgroundButtonColor          | String | `#EF233C` | Card custom background primary button color   | `false`  |
| buttonColor                    | String | `#F4FAFF` | Card custom primary button color              | `false`  |
| backgroundButtonSecondaryColor | String | `#2F80ED` | Card custom background secondary button color | `false`  |
| colorButtonSecondary           | String | `#F4FAFF` | Card custom secondary button color            | `false`  |

## Events
| Name                 | Description                                                                    |
|----------------------|--------------------------------------------------------------------------------|
| clickButton          | Event emitted when the primary button is clicked, returns the button's value   |
| clickSecondaryButton | Event emitted when the secondary button is clicked, returns the button's value |
| clickLabel           | Event emitted when the label is clicked, returns the label's value             |

## Customize
You can customize the card by cardConfig, you can see the [props](#props) section to see the available options

```js
const configCard = ref({
  backgroundColor: "#000000", // Card custom background color
  color: "#ffffff", // Card custom color
  backgroundButtonColor: "#ffffff", // Card custom background primary button color
  buttonColor: "#000000", // Card custom primary button color
  backgroundButtonSecondaryColor: "#ffffff", // Card custom background secondary button color
  colorButtonSecondary: "#000000", // Card custom secondary button color
});

```

```html
<template>
  <tv-card
    @click-button="handleButton"
    :configCard="configCard"
  />
</template>

<script setup>
import { ref } from "vue";
import TvCard from "@todovue/tvcard"

const configCard = ref({
  title: "Create Vue.js",
  description: "Vue.js (commonly known as Vue; pronounced /vjuː/...",
  alt: "Card Image",
  image: "https://todovue.com/vue.webp",
  primaryButtonText: "View more",
  backgroundColor: "#000000",
  color: "#ffffff",
  backgroundButtonColor: "#ffffff",
  buttonColor: "#000000",
});

const handleButton = () => {
  console.log("Button clicked");
}
</script>
```

## Development
Clone the repository and install the dependencies
```bash
git clone https://github.com/TODOvue/todovue-card.git
cd todovue-card
yarn install
```
---
## License
[MIT](https://github.com/TODOvue/todovue-card/blob/main/LICENSE)
