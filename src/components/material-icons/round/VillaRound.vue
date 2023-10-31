
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'VillaRound',
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
    <rect fill="none" height="24" width="24"/><path d="M7,21H4c-0.55,0-1-0.45-1-1V8.69C3,8.27,3.25,7.9,3.64,7.75l11-4.23C15.3,3.27,16,3.75,16,4.46V10H8c-0.55,0-1,0.45-1,1V21z M17,12h-7c-0.55,0-1,0.45-1,1v7c0,0.55,0.45,1,1,1h4v-4c0-0.55,0.45-1,1-1s1,0.45,1,1v4h4c0.55,0,1-0.45,1-1v-8c0-1.1-0.9-2-2-2 S17,10.9,17,12z"/>
  </svg>
</template>
        