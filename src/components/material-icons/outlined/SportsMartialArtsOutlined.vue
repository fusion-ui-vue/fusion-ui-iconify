
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'SportsMartialArtsOutlined',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="19.8,2 11.6,8.7 10.39,7.66 13.99,5.58 9.41,1 8,2.41 10.74,5.15 5,8.46 3.81,12.75 6.27,17 8,16 5.97,12.48 6.32,11.18 9.5,13 10,22 12,22 12.5,12 21,3.4"/><circle cx="5" cy="5" r="2"/></g></g>
  </svg>
</template>
        