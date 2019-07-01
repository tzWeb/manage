import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import routerData from './modules/routerData'
import role from './modules/role'
import navTab from './modules/navTab'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: Cookies.get('token'),
        leftNavGroup:"one" //左侧菜单栏当前分组
    },
    mutations: {
        //设置token
        setToken (state, token) {
            state.token = token
            Cookies.set('token', token ,{ expires: 1/24 });
        },
        setLeftNavGroup (state, group) {
            state.leftNavGroup = group
        }
    },
    actions: {
        setToken ({commit}, token) {
            return new Promise((resolve, reject) => {
                commit('setToken', token)
                resolve()
            })
        }
    },
    getters: {
        addRouters: state => state.routerData.addRouters,
        token: state => state.token,
        info: state => state.role.info,
        leftNavGroup: state => state.leftNavGroup,
        routers: state => state.routerData.routers,
        activeRoute: state => state.routerData.activeRoute,
        isCollapse: state => state.navTab.isCollapse,
        tabnavBox: state => state.navTab.tabnavBox,
        visible: state => state.navTab.visible,
        left: state => state.navTab.left,
        top: state => state.navTab.top,
        rightNav: state => state.navTab.rightNav,
        uniquerouter: state => state.navTab.uniquerouter,
    },
    modules: {
        routerData,
        role,
        navTab
    },
})

export default store
