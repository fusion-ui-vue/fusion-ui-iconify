
<script>
import { computed } from 'vue';
export default {
  name: 'ExpandTwotone',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M4,20h16v2H4V20z M4,2h16v2H4V2z M13,9h3l-4-4L8,9h3v6H8l4,4l4-4h-3V9z"/></g>
  </svg>
</template>
        