
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'BackupTableRound',
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
    <g><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g></g><g><g><g><path d="M4,7v13h13c0.55,0,1,0.45,1,1l0,0c0,0.55-0.45,1-1,1H4c-1.1,0-2-0.9-2-2V7c0-0.55,0.45-1,1-1l0,0C3.55,6,4,6.45,4,7z"/><path d="M6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2H8C6.9,2,6,2.9,6,4z M15,11h5v5h-5V11z M8,11h5v5H8V11z M8,4h12v5H8V4z"/></g></g></g>
  </svg>
</template>
        