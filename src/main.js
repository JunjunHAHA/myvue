import Vue from 'vue'
import  VueRouter from 'vue-router'
import {router} from '../urls/urls.js'
import app from '../component/app/app.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/MUI/css/mui.min.css'
// import '../lib/MUI/js/mui.js'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

Vue.use(VueRouter)
Vue.use(MintUI)

var vm = new Vue({
    el:"#app",
    render:c=> c(app),
    router
})