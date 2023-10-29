
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'FileDownloadTwotone',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="14.17,11 13,11 13,5 11,5 11,11 9.83,11 12,13.17"/><rect height="2" width="14" x="5" y="18"/><path d="M19,9h-4V3H9v6H5l7,7L19,9z M11,11V5h2v6h1.17L12,13.17L9.83,11H11z"/></g></g>
  </svg>
</template>
        