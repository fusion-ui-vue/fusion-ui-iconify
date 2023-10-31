
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'SipRound',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="1" width="2" x="15.5" y="10.5"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M10,9.75 c0,0.41-0.34,0.75-0.75,0.75H6.5v0.75H9c0.55,0,1,0.45,1,1V14c0,0.55-0.45,1-1,1H5.75C5.34,15,5,14.66,5,14.25v0 c0-0.41,0.34-0.75,0.75-0.75H8.5v-0.75H6c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1h3.25C9.66,9,10,9.34,10,9.75L10,9.75z M12,15 L12,15c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v4C13,14.55,12.55,15,12,15z M19,12c0,0.55-0.45,1-1,1h-2.5 v1.25c0,0.41-0.34,0.75-0.75,0.75h0C14.34,15,14,14.66,14,14.25V10c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1V12z"/></g></g>
  </svg>
</template>
        