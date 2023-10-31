
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'HevcSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="5.5,11 4.5,11 4.5,9 3,9 3,15 4.5,15 4.5,12.5 5.5,12.5 5.5,15 7,15 7,9 5.5,9"/><polygon points="21,11 21,9 17,9 17,15 21,15 21,13 19.5,13 19.5,13.5 18.5,13.5 18.5,10.5 19.5,10.5 19.5,11"/><polygon points="14.25,13.5 13.5,9 12,9 13,15 15.5,15 16.5,9 15,9"/><polygon points="8,9 8,15 11.5,15 11.5,13.5 9.5,13.5 9.5,12.5 11.5,12.5 11.5,11 9.5,11 9.5,10.5 11.5,10.5 11.5,9"/></g></g>
  </svg>
</template>
        