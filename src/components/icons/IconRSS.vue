<script setup lang="ts">
import { Colors } from '@/configs/colors'
</script>

<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="23" height="23" rx="7.5" :fill="Colors.GRAY_DARK" />
    <rect x="0.5" y="0.5" width="23" height="23" rx="7.5" :stroke="Colors.ICON_BORDER_RED" />
    <path
      d="M6.66663 11.3333C8.25792 11.3333 9.78405 11.9655 10.9093 13.0907C12.0345 14.2159 12.6666 15.742 12.6666 17.3333"
      :stroke="Colors.WHITE"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.66663 6.66667C9.4956 6.66667 12.2087 7.79047 14.2091 9.79086C16.2095 11.7912 17.3333 14.5044 17.3333 17.3333"
      :stroke="Colors.WHITE"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.33329 17.3333C7.70148 17.3333 7.99996 17.0349 7.99996 16.6667C7.99996 16.2985 7.70148 16 7.33329 16C6.9651 16 6.66663 16.2985 6.66663 16.6667C6.66663 17.0349 6.9651 17.3333 7.33329 17.3333Z"
      :stroke="Colors.WHITE"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
