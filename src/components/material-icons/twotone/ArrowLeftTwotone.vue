
<script>
import { computed } from 'vue';
export default {
  name: 'ArrowLeftTwotone',
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
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <path d="M24 0v24H0V0h24z" fill="none" opacity=".87"/><path d="M14 7l-5 5 5 5V7z"/>
  </svg>
</template>
        