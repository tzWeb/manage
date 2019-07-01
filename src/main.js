import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex";
import './plugins/element.js';
import './lib/resizeWin';
import '../public/basic.css';
import api from './service/api/index' // 导入api接口
Vue.config.productionTip = false;
Vue.prototype.$api = api;//将api挂载到vue的原型上
//  获取角色信息，根据用户权限动态加载路由
router.beforeEach((to, from, next) => {
  if (true) {
    // store.dispatch('setToken', store.getters.token)
    store.dispatch('setToken', "ceshi")
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (!store.getters.info.role) {
        !async function getAddRouters () {
          await store.dispatch('getInfo', store.getters.token)
          await store.dispatch('newRoutes', store.getters.info.role)
          await router.addRoutes(store.getters.addRouters)
          next({path: '/index'})
        }()
      } else {
        let is404 = to.matched.some(record => {
          if(record.meta.role){
            return record.meta.role.indexOf(store.getters.info.role) === -1
          }
        })
        if(is404){
          next({path: '/404'})
          return false
        }
        next()
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    }
    next({path: '/login'})

  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
