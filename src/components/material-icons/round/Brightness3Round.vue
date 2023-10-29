
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'Brightness3Round',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M8.93,2C8.88,2,8.84,2,8.79,2C7.96,2.02,7.7,3.12,8.4,3.56c2.78,1.77,4.63,4.89,4.63,8.44c0,3.55-1.84,6.66-4.62,8.43 C7.7,20.89,7.98,21.98,8.82,22c0.07,0,0.14,0,0.21,0c6.05,0,10.86-5.39,9.87-11.63C18.14,5.53,13.83,1.95,8.93,2z"/></g></g></g>
  </svg>
</template>
        