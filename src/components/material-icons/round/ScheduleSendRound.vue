
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'ScheduleSendRound',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M17,10c0.1,0,0.19,0.01,0.28,0.01L4.39,4.58C3.73,4.31,3,4.79,3,5.51v3.71c0,0.46,0.31,0.86,0.76,0.97L11,12l-7.24,1.81 C3.31,13.92,3,14.32,3,14.78v3.71c0,0.72,0.73,1.2,1.39,0.92L10,17.05c0-0.02,0-0.03,0-0.05C10,13.14,13.14,10,17,10z"/><path d="M17,12c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S19.76,12,17,12z M18.29,19l-1.65-1.65 c-0.09-0.09-0.15-0.22-0.15-0.35v-2.5c0-0.28,0.22-0.5,0.5-0.5h0c0.28,0,0.5,0.22,0.5,0.5v2.29l1.5,1.5c0.2,0.2,0.2,0.51,0,0.71 l0,0C18.8,19.2,18.49,19.2,18.29,19z"/></g></g>
  </svg>
</template>
        