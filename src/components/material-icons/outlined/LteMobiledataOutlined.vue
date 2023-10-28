
<script>
import { computed } from 'vue';
export default {
  name: 'LteMobiledataOutlined',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M6,14h3v2H4V8h2V14z M9,10h2v6h2v-6h2V8H9V10z M21,10V8h-5v8h5v-2h-3v-1h3v-2h-3v-1H21z"/></g></g>
  </svg>
</template>
        