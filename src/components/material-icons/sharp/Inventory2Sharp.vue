
<script>
import { computed } from 'vue';
export default {
  name: 'Inventory2Sharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M2,2v6.7h1V22h18V8.7h1V2H2z M15,14H9v-2h6V14z M20,7H4V4h16V7z"/></g>
  </svg>
</template>
        