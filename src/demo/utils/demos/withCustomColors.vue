<template>
  <tv-card
    @click-label="handleLabel"
    @click-button="handleButton"
    @click-secondary-button="handleSecondaryButton"
    :configCard="configCard"
  />
</template>

<script setup>
import { ref } from 'vue';
import { TvCard } from '@todovue/tv-card';

const configCard = ref({
  title: 'Write Vue.js',
  description: 'Vue.js (commonly known as Vue; pronounced /vjuː/, like "view")...',
  primaryButtonText: 'View code',
  secondaryButtonText: 'View blog',
  image: 'https://todovue.com/vuejs.webp',
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
    },
  ],
  backgroundColor: '#46627f',
  color: '#ffffff',
  backgroundButtonColor: '#062131',
  colorButton: '#ffffff',
  backgroundButtonSecondaryColor: '#0eb096',
  colorButtonSecondary: '#000000',
});

const handleLabel = (label) => {
  console.log(label);
};

const handleButton = () => {
  console.log('Button clicked');
};

const handleSecondaryButton = () => {
  console.log('Secondary button clicked');
};
</script>
