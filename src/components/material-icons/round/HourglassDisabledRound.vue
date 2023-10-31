
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'HourglassDisabledRound',
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
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fill: 'currentcolor',
        flexShrink: 0,
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
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
    <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M2.81,2.81c-0.39-0.39-1.02-0.39-1.41,0C1,3.2,1,3.83,1.39,4.22l8.19,8.19l-3,3.01C6.21,15.8,6,16.31,6,16.84V20 c0,1.1,0.9,2,2,2h8c0.86,0,1.58-0.54,1.87-1.3l1.91,1.91c0.39,0.39,1.02,0.39,1.41,0c0.39-0.39,0.39-1.02,0-1.41L2.81,2.81z M16,19c0,0.55-0.45,1-1,1H9c-0.55,0-1-0.45-1-1v-2.5l2.84-2.84L16,18.83V19z"/><path d="M8,5c0-0.55,0.45-1,1-1h6c0.55,0,1,0.45,1,1v2.5l-2.84,2.84l1.25,1.25l3-2.99C17.79,8.22,18,7.71,18,7.18V4 c0-1.11-0.9-2-2-2H8C7.14,2,6.42,2.54,6.13,3.3L8,5.17V5z"/></g></g>
  </svg>
</template>
        