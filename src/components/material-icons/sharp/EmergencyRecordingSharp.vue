
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'EmergencyRecordingSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M18,10.48V4H2v16h16v-6.48l4,3.98v-11L18,10.48z M12,12l3,1.73l-1,1.73l-3-1.73V17H9v-3.27l-3,1.73l-1-1.73L8,12l-3-1.73 l1-1.73l3,1.73V7h2v3.27l3-1.73l1,1.73L12,12z"/></g>
  </svg>
</template>
        