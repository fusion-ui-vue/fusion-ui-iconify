
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'Man4Outlined',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M13.75,7h-3.5C9.04,7,8.11,8.07,8.27,9.26L10,22h4l1.73-12.74C15.89,8.07,14.96,7,13.75,7z"/><circle cx="12" cy="4" r="2"/></g></g>
  </svg>
</template>
        