
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'HeartBrokenFilled',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M16.5,3c-0.96,0-1.9,0.25-2.73,0.69L12,9h3l-3,10l1-9h-3l1.54-5.39C10.47,3.61,9.01,3,7.5,3C4.42,3,2,5.42,2,8.5 c0,4.13,4.16,7.18,10,12.5c5.47-4.94,10-8.26,10-12.5C22,5.42,19.58,3,16.5,3z"/></g>
  </svg>
</template>
        