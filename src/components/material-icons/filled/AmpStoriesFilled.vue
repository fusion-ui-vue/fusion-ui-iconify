
<script>
import { computed } from 'vue';
export default {
  name: 'AmpStoriesFilled',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g/><g><rect height="15" width="10" x="7" y="4"/><rect height="11" width="2" x="3" y="6"/><rect height="11" width="2" x="19" y="6"/></g></g>
  </svg>
</template>
        