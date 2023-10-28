
<script>
import { computed } from 'vue';
export default {
  name: 'ViewTimelineSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M21,3H3v18h18V3z M12,17H6v-2h6V17z M15,13H9v-2h6V13z M18,9h-6V7h6V9z"/></g>
  </svg>
</template>
        