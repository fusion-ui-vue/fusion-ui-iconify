
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'LanRound',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M15,22h4c1.1,0,2-0.9,2-2v-3c0-1.1-0.9-2-2-2h-1v-2c0-1.1-0.9-2-2-2h-3V9h1c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2h-4 C8.9,2,8,2.9,8,4v3c0,1.1,0.9,2,2,2h1v2H8c-1.1,0-2,0.9-2,2v2H5c-1.1,0-2,0.9-2,2v3c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-3 c0-1.1-0.9-2-2-2H8v-2h8v2h-1c-1.1,0-2,0.9-2,2v3C13,21.1,13.9,22,15,22z"/></g>
  </svg>
</template>
        