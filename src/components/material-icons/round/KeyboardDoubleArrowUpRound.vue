
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'KeyboardDoubleArrowUpRound',
  props: {
    size: {
      type: [Number, String],
      default: 'inherit'
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    const cssClass = computed(() => {
      let fontSize;
      const _size = +props.size;
      if (isNaN(_size)) {
        const [_, size, unit] = /(d+)(w+)/.exec(props.size) || [];
        fontSize = unit === 'px' ? pxToRem(+size) : props.size;
      } else {
        fontSize = pxToRem(_size);
      }

      return css({
        fontSize,
        color: props.color
      });
    });

    return {
      cssClass
    };
  }
}
</script>

<template>
  <svg :class="cssClass" class="fn-icon"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
    <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M6.7,18.29L6.7,18.29c0.39,0.39,1.02,0.39,1.41,0L12,14.42l3.88,3.88c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41l-4.59-4.59c-0.39-0.39-1.02-0.39-1.41,0L6.7,16.88C6.31,17.27,6.31,17.9,6.7,18.29z"/><path d="M6.7,11.7L6.7,11.7c0.39,0.39,1.02,0.39,1.41,0L12,7.83l3.88,3.88c0.39,0.39,1.02,0.39,1.41,0l0,0 c0.39-0.39,0.39-1.02,0-1.41l-4.59-4.59c-0.39-0.39-1.02-0.39-1.41,0L6.7,10.29C6.31,10.68,6.31,11.31,6.7,11.7z"/></g></g>
  </svg>
</template>
        