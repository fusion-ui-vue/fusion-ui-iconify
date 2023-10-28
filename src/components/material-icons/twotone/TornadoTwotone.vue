
<script>
import { computed } from 'vue';
export default {
  name: 'TornadoTwotone',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="9.1,13 14.9,13 16.64,10 7.36,10"/><polygon opacity=".3" points="12,18.01 13.74,15 10.26,15"/><polygon opacity=".3" points="4.47,5 6.21,8 17.79,8 19.53,5"/><path d="M1,3l11,19L23,3H1z M12,18.01L10.26,15h3.48L12,18.01z M14.9,13H9.1l-1.74-3h9.27L14.9,13z M6.21,8L4.47,5h15.06l-1.74,3 H6.21z"/></g></g>
  </svg>
</template>
        