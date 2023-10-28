
<script>
import { computed } from 'vue';
export default {
  name: 'EjectFilled',
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
    <path d="M0 24V0h24v24H0z" fill="none"/><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"/>
  </svg>
</template>
        