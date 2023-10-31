
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'NoteAltSharp',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M21,3h-6.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H3v18h18V3z M12,2.75c0.41,0,0.75,0.34,0.75,0.75S12.41,4.25,12,4.25 s-0.75-0.34-0.75-0.75S11.59,2.75,12,2.75z M9.1,17H7v-2.14l5.96-5.96l2.12,2.12L9.1,17z M17.2,8.91l-1.41,1.41L13.66,8.2 l1.41-1.41L17.2,8.91z"/></g>
  </svg>
</template>
        