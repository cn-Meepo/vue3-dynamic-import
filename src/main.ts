import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from "./router";
import './api/mockjs'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
