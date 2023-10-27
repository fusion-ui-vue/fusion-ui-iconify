import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
//@ts-ignore
const app = createApp(App);
//@ts-ignore
// import {Icon} from "./components/Icon/index.ts";
// app.use(Icon);

// import Icon from './components/Icon/index.ts';
// app.component(Icon.name, Icon);
app.mount("#app");
