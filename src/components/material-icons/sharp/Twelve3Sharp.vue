
<script>
import { computed } from 'vue';
export default {
  name: 'Twelve3Sharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M7,15H5.5v-4.5H4V9h3V15z M13.5,13.5h-3v-1h3V9H9v1.5h3v1H9V15h4.5V13.5z M19.5,15V9H15v1.5h3v1h-2v1h2v1h-3V15H19.5z"/></g>
  </svg>
</template>
        