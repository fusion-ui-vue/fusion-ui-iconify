
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'NestCamWiredStandSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M18,0.85L11.98,1.4C8.95,1.7,6.37,4,6.04,7.03c-0.39,3.57,2.2,6.69,5.68,7.04l1.9,0.19l-0.56,0.85 c-0.88-0.19-1.83-0.18-2.85,0.25C8.21,16.21,7,18.25,7,20.41L7,23h10v-3c0-1.67-0.83-3.15-2.09-4.06l0.97-1.45L18,14.72V0.85z"/></g>
  </svg>
</template>
        