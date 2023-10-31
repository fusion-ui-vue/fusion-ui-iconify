
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'Brightness2Twotone',
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
  <svg :class="cssClass" class="fn-icon"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 12c0-4.41-3.59-8-8-8-.34 0-.68.02-1.01.07C10.9 6.23 12 9.05 12 12c0 2.95-1.1 5.77-3.01 7.93.33.05.67.07 1.01.07 4.41 0 8-3.59 8-8z" opacity=".3"/><path d="M5 20.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65zM12 12c0-2.95-1.1-5.77-3.01-7.93C9.32 4.02 9.66 4 10 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07C10.9 17.77 12 14.95 12 12z"/>
  </svg>
</template>
        