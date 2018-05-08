import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';

Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/About', component: About },
  { path: '/', component: Home}
];

const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
