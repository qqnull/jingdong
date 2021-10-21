import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'

import './style/base.scss'
import './style/iconfont.css'
//全局引入vant, 樣式vant/lib/index.css
import Vant from 'vant';
import 'vant/lib/index.css';

createApp(App).use(store).use(router).use(Vant).mount('#app')
