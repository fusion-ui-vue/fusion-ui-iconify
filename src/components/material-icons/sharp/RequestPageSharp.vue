
<script>
import { computed } from 'vue';
export default {
  name: 'RequestPageSharp',
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
    <rect fill="none" height="24" width="24"/><path d="M14,2H4.01L4,22h16V8L14,2z M15,11h-4v1h4v5h-2v1h-2v-1H9v-2h4v-1H9V9h2V8h2v1h2V11z"/>
  </svg>
</template>
        