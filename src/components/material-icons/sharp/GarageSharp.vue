
<script>
import { computed } from 'vue';
export default {
  name: 'GarageSharp',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><circle cx="15" cy="13" r="1"/><circle cx="9" cy="13" r="1"/><polygon points="8.33,7.5 7.67,9.5 16.33,9.5 15.67,7.5"/><path d="M22,2H2v20h20V2z M19,18.5h-2v-2H7v2H5v-7.31L6.89,5.5h10.21L19,11.19V18.5z"/></g></g>
  </svg>
</template>
        