import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import '@material/web/tabs/tabs.js';
import '@material/web/tabs/primary-tab.js';
import '@material/web/textfield/outlined-text-field.js';

const app = createApp(App);
app.mount('#app');
