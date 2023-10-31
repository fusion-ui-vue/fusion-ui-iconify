
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'TimerOffSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="6" x="9" y="1"/><path d="M13,8v2.17l6.98,6.98C20.63,15.91,21,14.5,21,13c0-2.12-0.74-4.07-1.97-5.61l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41 l-1.42,1.42C16.07,4.74,14.12,4,12,4c-1.5,0-2.91,0.37-4.15,1.02L10.83,8H13z"/><path d="M2.81,2.81L1.39,4.22l3.4,3.4C3.67,9.12,3,10.98,3,13c0,4.97,4.02,9,9,9c2.02,0,3.88-0.67,5.38-1.79l2.4,2.4l1.41-1.41 L2.81,2.81z"/></g></g>
  </svg>
</template>
        