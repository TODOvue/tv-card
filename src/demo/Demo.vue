<script setup>
import { TvDemo } from '@todovue/tv-demo';
import { defineAsyncComponent } from 'vue';

const TvCard = defineAsyncComponent(() => import('../components/TvCard.vue'));
import { demos } from './utils/mocks.js';
</script>

<template>
  <tv-demo
    :component="TvCard"
    :variants="demos"
    hide-background
    name-component="TvCard"
    npm-install="@todovue/tv-card"
    source-link="https://github.com/TODOvue/tv-card"
    url-clone="https://github.com/TODOvue/tv-card.git"
    version="1.0.4"
  />
</template>
