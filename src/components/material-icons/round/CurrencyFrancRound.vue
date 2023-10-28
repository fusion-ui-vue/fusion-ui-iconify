
<script>
import { computed } from 'vue';
export default {
  name: 'CurrencyFrancRound',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M18,4c0-0.55-0.45-1-1-1H8C7.45,3,7,3.45,7,4v12H6c-0.55,0-1,0.45-1,1s0.45,1,1,1h1v2c0,0.55,0.45,1,1,1h0 c0.55,0,1-0.45,1-1v-2h3c0.55,0,1-0.45,1-1s-0.45-1-1-1H9v-3h7c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H9V5h8C17.55,5,18,4.55,18,4z"/></g>
  </svg>
</template>
        