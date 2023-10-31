
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'AudioFileOutlined',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M6,20V4h7v5h5v11H6z M16,11h-4v3.88 c-0.36-0.24-0.79-0.38-1.25-0.38c-1.24,0-2.25,1.01-2.25,2.25c0,1.24,1.01,2.25,2.25,2.25S13,17.99,13,16.75V13h3V11z"/></g>
  </svg>
</template>
        