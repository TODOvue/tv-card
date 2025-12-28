<script setup>
import { defineAsyncComponent } from 'vue';

const TvCard = defineAsyncComponent(() => import('../components/TvCard.vue'));
import { demos } from './utils/mocks.js';
</script>

<template>
  <TvDemo
    :component="TvCard"
    :variants="demos"
    hide-background
    component-name="TvCard"
    npm-install="@todovue/tv-card"
    source-link="https://github.com/TODOvue/tv-card"
    url-clone="https://github.com/TODOvue/tv-card.git"
    version="1.1.2"
  />
</template>
