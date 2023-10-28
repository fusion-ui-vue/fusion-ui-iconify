
<script>
import { computed } from 'vue';
export default {
  name: 'Timer10SelectSharp',
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
    <rect fill="none" height="24" width="24"/><path d="M13,8v8h-3V8H13 M16,5H7v14h9V5z M1,8h2v11h3V5H1V8z M23,11h-6v5h4v1h-4v2h6v-5h-4v-1h4V11z"/>
  </svg>
</template>
        