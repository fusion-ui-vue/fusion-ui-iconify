
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'TableRowsRound',
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
    <rect fill="none" height="24" width="24"/><path d="M19,8H5C3.9,8,3,7.1,3,6v0c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v0C21,7.1,20.1,8,19,8z M19,10H5c-1.1,0-2,0.9-2,2v0 c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v0C21,10.9,20.1,10,19,10z M19,16H5c-1.1,0-2,0.9-2,2v0c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v0 C21,16.9,20.1,16,19,16z"/>
  </svg>
</template>
        