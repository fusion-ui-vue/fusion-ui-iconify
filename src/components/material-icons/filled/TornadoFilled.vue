
<script>
import { computed } from 'vue';
export default {
  name: 'TornadoFilled',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><g><polygon points="20.11,8 23,3 1,3 3.89,8"/></g><g><polygon points="7.95,15 12,22 16.05,15"/></g><g><polygon points="18.95,10 5.05,10 6.79,13 17.21,13"/></g></g></g>
  </svg>
</template>
        