
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'SwitchLeftRound',
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
    <rect fill="none" height="24" width="24"/><path d="M8.5,8.62v6.76L5.12,12L8.5,8.62 M3.71,11.29c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59C8.92,17.92,10,17.48,10,16.59V7.41 c0-0.89-1.08-1.34-1.71-0.71L3.71,11.29z M14,7.41v9.17c0,0.89,1.08,1.34,1.71,0.71l4.59-4.59c0.39-0.39,0.39-1.02,0-1.41 l-4.59-4.59C15.08,6.08,14,6.52,14,7.41z"/>
  </svg>
</template>
        