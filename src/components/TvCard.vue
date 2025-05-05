<script setup>
import TvButton from "@todovue/tv-button";
import TvLabel from "@todovue/tv-label";
import useCard from "../composable/useCard";

const props = defineProps({
  configCard: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["clickButton", "clickLabel", "clickSecondaryButton"]);

const { handleClickLabel, handleClick, handleSecondaryClick, card } = useCard(props, emit);
</script>

<style scoped lang="scss" src="../assets/scss/style.scss"></style>

<template>
  <div class="tv-card-body" v-if="card">
    <div class="tv-card" :style="card.customStyleCard">
      <div class="tv-card-image">
        <img :src="card.image" :alt="card.alt" />
      </div>
      <div class="tv-card-content">
        <div class="tv-card-title" :style="card.customStyleCard">
          {{ card.title }}
        </div>
        <div class="tv-card-label" v-if="card.labels">
          <tv-label
            v-for="label in card.labels.slice(0, card.limitLabels)"
            :key="label.id"
            :color="label.color"
            @click="handleClickLabel(label)"
          >
            {{ label.name }}
          </tv-label>
        </div>
        <div class="tv-card-description" :class="{ 'tv-pt-0': !card.labels }">
          {{ card.description }}
        </div>
      </div>
      <div class="tv-card-action">
        <div class="tv-card-button">
          <tv-button
            @click="handleClick"
            rounded
            :class="{ 'tv-btn-small': card.secondaryButtonText }"
            :customStyle="card.customStyleButton"
          >
            {{ card.primaryButtonText }}
          </tv-button>
          <tv-button
            @click="handleSecondaryClick"
            isRounded
            v-if="card.secondaryButtonText"
            isInfo
            isSmall
            :customStyle="card.customStyleButtonSecondary"
          >
            {{ card.secondaryButtonText }}
          </tv-button>
        </div>
      </div>
    </div>
  </div>
</template>

