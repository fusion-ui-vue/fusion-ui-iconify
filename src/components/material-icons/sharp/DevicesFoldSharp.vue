
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'DevicesFoldSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M17,3v-3.03l-7,3V3v18h12V3H17z M20,19h-5.33L17,18V5h3V19z"/></g><g><rect height="2" width="2" x="2" y="3"/></g><g><rect height="2" width="2" x="2" y="19"/></g><g><rect height="2" width="2" x="2" y="15"/></g><g><rect height="2" width="2" x="2" y="11"/></g><g><rect height="2" width="2" x="2" y="7"/></g><g><rect height="2" width="2" x="6" y="3"/></g><g><rect height="2" width="2" x="6" y="19"/></g></g></g>
  </svg>
</template>
        