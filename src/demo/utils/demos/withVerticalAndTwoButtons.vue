<template>
  <tv-card
    @click-button="handleButton"
    @click-secondary-button="handleSecondaryButton"
    :configCard="configCard"
    is-vertical
  />
</template>

<script setup>
import { ref } from 'vue';
import { TvCard } from '@todovue/tv-card';
import '@todovue/tv-card/style.css';
import '@todovue/tv-label/style.css';
import '@todovue/tv-button/style.css';

const configCard = ref({
  title: 'The Creative Routine Before Start Coding',
  description: 'A personal routine I use that helps me generate new ideas and start coding more creatively.',
  alt: 'Card Image',
  image: 'https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763701508/jarnmxxvmhbisvpzzfwu.webp',
  primaryButtonText: 'Read more',
  secondaryButtonText: 'Save',
});

const handleButton = () => {
  console.log('Primary button clicked');
};

const handleSecondaryButton = () => {
  console.log('Secondary button clicked');
};
</script>

