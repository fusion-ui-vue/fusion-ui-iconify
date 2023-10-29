
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'PhotoSizeSelectLargeTwotone',
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
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 19h2v2h-2zM1 19c0 1.1.9 2 2 2h12V11H1v8zm4.5-3.21l1.79 2.15 2.5-3.22L13 19H3l2.5-3.21zM17 3h2v2h-2zm4 8h2v2h-2zm0 4h2v2h-2zM3 3C2 3 1 4 1 5h2V3zm18 4h2v2h-2zm-8-4h2v2h-2zm8 18c1 0 2-1 2-2h-2v2zM1 7h2v2H1zm8-4h2v2H9zM5 3h2v2H5zm16 0v2h2c0-1-1-2-2-2z"/>
  </svg>
</template>
        