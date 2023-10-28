
<script>
import { computed } from 'vue';
export default {
  name: 'DatasetSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M21,3H3v18h18V3z M11,17H7v-4h4V17z M11,11H7V7h4V11z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z"/></g></g>
  </svg>
</template>
        