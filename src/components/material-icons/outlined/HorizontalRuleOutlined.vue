
<script>
import { computed } from 'vue';
export default {
  name: 'HorizontalRuleOutlined',
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
    <g><rect fill="none" fill-rule="evenodd" height="24" width="24"/><g><rect fill-rule="evenodd" height="2" width="16" x="4" y="11"/></g></g>
  </svg>
</template>
        