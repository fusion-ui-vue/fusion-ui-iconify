
<script>
import { computed } from 'vue';
export default {
  name: 'TurnSlightLeftSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><polygon points="11.66,6 11.66,4 6,4 6,9.66 8,9.66 8,7.41 13,12.41 13,20 15,20 15,11.59 9.41,6"/></g>
  </svg>
</template>
        