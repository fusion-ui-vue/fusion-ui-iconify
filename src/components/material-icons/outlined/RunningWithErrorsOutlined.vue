
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'RunningWithErrorsOutlined',
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
    <rect fill="none" height="24" width="24"/><path d="M22,10v8h-2v-8H22z M20,20v2h2v-2H20z M18,17.29C16.53,18.95,14.39,20,12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8v9 l7.55-7.55C17.72,3.34,15.02,2,12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10c2.25,0,4.33-0.74,6-2V17.29z"/>
  </svg>
</template>
        