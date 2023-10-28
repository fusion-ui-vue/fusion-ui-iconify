
<script>
import { computed } from 'vue';
export default {
  name: 'Man2Sharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="16,7 8,7 8,15 10.5,15 10.5,22 13.5,22 13.5,15 16,15"/><circle cx="12" cy="4" r="2"/></g></g>
  </svg>
</template>
        