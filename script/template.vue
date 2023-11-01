<script>
import { computed } from 'vue';
import { pxToRem } from '../utils';
export default {
  name: '${filename}',
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
        const [_, size, unit] = /(\d+)(\w+)/.exec(props.size) || [];
        return unit === 'px' ? pxToRem(+size) : props.size;
      } else {
        return pxToRem(_size);
      }
    });

    return {
      fontSize
    };
  }
};
</script>

<template>
  <svg
    class="fn-icon"
    :style="{ '--fn-icon-font-size': fontSize, '--fn-icon-color': $props.color }"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
  >
    <!-- content -->
  </svg>
</template>
