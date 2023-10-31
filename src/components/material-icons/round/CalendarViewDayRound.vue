
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'CalendarViewDayRound',
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
    <rect fill="none" height="24" width="24"/><path d="M5,7h14c1.1,0,2,0.9,2,2v6c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V9C3,7.9,3.9,7,5,7z M4,3h16c0.55,0,1,0.45,1,1v0 c0,0.55-0.45,1-1,1H4C3.45,5,3,4.55,3,4v0C3,3.45,3.45,3,4,3z M4,19h16c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1 v0C3,19.45,3.45,19,4,19z"/>
  </svg>
</template>
        