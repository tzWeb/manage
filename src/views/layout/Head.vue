<template>
    <div>
        <el-header id="head" height="100px">
            <div id="logo">
                <img src="../../assets/logo_image.png" alt="">
            </div>
           <div class="container">
               <div v-for="(item,index) in fiterRouter" :key="index" class="content">
                   <router-link :to="item.path" :class="$store.getters.leftNavGroup==item.group?'active':''"><i :class="item.iconCls"></i><span>{{item.name}}</span></router-link>
               </div>
           </div>
            <div class="login">
                <div id="logined" v-if="$store.getters.token!=''">
                    <i></i>{{$store.getters.info.permissions}},你好！
                </div>
                <div id="login" v-else></div>
            </div>
            <div class="info">
                <el-dropdown>
                    <span class="el-dropdown-link">

                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-header>
    </div>
</template>
<script>
    /**
     * 头部组件
     * 此组件用于管理系统的头部导航栏
     */
    export default {
        name: "Head",
        mounted(){
            console.log(this.$store.getters.token);
        },
        data(){
            return{
                router:this.$store.getters.routers
            }
        },
       computed:{
            fiterRouter(){
                let router=[];
                for(let i=0;i<this.router.length;i++){
                    if(this.router[i].hidden!=true){
                        router.push(this.router[i]);
                    }
                }
                return router;
            }
       }
    };
</script>
<style lang="scss" scoped>
    $height:100px;
    #head{
        width: 100%;
        height: $height;
        background: #182337;
        overflow: hidden;
        #logo{
            width: 362px;
            line-height: $height;
            float: left;
        }
        .info{
            position: absolute;
            right: 70px;
            top: 10px;
            .el-dropdown-link{
                cursor: pointer;
                display: inline-block;
                width: 50px;
                height: 50px;
                border-radius: 50px;
                background: url("../../assets/info.jpg") no-repeat;
                background-size: 100% 100%;
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="../../assets/info.jpg",sizingMethod='scale');
            }
        }
        .container{
           float: left;
            top: 0;
            margin-left: 95px;
            white-space:nowrap;
            .content{
                position: relative;
                text-align: center;
                height: $height;
                float: left;
                a{
                    display: inline-block;
                    height: 100px;
                    width: 115px;
                    font-size: 16px;
                    color: #adb8c1;
                    font-weight: bold;
                    i{
                        display: block;
                        width: 24px;
                        height: 24px;
                        position: absolute;
                        left: 50%;
                        margin-left: -12px;
                        top: 24px;
                    }
                    span{
                        display: inline-block;
                        margin-top: 62px;
                    }
                    .ksyy{
                        background: url("../../assets/icon_ksyy.png") no-repeat;
                    }
                    .csgl{
                        background: url("../../assets/icon_csgl.png") no-repeat;
                    }
                    .lcxt{
                        background: url("../../assets/icon_lcxt.png") no-repeat;
                    }
                    .aqjg{
                        background: url("../../assets/icon_aqjg.png") no-repeat;
                    }
                    .dsj{
                        background: url("../../assets/icon_dsj.png") no-repeat;
                    }
                    .zdhyy{
                        background: url("../../assets/icon_zdhyy.png") no-repeat;
                    }
                    .ydyy{
                        background: url("../../assets/icon_ydyh.png") no-repeat;
                    }
                    .mhgl{
                        background: url("../../assets/icon_mhgl.png") no-repeat;
                    }
                    .xtgl{
                        background: url("../../assets/icon_xtgl.png") no-repeat;
                    }
                    &:hover{
                        background: #3279ef;
                        color: #fff;
                        .ksyy{
                            background: url("../../assets/icon_ksyy_1.png") no-repeat;
                        }
                        .csgl{
                            background: url("../../assets/icon_csgl_1.png") no-repeat;
                        }
                        .lcxt{
                            background: url("../../assets/icon_lcxt_1.png") no-repeat;
                        }
                        .aqjg{
                            background: url("../../assets/icon_aqjg_1.png") no-repeat;
                        }
                        .dsj{
                            background: url("../../assets/icon_dsj_1.png") no-repeat;
                        }
                        .zdhyy{
                            background: url("../../assets/icon_zdhyy_1.png") no-repeat;
                        }
                        .ydyy{
                            background: url("../../assets/icon_ydyh_1.png") no-repeat;
                        }
                        .mhgl{
                            background: url("../../assets/icon_mhgl_1.png") no-repeat;
                        }
                        .xtgl{
                            background: url("../../assets/icon_xtgl_1.png") no-repeat;
                        }
                    }
                    &.active{
                        background: #3279ef;
                        color: #fff;
                        .ksyy{
                            background: url("../../assets/icon_ksyy_1.png") no-repeat;
                        }
                        .csgl{
                            background: url("../../assets/icon_csgl_1.png") no-repeat;
                        }
                        .lcxt{
                            background: url("../../assets/icon_lcxt_1.png") no-repeat;
                        }
                        .aqjg{
                            background: url("../../assets/icon_aqjg_1.png") no-repeat;
                        }
                        .dsj{
                            background: url("../../assets/icon_dsj_1.png") no-repeat;
                        }
                        .zdhyy{
                            background: url("../../assets/icon_zdhyy_1.png") no-repeat;
                        }
                        .ydyy{
                            background: url("../../assets/icon_ydyh_1.png") no-repeat;
                        }
                        .mhgl{
                            background: url("../../assets/icon_mhgl_1.png") no-repeat;
                        }
                        .xtgl{
                            background: url("../../assets/icon_xtgl_1.png") no-repeat;
                        }
                    }
                }
            }
        }
        .login{
            float: right;
            margin-right: 25px;
            margin-top: 65px;
            font-size: 12px;
            color: #adb8c1;
            i{
                position: relative;
                display: inline-block;
                width: 16px;
                height: 16px;
                background: url("../../assets/icon_yh.png") no-repeat;
                margin-right: 10px;
                top: 4px;
            }
        }
    }
</style>