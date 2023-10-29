
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'SignalCellular0BarSharp',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M2,22h20V2L2,22z M20,20H6.83L20,6.83V20z"/></g>
  </svg>
</template>
        