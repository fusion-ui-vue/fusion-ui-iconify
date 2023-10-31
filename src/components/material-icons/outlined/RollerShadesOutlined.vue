
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'RollerShadesOutlined',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M20,19V3H4v16H2v2h20v-2H20z M18,5v6H6V5H18z M6,19v-6h5v1.82c-0.45,0.32-0.75,0.84-0.75,1.43c0,0.97,0.78,1.75,1.75,1.75 s1.75-0.78,1.75-1.75c0-0.59-0.3-1.12-0.75-1.43V13h5v6H6z"/></g>
  </svg>
</template>
        