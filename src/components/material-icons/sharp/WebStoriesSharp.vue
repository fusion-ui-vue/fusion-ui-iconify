
<script>
import { computed } from 'vue';
export default {
  name: 'WebStoriesSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M17,4c1.1,0,2,0,2,0v16c0,0-0.9,0-2,0V4z M2,2v20h13V2H2z M21,18c0.83,0,1.5,0,1.5,0V6c0,0-0.67,0-1.5,0V18z"/></g>
  </svg>
</template>
        