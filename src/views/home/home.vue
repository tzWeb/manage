<template>
    <div id="home">
        <el-row :gutter="25">
            <el-col :span="6"><div class="grid-content image">
                <div id="viewer">
                    <div class="title">
                        <img src="../../assets/icon_jx.png" alt="">
                        <span>小行星</span>
                    </div>
                    <div class="button" @click="fullScreen()" title="全屏"></div>
                </div>
            </div></el-col>
            <el-col :span="12"><div class="grid-content detail">
                <el-row class="carInfo">
                    <el-col :span="8">
                        <div class="internetBox">
                            <p class="count">23,567</p>
                            <div class="imgIcon">
                                <img src="../../assets/icon_zwcl.png" alt="">
                            </div>
                            <p class="unit">在网车辆（辆）</p>
                            <div class="divider"></div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="carBox">
                            <p class="count">23,567</p>
                            <div class="imgIcon">
                                <img src="../../assets/icon_zxcl.png" alt="">
                            </div>
                            <p class="unit">在线车辆数（辆）</p>
                            <div class="divider"></div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="carActive">
                            <p class="count">23,567</p>
                            <div class="imgIcon">
                                <img src="../../assets/icon_jrhd.png" alt="">
                            </div>
                            <p class="unit">今日活跃车辆数（辆）</p>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="dataDetail">
                    <el-col :span="15">
                        <div class="total">
                            <p>累计测试总里程（km）</p>
                            <div class="numBox">
                                <div class="w10">
                                    <div class="num">0</div>
                                    <div class="numDivider">,</div>
                                </div>
                                <div class="w10">
                                    <div class="num">1</div>
                                </div>
                                <div class="w10">
                                    <div class="num">2</div>
                                </div>
                                <div class="w10">
                                    <div class="num">3</div>
                                    <div class="numDivider">,</div>
                                </div>
                                <div class="w10">
                                    <div class="num">4</div>
                                </div>
                                <div class="w10">
                                    <div class="num">5</div>
                                </div>
                                <div class="w10">
                                    <div class="num">6</div>
                                    <div class="numDivider">,</div>
                                </div>
                                <div class="w10">
                                    <div class="num">7</div>
                                </div>
                                <div class="w10">
                                    <div class="num">8</div>
                                </div>
                                <div class="w10">
                                    <div class="num">9</div>
                                </div>
                            </div>
                        </div>
                        <el-row class="produce">
                            <el-col :span="12" class="pr11">
                                <div class="reduce box">
                                    <p>
                                        <img src="../../assets/icon_jnjp.png" alt="">
                                        <span>综合节能减排</span>
                                    </p>
                                    <div class="content">
                                        1,200
                                        <span class="nextLine">吨</span>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="12" class="pf11">
                                <div class="plant box">
                                    <p>
                                        <img src="../../assets/icon_zzds.png" alt="">
                                        <span>相当于种植大树</span>
                                    </p>
                                    <div class="content">
                                        1,200
                                        <span class="nextLine">万棵</span>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="9">
                       <div class="pf">
                           <div class="chargingCapacity box">
                               <p>
                                   <img src="../../assets/icon_jrcd.png" alt="">
                                   <span>今日充电量</span>
                               </p>
                               <div class="content">
                                   1,200
                                   <span>度</span>
                               </div>
                           </div>
                       </div>
                        <div class="pf">
                            <div class="saveOil box">
                                <p>
                                    <img src="../../assets/icon_ljjyl.png" alt="">
                                    <span>累计节油量</span>
                                </p>
                                <div class="content">
                                    1,2424
                                    <span>万升</span>
                                </div>
                            </div>
                        </div>
                        <div class="pf">
                            <div class="energy box">
                                <p>
                                    <img src="../../assets/icon_ljnh.png" alt="">
                                    <span>累计能耗</span>
                                </p>
                                <div class="content">
                                    1,2424
                                    <span>万度</span>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div></el-col>
            <el-col :span="6">
                <div class="grid-content statistics">
                    <div class="title">
                        <img src="../../assets/icon_jx.png" alt="">
                        <span>测试里程排行（km）</span>
                    </div>
                    <div id="chart">

                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import remoteLoad from "../../lib/utils.js";
    import echarts from "echarts";
    export default {
        name:"home",
        mounted() {
            this.created();
            this.drawChart();
            console.log(this.$api)
        },
        methods:{
            async created() {
                if (window.embedpano){
                    this.initKrpano();
                } else {
                    await remoteLoad('vtour/tour.js')
                    this.initKrpano();
                }
            },
            initKrpano(){
                embedpano({swf:"vtour/tour.swf", xml:"vtour/tour.xml", target:"viewer", html5:"auto", mobilescale:1.0, passQueryParameters:true});
            },
            fullScreen(){
                var krpano = document.getElementById("krpanoSWFObject");
                /*全屏*/
                krpano.set("fullscreen", true);
            },
            drawChart(){
                let data=[3912, 3793 ,3125, 2908 , 2687 , 2536 , 2066 , 1668 , 1312 , 1205 , 865 , 786 , 526 , 48 , 5 , 2 ].sort(function(a,b){
                    return a-b;
                });
                console.log(data)
                let chart = echarts.init(
                    document.getElementById("chart")
                );
                chart.setOption({
                    //x轴配置
                    xAxis: {
                        type: 'value',
                        splitLine:{show:false},
                        axisLine: {show: false},
                        axisTick: {show: false},
                        axisLabel:{show: false},
                    },
                    //y轴配置
                    yAxis: {
                        type: 'category',
                        axisLabel: {
                            textStyle: {
                                color: "#707884",
                                fontSize: "14"
                            }
                        },
                        splitLine:{show:false},
                        axisLine: {show: false},
                        axisTick: {show: false},
                        data: ['谷歌','通用','丰田','宝马','奔驰','沃尔沃','上汽','广汽','吉利','长安','长城','东风','比亚迪','开沃','威马','一汽']
                    },
                    //显示范围
                    grid: {
                        top: 0,
                        left: 80,
                        right: 40,
                        bottom: 20
                    },
                    //数据
                    series: [
                        {
                            type: "bar",
                            barWidth: "25",
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [0, 5, 5, 0],
                                    label: {
                                        show: true, //开启显示
                                        position: 'right', //在上方显示
                                        textStyle: { //数值样式
                                            color: '#12b1c8',
                                            fontSize: 12
                                        }
                                    },
                                    color: function() {
                                        return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                            {
                                                offset: 0,
                                                color: '#0d9bd4'
                                            },
                                            {
                                                offset: 1,
                                                color: '#12bfaa'
                                            }
                                        ]);
                                    }
                                }
                            },
                            data: data
                        }
                    ]
                })
            }
        }
    }
