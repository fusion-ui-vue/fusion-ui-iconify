
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'CelebrationSharp',
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
    <g><rect fill="none" height="24" width="24" y="0"/></g><g><g><g><polygon points="2,22 16,17 7,8"/><path d="M14.53,12.53L21,6.05l1.48,1.48l1.06-1.06L21,3.93l-7.53,7.53L14.53,12.53z"/><path d="M10.94,6L9.47,7.47l1.06,1.06l2.54-2.54l-2.54-2.53L9.47,4.53L10.94,6z"/><path d="M18.97,9.97l-3.5,3.5l1.06,1.06L19,12.06l2.5,2.49l1.06-1.06L18.97,9.97z"/><path d="M15.97,4.97l-4.5,4.5l1.06,1.06L18.07,5l-3.53-3.53l-1.06,1.06L15.97,4.97z"/></g></g></g>
  </svg>
</template>
        