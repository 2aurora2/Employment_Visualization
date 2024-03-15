import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";

import "slick-carousel/slick/slick.css";

createApp(App).use(router).use(store).mount('#app')
