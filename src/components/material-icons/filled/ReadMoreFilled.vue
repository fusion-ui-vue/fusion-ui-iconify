
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'ReadMoreFilled',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="9" x="13" y="7"/><rect height="2" width="9" x="13" y="15"/><rect height="2" width="6" x="16" y="11"/><polygon points="13,12 8,7 8,11 2,11 2,13 8,13 8,17"/></g></g>
  </svg>
</template>
        