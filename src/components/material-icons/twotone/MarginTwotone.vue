
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'MarginTwotone',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,19h14V5H5V19z M15,7h2v2h-2V7z M15,11h2v2h-2V11z M11,7h2v2h-2V7z M11,11h2v2h-2V11z M7,7h2v2H7V7z M7,11h2v2H7V11z" opacity=".3"/><rect height="2" width="2" x="7" y="7"/><rect height="2" width="2" x="7" y="11"/><path d="M3,3v18h18V3H3z M19,19H5V5h14V19z"/><rect height="2" width="2" x="11" y="7"/><rect height="2" width="2" x="15" y="11"/><rect height="2" width="2" x="11" y="11"/><rect height="2" width="2" x="15" y="7"/></g></g>
  </svg>
</template>
        