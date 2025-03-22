<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  text: String,
})
const short = ref(true)
</script>

<template>
  <div class="flex-div">
    <span :class="short ? 'article' : 'text-full'">
      {{ short ? props.text?.slice(0, 40) : props.text }}
    </span>
    <v-icon
      size="small"
      :icon="short ? 'mdi-eye' : 'mdi-eye-off'"
      color="#789"
      @click="short = !short"
    ></v-icon>
  </div>
</template>

<style scoped>
.article {
  position: relative;
  width: 95%;
  text-wrap-mode: nowrap;
  background: -webkit-linear-gradient(0deg, #333, #888, #fff, #fff);
  /* background: -webkit-linear-gradient(0deg, rgba(255, 255, 255, 1), , rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)); */
  /* background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.flex-div {
  display: flex;
}

/* article:after {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  content: '';
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0) 80%);
  pointer-events: none;
} */
/* .text-shorted {
  max-width: 240px;
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0) 80%);
}
.text-full {
  max-width: 100%;
  overflow-wrap: break-word;
} */
</style>
