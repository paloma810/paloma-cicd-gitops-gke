import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

require('@google-cloud/trace-agent').start();
require('@google-cloud/profiler').start({
  serviceContext: {
    service: 'sample-app-front',
    version: '1.0.0',
  },
});

const app = createApp(App)

app.config.globalProperties.$axios = axios.create({
    //baseURL: 'http://localhost:3000/'
    baseURL: 'http://sample-app-back.default.svc.cluster.local:3000/'
});

app
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
