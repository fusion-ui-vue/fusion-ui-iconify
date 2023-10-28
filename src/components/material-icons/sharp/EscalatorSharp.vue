
<script>
import { computed } from 'vue';
export default {
  name: 'EscalatorSharp',
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
    <g><rect fill="none" height="24" width="24"/><g><path d="M21,3H3v18h18L21,3z M18.5,9h-3.2l-5,9H5.5v-3h3.2l5-9h4.8V9z"/></g></g>
  </svg>
</template>
        