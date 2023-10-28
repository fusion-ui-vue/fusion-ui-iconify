
<script>
import { computed } from 'vue';
export default {
  name: 'DoorSlidingSharp',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M20,19V3h-7.25v16h-1.5V3H4v16H3v2h18v-2H20z M10,13H8v-2h2V13z M16,13h-2v-2h2V13z"/></g>
  </svg>
</template>
        