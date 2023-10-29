
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'BorderInnerTwotone',
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
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 15h2v2H3zM3 3h2v2H3zm0 16h2v2H3zm8 2h2v-8h8v-2h-8V3h-2v8H3v2h8zm-4-2h2v2H7zm12-4h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2zM3 7h2v2H3zm16 0h2v2h-2zM7 3h2v2H7zm8 0h2v2h-2zm4 0h2v2h-2z"/>
  </svg>
</template>
        