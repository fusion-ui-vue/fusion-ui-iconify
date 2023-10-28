
<script>
import { computed } from 'vue';
export default {
  name: 'FormatPaintSharp',
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
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <path d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z"/>
  </svg>
</template>
        