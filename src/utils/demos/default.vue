<template>
  <tv-card
    @click-button="handleButton"
    :configCard="configCard"
  />
</template>

<script setup>
import { ref } from 'vue';
import TvCard from '@todovue/tv-card';

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
