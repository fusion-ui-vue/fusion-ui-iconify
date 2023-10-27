import Icons from "./index.vue";
import { withInstall } from '../../../install'
const component = [Icons];

export const Icon = withInstall(Icons, 'Icon')


const CK = {
  install(App: any) {
    component.forEach((item) => {
      App.component(item.name, item);
    });
  },
};

// export default Icon;
export default CK;
