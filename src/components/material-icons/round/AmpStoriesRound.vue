
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'AmpStoriesRound',
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
  <svg :class="cssClass" class="fn-icon"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
    <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M16,4H8C7.45,4,7,4.45,7,5v13c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V5C17,4.45,16.55,4,16,4z"/><path d="M4,6C3.45,6,3,6.45,3,7v9c0,0.55,0.45,1,1,1s1-0.45,1-1V7C5,6.45,4.55,6,4,6z"/><path d="M20,6c-0.55,0-1,0.45-1,1v9c0,0.55,0.45,1,1,1s1-0.45,1-1V7C21,6.45,20.55,6,20,6z"/></g></g>
  </svg>
</template>
        