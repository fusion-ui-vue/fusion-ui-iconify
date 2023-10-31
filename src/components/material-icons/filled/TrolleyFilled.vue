
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'TrolleyFilled',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M21 14v2H4V4H2V2h4v12h15zM5.99 17C4.89 17 4 17.9 4 19s.89 2 1.99 2C7.1 21 8 20.1 8 19s-.9-2-2.01-2zm13 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2S21 20.1 21 19s-.9-2-2.01-2zM13 13H7V7h6v6zm7 0h-6V7h6v6z"/></g>
  </svg>
</template>
        