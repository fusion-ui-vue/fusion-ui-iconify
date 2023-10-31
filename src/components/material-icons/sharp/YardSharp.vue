
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'YardSharp',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M22,2H2v20h20V2z M8,8.22c0-0.86,0.7-1.56,1.56-1.56c0.33,0,0.64,0.1,0.89,0.28l-0.01-0.12c0-0.86,0.7-1.56,1.56-1.56 s1.56,0.7,1.56,1.56l-0.01,0.12c0.26-0.18,0.56-0.28,0.89-0.28c0.86,0,1.56,0.7,1.56,1.56c0,0.62-0.37,1.16-0.89,1.4 C15.63,9.87,16,10.41,16,11.03c0,0.86-0.7,1.56-1.56,1.56c-0.33,0-0.64-0.11-0.89-0.28l0.01,0.12c0,0.86-0.7,1.56-1.56,1.56 s-1.56-0.7-1.56-1.56l0.01-0.12c-0.26,0.18-0.56,0.28-0.89,0.28C8.7,12.59,8,11.89,8,11.03c0-0.62,0.37-1.16,0.89-1.4 C8.37,9.38,8,8.84,8,8.22z M12,19c-3.31,0-6-2.69-6-6C9.31,13,12,15.69,12,19c0-3.31,2.69-6,6-6C18,16.31,15.31,19,12,19z"/><circle cx="12" cy="9.62" r="1.56"/></g></g>
  </svg>
</template>
        