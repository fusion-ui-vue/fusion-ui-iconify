
<script>
import { computed } from 'vue';
export default {
  name: 'CurrencyFrancTwotone',
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
    <g><rect fill="none" height="24" width="24"/></g><g><polygon points="18,5 18,3 7,3 7,16 5,16 5,18 7,18 7,21 9,21 9,18 13,18 13,16 9,16 9,13 17,13 17,11 9,11 9,5"/></g>
  </svg>
</template>
        