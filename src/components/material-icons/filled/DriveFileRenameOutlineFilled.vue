
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'DriveFileRenameOutlineFilled',
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
    <path d="M0 0h24v24H0z" fill="none"/><path d="M18.41 5.8L17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83zM6.21 18H5v-1.21l8.66-8.66 1.21 1.21L6.21 18zM11 20l4-4h6v4H11z"/>
  </svg>
</template>
        