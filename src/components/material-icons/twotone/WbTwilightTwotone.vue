
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'WbTwilightTwotone',
  props: {
    size: {
      type: [Number, String],
      default: 'inherit'
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    const cssClass = computed(() => {
      let fontSize;
      const _size = +props.size;
      if (isNaN(_size)) {
        const [_, size, unit] = /(d+)(w+)/.exec(props.size) || [];
        fontSize = unit === 'px' ? pxToRem(+size) : props.size;
      } else {
        fontSize = pxToRem(_size);
      }

      return css({
        fontSize,
        color: props.color
      });
    });

    return {
      cssClass
    };
  }
}
</script>

<template>
  <svg :class="cssClass" class="fn-icon"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
    <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" transform="matrix(0.7069 -0.7074 0.7074 0.7069 -0.3887 15.676)" width="3" x="17.22" y="7.31"/><rect height="2" width="20" x="2" y="18"/><rect height="3" width="2" x="11" y="4"/><rect height="3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.2992 6.1783)" width="2" x="4.31" y="6.78"/><path d="M5,16h14c0-3.87-3.13-7-7-7S5,12.13,5,16z"/></g></g>
  </svg>
</template>
        