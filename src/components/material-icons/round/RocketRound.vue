
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'RocketRound',
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
    <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><path d="M11.41,2.87c0.35-0.26,0.82-0.26,1.18,0C13.81,3.75,16.5,6.46,16.5,13c0,2.16-0.78,4.76-1.36,6.35 C15,19.74,14.63,20,14.21,20l-4.41,0c-0.42,0-0.8-0.26-0.94-0.65C8.28,17.76,7.5,15.16,7.5,13C7.5,6.46,10.19,3.75,11.41,2.87z M14,11c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2S14,12.1,14,11z M7.69,20.52c-0.48-1.23-1.52-4.17-1.67-6.87l-1.13,0.75 C4.33,14.78,4,15.4,4,16.07v4.45c0,0.71,0.71,1.19,1.37,0.93L7.69,20.52z M20,20.52v-4.45c0-0.67-0.33-1.29-0.89-1.66l-1.13-0.75 c-0.15,2.69-1.2,5.64-1.67,6.87l2.32,0.93C19.29,21.71,20,21.23,20,20.52z"/></g>
  </svg>
</template>
        