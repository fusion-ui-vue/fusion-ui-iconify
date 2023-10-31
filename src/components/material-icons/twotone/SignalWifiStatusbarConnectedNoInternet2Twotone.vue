
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'SignalWifiStatusbarConnectedNoInternet2Twotone',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M17,11.21V8h5.92C19.97,5.51,16.16,4,12,4C7.31,4,3.07,5.9,0,8.98l4.23,4.24C6.22,11.23,8.97,10,12,10 C13.8,10,15.5,10.44,17,11.21z" fill-opacity=".3"/><g><path d="M4.23,13.22L12,21l5-5.01v-4.78C15.5,10.44,13.8,10,12,10C8.97,10,6.22,11.23,4.23,13.22z"/><rect height="2" width="2" x="19" y="18"/><rect height="6" width="2" x="19" y="10"/></g></g></g>
  </svg>
</template>
        