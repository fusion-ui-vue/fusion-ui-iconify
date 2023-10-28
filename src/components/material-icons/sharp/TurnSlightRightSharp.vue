
<script>
import { computed } from 'vue';
export default {
  name: 'TurnSlightRightSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><polygon points="12.34,6 12.34,4 18,4 18,9.66 16,9.66 16,7.41 11,12.41 11,20 9,20 9,11.59 14.59,6"/></g>
  </svg>
</template>
        