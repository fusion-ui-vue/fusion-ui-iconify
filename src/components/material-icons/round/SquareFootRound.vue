
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'SquareFootRound',
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
    <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M17.66,17.66l-0.71,0.71c-0.2,0.2-0.51,0.2-0.71,0l0,0c-0.2-0.2-0.2-0.51,0-0.71l0.71-0.71l-1.94-1.94l-0.71,0.71 c-0.2,0.2-0.51,0.2-0.71,0l0,0c-0.2-0.2-0.2-0.51,0-0.71l0.71-0.71l-1.94-1.94l-0.71,0.71c-0.2,0.2-0.51,0.2-0.71,0l0,0 c-0.2-0.2-0.2-0.51,0-0.71l0.71-0.71L9.7,9.7l-0.71,0.71c-0.2,0.2-0.51,0.2-0.71,0l0,0c-0.2-0.2-0.2-0.51,0-0.71l0.71-0.71 L7.05,7.05L6.34,7.76c-0.2,0.2-0.51,0.2-0.71,0l0,0c-0.2-0.2-0.2-0.51,0-0.71l0.71-0.71L4.85,4.85C4.54,4.54,4,4.76,4,5.21V18 c0,1.1,0.9,2,2,2h12.79c0.45,0,0.67-0.54,0.35-0.85L17.66,17.66z M7,16v-4.76L12.76,17H8C7.45,17,7,16.55,7,16z"/></g></g>
  </svg>
</template>
        