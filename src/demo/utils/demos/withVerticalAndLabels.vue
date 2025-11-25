<template>
  <tv-card
    @click-button="handleButton"
    @click-secondary-button="handleSecondaryButton"
    @click-label="handleLabelClick"
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

const labels = [
  { id: 1, name: "Vue.js", color: "#4FC08D" },
  { id: 2, name: "JavaScript", color: "#F0DB4F" },
  { id: 3, name: "HTML", color: "#E34F26" },
];

const configCard = ref({
  title: 'The Creative Routine Before Start Coding',
  description: 'A personal routine I use that helps me generate new ideas and start coding more creatively.',
  alt: 'Card Image',
  image: 'https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763701508/jarnmxxvmhbisvpzzfwu.webp',
  primaryButtonText: 'Read more',
  labels: labels,
});

const handleButton = () => {
  console.log('Primary button clicked');
};

const handleSecondaryButton = () => {
  console.log('Secondary button clicked');
};

const handleLabelClick = (label) => {
  console.log('Label clicked:', label);
};
</script>

