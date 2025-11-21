<template>
  <tv-card
    @click-button="handleButton"
    :configCard="configCard"
  />
</template>

<script setup>
import { ref } from 'vue';
import { TvCard } from '@todovue/tv-card';
import '@todovue/tv-card/style.css';
import '@todovue/tv-label/style.css';
import '@todovue/tv-button/style.css';

const configCard = ref({
  title: 'Create Vue.js',
  description: 'Vue.js (commonly known as Vue; pronounced /vjuː/...',
  alt: 'Card Image',
  image: 'https://todovue.com/vue.webp',
  primaryButtonText: 'View more',
});

const handleButton = () => {
  console.log('Button clicked');
};
</script>
