
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'TvOffOutlined',
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
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 7v10.88l1.85 1.85c.09-.23.15-.47.15-.73V7c0-1.11-.89-2-2-2h-7.58l3.29-3.3L16 1l-4 4-4-4-.7.7L10.58 5H8.12l2 2H21zm-.54 16l1.26-1.27-1.26 1.26zM2.41 2.13l-.14.14L1 3.54l1.53 1.53C1.65 5.28 1 6.06 1 7v12c0 1.1.9 2 2 2h15.46l1.99 1.99 1.26-1.26.15-.15L2.41 2.13zM3 19V7h1.46l12 12H3z"/>
  </svg>
</template>
        