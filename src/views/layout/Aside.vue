<template>
    <div id="navContain">
        <el-aside id="asideNav" width="190px">
            <el-menu :default-active="$route.path" class="el-menu-vertical"
                     @select="selectmenu"
                     :collapse="$store.getters.isCollapse"
                     text-color="rgba(255,255,255,.7)"
                     background-color="#182337"
                     active-text-color="#ffffff"
                     :router="$store.getters.uniquerouter"
                     :unique-opened="$store.getters.uniquerouter"
                     :collapse-transition="true"
            >
                <template v-for="(item,index) in getRoutes">
                    <el-submenu v-if="item.children && item.children.length>0" :index="index+''" :key="index+item.path">
                        <template slot="title">
                            <i :class="item.iconCls?item.iconCls:''"></i>
                            <span slot="title">{{item.name}}</span>
                        </template>

                        <menu-tree :menuData="item.children"></menu-tree>

                    </el-submenu>
                    <el-menu-item :index="item.path" v-else :class="$route.path===item.path?'is-active':''">
                        <i :class="item.iconCls?item.iconCls:''"></i>
                        <span slot="title">{{ item.name }}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
    import menuTree from './MenuTree'

    export default {
        name: 'AsideNav',
        components: {
            menuTree,
        },
        watch: {
            // 监听浏览器直接输入路由，将此路由添加到tabnavBox
            '$route.path': function (val) {
                this.selectmenu(val)
            }
        },
        computed:{
            getRoutes:function () {
               let routes= [];
               for(let i=0;i<this.$store.getters.addRouters.length;i++){
                   if(this.$store.getters.addRouters[i].group==this.$store.getters.leftNavGroup){
                       routes=this.$store.getters.addRouters[i].children
                   }
               }
               return routes;
            }
        },
        methods: {
            selectmenu (key) {
                let router = this.$store.getters.routers;
                let box={};
                let navTitle = function (path, routerARR) {
                    for (let i = 0; i < routerARR.length; i++) {
                        if (routerARR[i].children && routerARR[i].children.length > 0 || routerARR[i].path === path) {
                            if (routerARR[i].path === path && routerARR[i].children.length < 1) {
                                box.name = routerARR[i].name
                                box.group = routerARR[i].group
                                break
                            }
                            navTitle(path, routerARR[i].children)
                        }
                    }
                    return box
                }
                this.$store.dispatch('addTab', {
                    title: navTitle(key, router).name,
                    path: key,
                    group:navTitle(key, router).group
                })
            }
        }
    }
</script>

<style lang="scss">
    $top: top;
    $bottom: bottom;
    $left: left;
    $right: right;
    %w100 {
        width: 100%;
    }

    %h100 {
        height: 100%;
    }

    %cursor {
        cursor: pointer;
    }

    @mixin set-value($side, $value) {
        @each $prop in $leftright {
            #{$side}-#{$prop}: $value;
        }
    }
   #navContain{
       height: 100%;
       overflow: hidden;
   }
    .el-aside{
        overflow: hidden !important;
    }
    #asideNav {
        width: auto !important;
        height: 100%;
        .logo-name {
            background-color: #03152A !important;
            @extend %w100;
            font-weight: 300;
            z-index: 999;
            p {
                height: 50px;
                line-height: 50px;
                text-align: center;
                font-size: 16px;
                color: #5e6d82;
            }
        }
        .el-menu-vertical:not(.el-menu--collapse) {
            width: 190px;
            @extend %h100;
            overflow-y: scroll;
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;
            &::-webkit-scrollbar {
                width: 0 !important;
                display: none;
            }
        }
        .el-menu {
            overflow: inherit;
            border-right: none;
            text-align: left;
            .fa {
                vertical-align: middle;
                margin-right: 5px;
                width: 24px;
                text-align: center;
                font-size: 18px;
            }
            .el-submenu__title{
                height: 45px;
                line-height: 45px;
                letter-spacing: 2px;
            }
            .el-submenu {
                .el-menu-item{
                    min-width: 190px;
                }
            }
            .el-menu-item {
                background-color: #182337 !important;
                height: 45px;
                line-height: 45px;
                width: 190px!important;
                font-size: 15px;
                letter-spacing: 2px;
                &:hover {
                    color: #ffffff !important;
                    background-color: #283c5f !important;
                }
            }
            .el-menu-item.is-active {
                background-color: #283c5f !important
            }
            .is-opened > .el-submenu__title > .el-icon-arrow-down {
                color: #ffffff;
                font-weight: 500;
                font-size: 18px;
            }
        }

    }
</style>
