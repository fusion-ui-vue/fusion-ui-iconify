
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'SubscriptRound',
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
    <g><rect fill="none" height="24" width="24"/><path d="M10.52,10.73L7.3,5.72C6.82,4.97,7.35,4,8.23,4h0c0.39,0,0.74,0.2,0.95,0.53l2.76,4.46h0.12l2.74-4.45 C15.01,4.2,15.37,4,15.76,4h0c0.88,0,1.42,0.98,0.94,1.72l-3.23,5l3.55,5.55C17.5,17.02,16.96,18,16.08,18h0 c-0.38,0-0.74-0.2-0.95-0.52l-3.07-4.89h-0.12l-3.07,4.89C8.67,17.8,8.31,18,7.92,18h0c-0.88,0-1.42-0.97-0.94-1.72L10.52,10.73z M23,19.5L23,19.5c0-0.28-0.22-0.5-0.5-0.5c0,0,0,0,0,0H20v-1h2c0.55,0,1-0.45,1-1v-1c0-0.55-0.45-1-1-1h-2.5 c-0.28,0-0.5,0.22-0.5,0.5v0c0,0.28,0.22,0.5,0.5,0.5H22v1h-2c-0.55,0-1,0.45-1,1v1c0,0.55,0.45,1,1,1h2.5 C22.78,20,23,19.78,23,19.5z"/></g>
  </svg>
</template>
        