
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'PinEndSharp',
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
    <rect fill="none" height="24" width="24"/><path d="M20,12V6H4v12h10l0,2H2V4h20v8H20z M19,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c1.66,0,3-1.34,3-3S20.66,14,19,14z M14.66,8H9 v5.66l2.12-2.12l2.83,2.83l1.41-1.41l-2.83-2.83L14.66,8z"/>
  </svg>
</template>
        