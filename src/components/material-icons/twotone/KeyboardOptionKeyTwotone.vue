
<script>
import { computed } from 'vue';
export default {
  name: 'KeyboardOptionKeyTwotone',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="6" x="15" y="5"/><polygon points="9,5 3,5 3,7 7.85,7 14.77,19 21,19 21,17 15.93,17"/></g></g>
  </svg>
</template>
        