
<script>
import { computed } from 'vue';
export default {
  name: 'ShortTextFilled',
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
    <g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M4,9h16v2H4V9z M4,13h10v2H4V13z"/></g></g></g>
  </svg>
</template>
        