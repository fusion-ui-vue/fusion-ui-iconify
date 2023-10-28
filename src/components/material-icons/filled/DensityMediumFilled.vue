
<script>
import { computed } from 'vue';
export default {
  name: 'DensityMediumFilled',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="18" x="3" y="3"/><rect height="2" width="18" x="3" y="19"/><rect height="2" width="18" x="3" y="11"/></g></g>
  </svg>
</template>
        