
<script>
import { computed } from 'vue';
export default {
  name: 'MarginSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M3,3v18h18V3H3z M9,13H7v-2h2V13z M9,9H7V7h2V9z M13,13h-2v-2h2V13z M13,9h-2V7h2V9z M17,13h-2v-2h2V13z M17,9h-2V7h2V9z"/></g>
  </svg>
</template>
        