</script>
<style lang="scss">
    $height:890px;
    $left:left;
    $background:#0e182a;
    %borderRadius{
        border-radius: 5px;
    }
    .pf{
        padding-left: 22px;
    }
    .pf11{
        padding-left: 11px;
    }
    .pr11{
        padding-right: 11px;
    }
    .divider{
        position: absolute;
        height: 118px;
        width: 1px;
        background: #263041;
        right: 0;
        top: 50%;
        margin-top: -59px;
    }
    #home{
        height: 100%;
        margin-left: 25px;
        padding-right: 25px;
        padding-top: 25px;
        overflow: hidden;
        overflow-y: auto;
        box-sizing: border-box;
        .image{
            height: $height;
            @extend %borderRadius;
            #viewer{
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                .button{
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 20px;
                    height: 20px;
                    z-index: 1111;
                    background: url("../../assets/icon_qp.png") no-repeat;
                    cursor: pointer;
                }
                .title{
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    z-index: 1111;
                    font-size: 18px;
                    color: #707884;
                    span{
                        margin-left: 10px;
                    }
                }
            }
        }
        .detail{
            height: $height;
            @extend %borderRadius;
            .carInfo{
                background: $background;
                @extend %borderRadius;
                height: 295px;
                .internetBox{
                    position: relative;
                    .count{
                        margin-top: 65px;
                        font-size: 40px;
                        color: #0eaffd;
                    }
                    .imgIcon{
                        margin-top: 20px;
                    }
                    .unit{
                        margin-top: 15px;
                        font-size: 16px;
                        color: #717985;
                    }
                }
                .carBox{
                    position: relative;
                    .count{
                        margin-top: 65px;
                        font-size: 40px;
                        color: #1abb9c;
                    }
                    .imgIcon{
                        margin-top: 20px;
                    }
                    .unit{
                        margin-top: 15px;
                        font-size: 16px;
                        color: #717985;
                    }
                }
                .carActive{
                    position: relative;
                    .count{
                        margin-top: 65px;
                        font-size: 40px;
                        color: #ff6600;
                    }
                    .imgIcon{
                        margin-top: 20px;
                    }
                    .unit{
                        margin-top: 15px;
                        font-size: 16px;
                        color: #717985;
                    }
                }
            }
            .total{
                margin-top: 25px;
                height: 290px;
                background: $background;
                box-sizing: border-box;
                overflow: hidden;
                @extend %borderRadius;
                p{
                    margin-top: 60px;
                    color: #717985;
                    font-size: 20px;
                }
                .numBox{
                    width: 95%;
                    margin: 0 auto;
                    margin-top: 45px;
                    overflow: hidden;
                    box-sizing: border-box;
                    padding: 0 -4px;
                    .w10{
                        width: 10%;
                        float: left;
                        padding: 0 4px;
                        box-sizing: border-box;
                        position: relative;
                    }
                    .numDivider{
                        font-size: 36px;
                        color: #999999;
                        position: absolute;
                        bottom: -5px;
                        right: -5px;
                    }
                    .num{
                        height: 80px;
                        background: url("../../assets/numBg.png") no-repeat;
                        background-size:100% 100%;
                        filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="../../assets/numBg.png",sizingMethod='scale');
                        font-size: 52px;
                        line-height: 80px;
                        color: #fff;
                    }
                }
            }
            .box.chargingCapacity{
                border-top: #0d427b solid 3px;
                background-image: url("../../assets/icon_jrcdl.png");
                background-repeat: no-repeat;
                background-position: bottom right;
            }
            .box.saveOil{
                border-top: #125f5b solid 3px;
                background-image: url("../../assets/icon_ljjyl1.png");
                background-repeat: no-repeat;
                background-position: bottom right;
            }
            .box.energy{
                border-top: #743619 solid 3px;
                background-image: url("../../assets/icon_ljnh1.png");
                background-repeat: no-repeat;
                background-position: bottom right;
            }
            .box.reduce{
                width: 100%;
                height: 100%;
                background: $background;
                height: 255px;
                background-image: url("../../assets/icon_zhjnjp.png");
                background-repeat: no-repeat;
                background-position: bottom right;
                overflow: hidden;
            }
            .box.plant{
                width: 100%;
                height: 100%;
                background: $background;
                height: 255px;
                background-image: url("../../assets/icon_xdyzz.png");
                background-repeat: no-repeat;
                background-position: bottom right;
                overflow: hidden;
            }
            .box{
                margin-top: 25px;
                font-size: 18px;
                color: #717985;
                height: 176px;
                overflow: hidden;
                @extend %borderRadius;
                background: $background;
                box-sizing: border-box;
                p{
                    margin-top: 25px;
                    margin-left: 15px;
                    text-align: left;
                    span{
                        margin-left: 8px;
                    }
                }
                .content{
                    font-size: 36px;
                    color: #fff;
                    margin-top: 40px;
                    span{
                        font-size: 16px;
                        color: #a4a6a9;
                    }
                    .nextLine{
                        display: block;
                        margin-top: 35px;
                    }
                }
            }
        }
        .statistics{
            height: $height;
            background: $background;
            @extend %borderRadius;
            text-align: left;
            overflow: hidden;
            .title{
                margin-top: 18px;
                margin-left: 35px;
                font-size: 18px;
                color: #707884;
                span{
                    margin-left: 10px;
                }
            }
            #chart{
                height: 850px;
            }
        }
    }
</style>