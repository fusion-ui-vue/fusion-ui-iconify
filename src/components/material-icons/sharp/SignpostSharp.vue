
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'SignpostSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,2c-0.55,0-1,0.45-1,1v1H5.5C4.67,4,4,4.67,4,5.5v3C4,9.33,4.67,10,5.5,10H11v2H6.62c-0.4,0-0.78,0.16-1.06,0.44 l-1.5,1.5c-0.59,0.59-0.59,1.54,0,2.12l1.5,1.5C5.84,17.84,6.22,18,6.62,18H11v3c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-3h5.5 c0.83,0,1.5-0.67,1.5-1.5v-3c0-0.83-0.67-1.5-1.5-1.5H13v-2h4.38c0.4,0,0.78-0.16,1.06-0.44l1.5-1.5c0.59-0.59,0.59-1.54,0-2.12 l-1.5-1.5C18.16,4.16,17.78,4,17.38,4H13V3C13,2.45,12.55,2,12,2z"/></g></g>
  </svg>
</template>
        