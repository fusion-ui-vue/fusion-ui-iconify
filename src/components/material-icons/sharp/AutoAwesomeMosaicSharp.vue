
<script>
import { computed } from 'vue';
export default {
  name: 'AutoAwesomeMosaicSharp',
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
    <g><rect fill="none" height="24" width="24" x="0"/></g><g><g><path d="M3,21h8V3L3,3V21z M21,3h-8v8h8V3z M13,21h8v-8h-8V21z"/></g></g>
  </svg>
</template>
        