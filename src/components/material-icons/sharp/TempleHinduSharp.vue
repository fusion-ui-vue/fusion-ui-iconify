
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'TempleHinduSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="6.6,11 17.4,11 16.5,8 7.5,8"/><polygon points="20,11 20,13 4,13 4,11 2,11 2,22 10,22 10,17 14,17 14,22 22,22 22,11"/><polygon points="15.9,6 15,3 15,1 13,1 13,3 10.97,3 10.97,1 8.97,1 8.97,3.12 8.1,6"/></g></g>
  </svg>
</template>
        