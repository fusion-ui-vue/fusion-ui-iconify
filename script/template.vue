<script>
import { computed } from 'vue';
export default {
  name: '${filename}',
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
    const fontSize = computed(() => props.size + 'px');

    return {
      fontSize,
      color: props.color
    };
  }
};
</script>

<template>
  <svg class="fn-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" :style="{ fontSize, color }">
    <!-- content -->
  </svg>
</template>
