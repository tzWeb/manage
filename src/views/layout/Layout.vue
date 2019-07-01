<template>
    <div style="width: 100%;">
        <layoutHead></layoutHead>
        <div id="contain">
            <div id="left">
                <layoutAside></layoutAside>
            </div>
            <div id="right" :class="$store.getters.isCollapse ? hide:''">
                <div class="container">
                    <tabNav></tabNav>
                    <div id="main">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import layoutHead from "./Head"
    import layoutAside from './Aside'
    import tabNav from './TabNav'
    export default{
        name:"layout",
        components: {
            layoutHead,
            layoutAside,
            tabNav
        },
        // mounted(){
        //     let h = document.documentElement.clientHeight;
        //     h=h-100;
        //     document.querySelector("#left").style.height=`${h}px`;
        // },
        methods:{
            fetchNavData () { // 初始化菜单激活项
                let nav_group="";
                let cur_path = this.$route.path;
                let router = this.$store.getters.routers;
                let navTitle = function (path, routerARR) {
                    for (let i = 0; i < routerARR.length; i++) {
                        if (routerARR[i].children && routerARR[i].children.length > 0 || routerARR[i].path === path) {
                            if (routerARR[i].path === path && routerARR[i].children.length < 1) {
                                nav_group = routerARR[i].group
                                break
                            }
                            navTitle(path, routerARR[i].children)
                        }
                    }
                    return nav_group
                }
                this.$store.commit("setLeftNavGroup",navTitle(cur_path, router));
            },
        },
        watch: {
            '$route': 'fetchNavData'  //监听router值改变时，改变导航菜单激活项
        }
    }
</script>
<style lang="scss" scoped>
    $bgLColor:#2176c1;
    $bgRColor:#F3F5F6;
    #contain{
        position: absolute;
        top: 99px;
        bottom: 0;
        background: #0b1320;
        width: 100%;
        #left{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            background: #182337;
            /*overflow: hidden;*/
            height: 100%;
            width: 190px;
            overflow: hidden;
            /*overflow-y: scroll;*/
            /*-ms-overflow-style: none;*/
            /*overflow: -moz-scrollbars-none;*/
            /*&::-webkit-scrollbar {*/
            /*    width: 0 !important;*/
            /*    display: none;*/
            /*    background: red;*/
            /*}*/
        }
        #right{
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin-left: 190px;
            transition: margin-left .28s;
            #main{
                position: absolute;
                top: 42px;
                bottom: 0;
                right: 0;
                left: 0;
                overflow: hidden;
                overflow-y: auto;
            }
        }
        #right.hide{
            margin-left:60px;
        }
        .mian{
            width: 100%;
        }
    }
</style>