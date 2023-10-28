
<script>
import { computed } from 'vue';
export default {
  name: 'BatterySaverSharp',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M17,4h-3V2h-4v2H7v18h10V4z M15,14h-2v2h-2v-2H9v-2h2v-2h2v2h2V14z"/></g></g>
  </svg>
</template>
        