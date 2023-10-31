
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'KeyboardBackspaceRound',
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
    <path d="M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z"/>
  </svg>
</template>
        