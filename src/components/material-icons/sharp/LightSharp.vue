
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'LightSharp',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M13,6.06V3h-2v3.06C5.87,6.63,2.03,11.51,3.22,17L8,17c0,2.21,1.79,4,4,4s4-1.79,4-4l4.78,0 C21.97,11.51,18.13,6.63,13,6.06z M12,15H5c0-3.86,3.14-7,7-7s7,3.14,7,7H12z"/></g>
  </svg>
</template>
        