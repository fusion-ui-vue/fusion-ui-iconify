
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'ShortcutRound',
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    const fontSize = computed(() => {
      const _size = +props.size;
      if (isNaN(_size)) {
        const [_, size, unit] = /(d+)(w+)/.exec(props.size) || [];
        return unit === 'px' ? pxToRem(+size) : props.size;
      } else {
        return pxToRem(_size);
      }
    });

    return {
      fontSize,
      color: props.color
    }
  }
}
</script>

<template>
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M20.29,10.29l-3.59-3.59C16.08,6.08,15,6.52,15,7.41V10H8c-2.76,0-5,2.24-5,5v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3 c0-1.65,1.35-3,3-3h7v2.59c0,0.89,1.08,1.34,1.71,0.71l3.59-3.59C20.68,11.32,20.68,10.68,20.29,10.29z"/></g>
  </svg>
</template>
        