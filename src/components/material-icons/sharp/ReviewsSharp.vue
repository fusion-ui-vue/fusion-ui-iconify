
<script>
import { computed } from 'vue';
export default {
  name: 'ReviewsSharp',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M22,2H2v20l4-4h16V2z M13.57,11.57L12,15l-1.57-3.43L7,10l3.43-1.57L12,5l1.57,3.43L17,10L13.57,11.57z"/></g>
  </svg>
</template>
        