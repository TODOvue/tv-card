<template>
  <tv-card
    @click-label="handleLabel"
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
  title: 'Write JavaScript',
  description: 'JavaScript, often abbreviated as JS...',
  primaryButtonText: 'See more',
  alt: 'Card Image',
  image: 'https://todovue.com/code.webp',
  labels: [
    {
      id: 1,
      name: 'JavaScript',
      color: '#F7DF1E',
    },
    {
      id: 2,
      name: 'HTML',
      color: '#E34F26',
    },
    {
      id: 3,
      name: 'CSS',
      color: '#1572B6',
    }
  ],
});

const handleLabel = (label) => {
  console.log(label);
};

const handleButton = () => {
  console.log('Button clicked');
};
</script>
