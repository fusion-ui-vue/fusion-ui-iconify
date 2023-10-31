
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'ViewWeekFilled',
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
    <rect fill="none" height="24" width="24"/><path d="M5.33,20H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h1.33c1.1,0,2,0.9,2,2v12C7.33,19.1,6.44,20,5.33,20z M22,18V6 c0-1.1-0.9-2-2-2h-1.33c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2H20C21.11,20,22,19.1,22,18z M14.67,18V6c0-1.1-0.9-2-2-2h-1.33 c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h1.33C13.77,20,14.67,19.1,14.67,18z"/>
  </svg>
</template>
        