
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'PermMediaSharp',
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
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 6H0v16h20v-2H2V6zm22-2H14l-2-2H4v16h20V4zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"/>
  </svg>
</template>
        