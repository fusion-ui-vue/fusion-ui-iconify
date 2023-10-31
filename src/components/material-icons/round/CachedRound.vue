
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'CachedRound',
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
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="m18.65 8.35-2.79 2.79c-.32.32-.1.86.35.86H18c0 3.31-2.69 6-6 6-.79 0-1.56-.15-2.25-.44-.36-.15-.77-.04-1.04.23-.51.51-.33 1.37.34 1.64.91.37 1.91.57 2.95.57 4.42 0 8-3.58 8-8h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.19-.2-.51-.2-.7-.01zM6 12c0-3.31 2.69-6 6-6 .79 0 1.56.15 2.25.44.36.15.77.04 1.04-.23.51-.51.33-1.37-.34-1.64C14.04 4.2 13.04 4 12 4c-4.42 0-8 3.58-8 8H2.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.31-.31.09-.85-.36-.85H6z"/>
  </svg>
</template>
        