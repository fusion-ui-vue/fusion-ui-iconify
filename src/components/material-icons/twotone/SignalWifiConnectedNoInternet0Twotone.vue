
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'SignalWifiConnectedNoInternet0Twotone',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M24,8.98C20.93,5.9,16.69,4,12,4C7.31,4,3.07,5.9,0,8.98L12,21v-9h8.99L24,8.98z" fill-opacity=".3"/><polygon points="19.59,14 17.5,16.09 17.2,15.79 15.41,14 14,15.41 15.79,17.2 16.09,17.5 14,19.59 15.41,21 17.5,18.92 19.59,21 21,19.59 18.92,17.5 21,15.41"/></g></g>
  </svg>
</template>
        