<script setup>
import { defineAsyncComponent } from 'vue';
import { TvDemo } from '@todovue/tv-demo';

const TvCard = defineAsyncComponent(() => import('../components/TvCard.vue'));
import { demos } from './utils/mocks.js';
</script>

<template>
  <TvDemo
    :component="TvCard"
    :manual-emits="['clickButton', 'clickLabel', 'clickSecondaryButton']"
    :variants="demos"
    component-name="TvCard"
    hide-background
    npm-install="@todovue/tv-card"
    source-link="https://github.com/TODOvue/tv-card"
    url-clone="https://github.com/TODOvue/tv-card.git"
    version="1.1.4"
  />
</template>
