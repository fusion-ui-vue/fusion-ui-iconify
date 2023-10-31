
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'NoBackpackTwotone',
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
    <rect fill="none" height="24" width="24" y="0"/><path d="M18,15.17V8c0-1.1-0.9-2-2-2H8.83l6,6h1.67v1.67L18,15.17z M17.17,20l-6-6H7.5v-2h1.67L6,8.83V20H17.17z" opacity=".3"/><path d="M6.98,4.15c0.01,0,0.01-0.01,0.02-0.01V2h3v2h4V2h3v2.14c1.72,0.45,3,2,3,3.86v9.17l-2-2V8c0-1.1-0.9-2-2-2H8.83L6.98,4.15z M14.83,12l1.67,1.67V12H14.83z M19.78,22.61l-0.85-0.85C18.65,21.91,18.34,22,18,22H6c-1.1,0-2-0.9-2-2V8 c0-0.36,0.06-0.69,0.15-1.02L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M17.17,20l-6-6H7.5v-2h1.67L6,8.83V20H17.17z"/>
  </svg>
</template>
        