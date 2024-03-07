import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";

import Particles from "@tsparticles/vue3";
import {loadSlim} from "@tsparticles/slim";


createApp(App).use(router).use(store).use(Particles, {
    init: async engine => {
        await loadSlim(engine);
    },
}).mount('#app')
