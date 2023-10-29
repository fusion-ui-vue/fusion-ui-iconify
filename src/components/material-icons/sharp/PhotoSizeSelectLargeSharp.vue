
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'PhotoSizeSelectLargeSharp',
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
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 15h2v2h-2v-2zm0 4h2v2h-2v-2zm0-8h2v2h-2v-2zm-8-8h2v2h-2V3zm8 4h2v2h-2V7zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3H1v2h2V3zm20 0h-2v2h2V3zM9 3h2v2H9V3zM5 3h2v2H5V3zm-4 8v10h14V11H1zm2 8l2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z"/>
  </svg>
</template>
        