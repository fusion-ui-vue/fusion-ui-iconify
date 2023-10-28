
<script>
import { computed } from 'vue';
export default {
  name: 'MailLockSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M22,9.97V4H2.01L2,20h14v-5.03c0-2.76,2.24-5,5-5H22z M20,8l-8,5L4,8V6l8,5l8-5V8z"/></g><g><path d="M23,15v-0.89c0-1-0.68-1.92-1.66-2.08C20.08,11.82,19,12.79,19,14v1h-1v5h6v-5H23z M22,15h-2v-1c0-0.55,0.45-1,1-1 s1,0.45,1,1V15z"/></g></g></g>
  </svg>
</template>
        