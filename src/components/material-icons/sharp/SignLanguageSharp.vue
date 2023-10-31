
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'SignLanguageSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M12.49,13l-1.39-2.7L12.49,9L19,15.2V24H4.5v-2H10v-1H3v-2h7v-1H2v-2h8v-1H3.5v-2H12.49z M11.78,7.12 c-0.84,0.4-1.17,0.62-1.63,1.19L6.76,4.74l1.45-1.38L11.78,7.12z M9.64,9.21C9.41,9.76,9.35,10.45,9.44,11H8.58L5.62,7.89 l1.45-1.38L9.64,9.21z M21.98,12.34L22,3.35l-1.9-0.1l-1,2.86L13.3,0l-1.45,1.38l4.09,4.3l-0.73,0.69L9.74,0.64L8.3,2l3.36,3.53 l1.06,1.11l2.65,2.33l5.08,4.83L21.98,12.34z"/></g>
  </svg>
</template>
        