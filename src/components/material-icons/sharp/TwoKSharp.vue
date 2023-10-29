
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'TwoKSharp',
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    const fontSize = computed(() => {
      const _size = +props.size;
      if (isNaN(_size)) {
        const [_, size, unit] = /(d+)(w+)/.exec(props.size) || [];
        return unit === 'px' ? pxToRem(+size) : props.size;
      } else {
        return pxToRem(_size);
      }
    });

    return {
      fontSize,
      color: props.color
    }
  }
}
</script>

<template>
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M21,3H3v18h18V3z M8,12.5v1h3V15H6.5v-3.5h3v-1h-3V9H11v3.5H8z M18,15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25,9H18 l-2.25,3L18,15z"/></g>
  </svg>
</template>
        