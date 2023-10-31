
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'MoneyOffRound',
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
  <svg :class="cssClass" class="fn-icon"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.5 6.9c1.42 0 2.13.54 2.39 1.4.13.43.56.7 1.01.7h.06c.7 0 1.22-.71.97-1.36-.44-1.15-1.41-2.08-2.93-2.45V4.5c0-.83-.67-1.5-1.5-1.5S11 3.67 11 4.5v.66c-.39.08-.75.21-1.1.36l1.51 1.51c.32-.08.69-.13 1.09-.13zM4.77 4.62c-.39.39-.39 1.02 0 1.41L7.5 8.77c0 2.08 1.56 3.22 3.91 3.91l3.51 3.51c-.34.49-1.05.91-2.42.91-1.65 0-2.5-.59-2.83-1.43-.15-.39-.49-.67-.9-.67H8.6c-.72 0-1.24.74-.95 1.39.59 1.33 1.89 2.12 3.36 2.44v.67c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.65c.96-.18 1.83-.55 2.46-1.12l1.51 1.51c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.18 4.62c-.39-.39-1.02-.39-1.41 0z"/>
  </svg>
</template>
        