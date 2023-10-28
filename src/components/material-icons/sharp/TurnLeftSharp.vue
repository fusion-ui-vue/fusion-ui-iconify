
<script>
import { computed } from 'vue';
export default {
  name: 'TurnLeftSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><polygon points="6.83,11 8.41,12.59 7,14 3,10 7,6 8.41,7.41 6.83,9 17,9 17,20 15,20 15,11"/></g>
  </svg>
</template>
        