<template>
  <div class="navBox">
    <div class="tabnavBox">
      <div class="wrapper" ref="wrapper">
        <div class="content" id="content">
            <transition-group name="list" tag="ul">
<!--              <li v-for="(item, index) in $store.getters.tabnavBox" @contextmenu.prevent="openMenu(item,$event,index)"-->
<!--                  :key="item.title" class="tabnav" :class="{ active: $route.path === item.path }">-->
<!--                <router-link :to="item.path">{{ item.title}}</router-link>-->
<!--                <i @click="removeTab(item)" class="el-icon-error" v-if="index !== 0"></i>-->
<!--              </li>-->
              <li v-for="(item, index) in setData" @contextmenu.prevent="openMenu(item,$event,index)"
                  :key="item.title" class="tabnav" :class="{ active: $route.path === item.path }">
                <router-link :to="item.path">{{ item.title}}</router-link>
                <i @click="removeTab(item)" class="el-icon-error"></i>
              </li>
            </transition-group>
        </div>
      </div>
    </div>
<!--    <ul v-show="this.rightMenuShow" :style="{left:this.left+'px',top:this.top+'px'}" class="menuBox">-->
<!--      <li @click="removeTab($store.getters.rightNav)"><i class="fa fa-remove"></i>1</li>-->
<!--      <li @click="removeOtherTab($store.getters.rightNav)">2</li>-->
<!--      <li @click="removeAllTab">3</li>-->
<!--    </ul>-->
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'TabNav',
    data () {
      return {
        rightMenuShow: false,
        left: 0,
        top: 0
      }
    },
    mounted(){
     this.setScroll();
    },
    computed:{
      setData:function () {
        let data=this.$store.getters.tabnavBox;
        this.setScroll();
        return data;
      }
    },
    methods: {
      setScroll(){
        var _this=this;
       setTimeout(function () {
         //設置元素寬度
         let w=0;
         for(let i=0;i<document.querySelectorAll(".tabnav").length;i++){
           w=w+document.querySelectorAll(".tabnav")[i].getBoundingClientRect().width+10;
         }
         document.querySelector("#content").style.width=`${w}px`;
         //$refs绑定元素
         if(!_this.scroll){
           _this.scroll = new BScroll(_this.$refs.wrapper, {
             //开启点击事件 默认为false
             scrollX:true,
             click:true
           })
           // console.log(this.scroll)
         }else if(!_this.$refs.wrapper){
           return
         }
         else{
           _this.scroll.refresh()
         }
       },600)
      },
      openMenu (item, e, index) {
        if (index === 0) {
          return false
        }
        this.rightMenuShow = true
        this.left = e.clientX + 10
        this.top = e.clientY
        this.$store.dispatch('openMenu', item)
      },
      removeTab (tabItem) {
        this.$store.dispatch('removeTab', {tabItem, fullPath: this.$route.fullPath, router: this.$router})
      },
      removeOtherTab (tabItem) {
        this.$store.dispatch('removeOtherTab', {tabItem, router: this.$router})
      },
      removeAllTab () {
        this.$store.dispatch('removeOtherTab', {all: true, router: this.$router})
      }
    },
    watch: {
      rightMenuShow (value) {
        if (value) {
          document.body.addEventListener('click', () => {
            this.rightMenuShow = false
          })
        } else {
          document.body.removeEventListener('click', () => {
            this.rightMenuShow = false
          })
        }
      }
    }
  }
</script>
<style>
  .tabnav {
    display: inline-block;
    transition: all 0.5s;
  }

  .list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */
  {
    opacity: 0;
    transform: translateY(30px);

  }

  .list-enter-active {
    transition: all 0.5s;
  }

  /*.list-leave-active {*/
  /*  position: absolute;*/
  /*  transition: all 1s;*/
  /*}*/
</style>
<style lang="scss">
  $top: top;
  $bottom: bottom;
  $left: left;
  $right: right;
  $leftright: ($left, $right);

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

  .tabnavBox {
    @extend %w100;
    height: 45px;
    box-sizing: border-box;
    background: #1d2d49;
    ul {
      white-space:nowrap;
      li {
          position: relative;
        height: 30px;
        width: 94px;
        line-height: 30px;
        @extend %cursor;
        border-radius: 3px;
        background: #c8d9f7;
          font-size: 14px;
          color: #1a468f;
          margin-left: 3px;
          margin-top: 15px;
        overflow: hidden;
          text-align: center;
        a {
          display: inline-block;
          @extend %h100;
          color: #999999;
        }
        i {
            position: absolute;
            right: 5px;
            top: 5px;
            color: #536b95;
          @extend %cursor;
        }
      }
      li.active {
        background: #3279ef;
        color: #ffffff;
          height: 36px;
          line-height: 36px;
          margin-top: 9px;
        a {
          color: #ffffff;
        }
          i{
              color: white;
          }
      }
    }
  }

  .menuBox {
    margin: 0;
    background: #fff;
    z-index: 999;
    position: absolute;
    padding: 5px 0;
    border: 1px solid #cccccc;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 1px 6px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      @extend %cursor;
      &:hover {
        background: #e1e6ea;
      }
    }
  }
  .navBox{
    width: 100%;
    position: relative;
      z-index: 1111;
  }
  .wrapper{
    text-align: left;
    position: absolute;
    top: 0;
    left: 20px;
    right: 0;
    overflow: hidden;
    .content{
      position: relative;
    }
  }
</style>
