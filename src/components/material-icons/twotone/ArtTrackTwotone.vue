
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'ArtTrackTwotone',
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
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 7h8v2h-8zm0 4h8v2h-8zm0 4h8v2h-8zM4 17h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2zm1.25-4.25l1.25 1.51L8.25 12l2.25 3h-7l1.75-2.25z"/>
  </svg>
</template>
        