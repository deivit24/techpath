// i18n
import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
// vue router
import router from '@/router/index';
// pinia
import Particles from 'vue3-particles';
import store from '@/store';
import App from './App.vue';

import 'virtual:windi.css';
// Devtools: https://windicss.org/integrations/vite.html#design-in-devtools
import 'virtual:windi-devtools';
import '@/assets/styles/index.scss';

const i18n = createI18n({
  locale: 'en',
  messages,
});

const app = createApp(App);
app.use(store);
app.use(router);
// @ts-nocheck
app.use(Particles as any);
app.use(i18n);

app.mount('#app');
