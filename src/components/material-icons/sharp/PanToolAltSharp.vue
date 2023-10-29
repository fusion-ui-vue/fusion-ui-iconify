
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'PanToolAltSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M20.18,13.4L19.1,21h-9L5,15.62l1.22-1.23L10,15.24V4.5C10,3.67,10.67,3,11.5,3S13,3.67,13,4.5v6h1.38L20.18,13.4z"/></g>
  </svg>
</template>
        