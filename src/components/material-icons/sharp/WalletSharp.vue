
<script>
import { computed } from 'vue';
export default {
  name: 'WalletSharp',
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    const fontSize = computed(() => props.size + 'px')

    return {
      fontSize,
      color: props.color
    }
  }
}
</script>

<template>
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M22,4H2v16h20V4z M15.75,14.09L4,11.22V10h16v0.53L15.75,14.09z M4,6h16v2H4V6z"/></g>
  </svg>
</template>
        