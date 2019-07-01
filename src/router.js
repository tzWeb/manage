import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/layout/Layout";
import home from "./views/home/home"
import test1 from "./views/test/test1";
import test2 from "./views/test/test2";
import test3 from "./views/test/test3";


Vue.use(Router);

let defaultRouter=[
  {
    path: "/",
    component: Layout,
    hidden:true
  }
]

let addRouter=[
  {
    path: "/index",
    name: "运维管理",
    component: Layout,
    iconCls:"ksyy",
    group:"one",
    children: [
      {
        path: '/index',
        iconCls: 'el-icon-document', // 图标样式class
        name: '我的主页',
        component: home,
        group:"one",
        children: []
      },
      {
        path: '/index1',
        iconCls: 'el-icon-document', // 图标样式class
        name: 'DBC管理',
        component: test1,
        group:"one",
        children: []
      },
      {
        path: '/index2',
        iconCls: 'el-icon-document', // 图标样式class
        name: '实时数据',
        component: test1,
        group:"one",
        children: []
      },
      {
        path: '/index3',
        iconCls: 'el-icon-document', // 图标样式class
        name: '历史数据',
        component: test1,
        group:"one",
        children: []
      },
      {
        path: '/index4',
        iconCls: 'el-icon-document', // 图标样式class
        name: '视频监测',
        component: test1,
        group:"one",
        children: []
      },
      {
        path: '/index5',
        iconCls: 'el-icon-document', // 图标样式class
        name: '数据统计',
        component: test1,
        group:"one",
        children: []
      },
      {
        path: '/index6',
        iconCls: 'el-icon-document', // 图标样式class
        name: '服务中心',
        component: test1,
        group:"one",
        children: []
      }
    ]
  },
  {
    path: "/about",
    name: "测试管理",
    iconCls:"csgl",
    component: Layout,
    group:"two",
    children: [
      {
        path: '/about',
        iconCls: 'el-icon-document', // 图标样式class
        name: '测试2',
        component: test3,
        group:"two",
        children: [
          {
            path: '/about',
            iconCls: 'fa fa-dashboard', // 图标样式class
            name: '测试222',
            component: test3,
            group:"two",
            children:[]
          }
        ]
      },
      {
        path: '/aboutTwo',
        iconCls: 'fa fa-dashboard', // 图标样式class
        name: '测试2-2',
        component: test2,
        group:"two",
        children: []
      }
    ]
  },
  {
    path: "/test1_1",
    name: "路测系统",
    redirect:"/test1_1",
    iconCls:"lcxt",
    group:"three",
    component: Layout,
    children: [
      {
        path: '/test1_1',
        iconCls: 'fa fa-dashboard', // 图标样式class
        name: '测试3',
        component: test3,
        group:"three",
        children: [
          {
            path: '/test1_1',
            iconCls: 'fa fa-dashboard', // 图标样式class
            name: '测试1_1_1',
            component: test3,
            group:"three",
            children: []
          }
        ]
      },
      {
        path: '/testTwo',
        iconCls: 'fa fa-dashboard', // 图标样式class
        name: '测试3-2',
        component: test2,
        group:"three",
        children: [
          {
            path: '/testTwo',
            iconCls: 'fa fa-dashboard', // 图标样式class
            name: '测试1_1',
            component: test3,
            group:"three",
            children: []
          }
        ]
      }
    ]
  },
  {
    path: "/test1_11",
    name: "安全监管",
    iconCls:"aqjg",
    group:"four",
    component: Layout,
    children: [
    ]
  },
  {
    path: "/test1_111",
    name: "大数据",
    iconCls:"dsj",
    group:"five",
    component: Layout,
    children: [
    ]
  },
  {
    path: "/test1_1111",
    name: "自动化运营",
    iconCls:"zdhyy",
    group:"six",
    component: Layout,
    children: [
    ]
  },
  {
    path: "/test1_11111",
    name: "移动应用",
    iconCls:"ydyy",
    group:"seven",
    component: Layout,
    children: [
    ]
  },
  {
    path: "/test1_111111",
    name: "门户管理",
    iconCls:"mhgl",
    group:"eight",
    component: Layout,
    children: [
    ]
  },
  {
    path: "/test1_1111111",
    name: "系统管理",
    iconCls:"xtgl",
    group:"nine",
    component: Layout,
    children: [
    ]
  }
]

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes:defaultRouter
});
export {defaultRouter, addRouter}
