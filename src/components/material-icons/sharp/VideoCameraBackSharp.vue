
<script>
import { computed } from 'vue';
export default {
  name: 'VideoCameraBackSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M18,10.48V4H2v16h16v-6.48l4,3.98v-11L18,10.48z M5,16l2.38-3.17L9,15l2.62-3.5L15,16H5z"/></g>
  </svg>
</template>
        