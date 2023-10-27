import { VueTypesInterface, VueTypeValidableDef } from 'vue-types';
import { CSSProperties } from 'vue';
type PropTypes = VueTypesInterface & {
    readonly style: VueTypeValidableDef<CSSProperties>;
};
declare const propTypes: PropTypes;
export { propTypes };
