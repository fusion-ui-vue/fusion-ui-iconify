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
      size: fontSize,
      color: props.color
    };
  }
};
</script>

<template>
  <svg class="fn-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
    ${Array.isArray(paths) ? paths.join('\n') : null}
  </svg>
</template>

<style>
.fn-icon {
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentcolor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: v-bind(size);
  color: v-bind(color);
}
</style>
