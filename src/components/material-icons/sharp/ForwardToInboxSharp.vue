
<script>
import { computed } from 'vue';
export default {
  name: 'ForwardToInboxSharp',
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
    <g><rect fill="none" height="24" width="24"/><path d="M22,4H2v16h11v-2H4V8l8,5l8-5v5h2V4z M12,11L4,6h16L12,11z M19,15l4,4l-4,4v-3h-4v-2h4V15z"/></g>
  </svg>
</template>
        