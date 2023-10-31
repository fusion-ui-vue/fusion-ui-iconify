
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'AirlineStopsRound',
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
    <rect fill="none" height="24" width="24"/><path d="M15,18c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h1c-0.47-4.21-3.89-7.55-8.12-7.96 C2.37,8.99,2,8.56,2,8.05c0-0.59,0.52-1.06,1.11-1C7.03,7.44,10.37,9.87,12,13.3c1.13-2.43,2.99-4.25,4.78-5.52l-1.92-1.92 C14.54,5.54,14.76,5,15.21,5h5.29C20.78,5,21,5.22,21,5.5v5.29c0,0.45-0.54,0.67-0.85,0.35l-1.94-1.94C15.93,10.78,13.45,13.3,13,17 h1C14.55,17,15,17.45,15,18z"/>
  </svg>
</template>
        