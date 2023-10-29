
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'StreamOutlined',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="20" r="2"/><rect height="2" transform="matrix(0.7081 -0.7061 0.7061 0.7081 -0.1146 13.9802)" width="6.22" x="13.74" y="6.13"/><polygon points="8.32,9.68 8.63,10 10.05,8.59 6.03,4.55 6.02,4.55 5.71,4.23 4.29,5.64 8.31,9.69"/><polygon points="15.41,13.94 14,15.35 17.99,19.36 18.34,19.71 19.76,18.3 15.77,14.29"/><polygon points="8.59,13.95 4.56,17.96 4.24,18.29 5.65,19.7 9.68,15.68 10.01,15.36"/><circle cx="12" cy="4" r="2"/></g></g>
  </svg>
</template>
        