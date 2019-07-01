<template>
    <div>
      <template v-for="(child,index) in menuData">
        <el-submenu v-if="child.children.length > 0" :index="child.path" :key="index+child.path">
          <template slot="title">
            <i :class="child.iconCls?child.iconCls:''"></i>
            <span slot="title">{{ child.name }}</span>
          </template>
          <menu-tree :menuData="child.children"></menu-tree>
        </el-submenu>

        <el-menu-item v-else :index="child.path" :class="$route.path===child.path?'is-active':''">
          <i :class="child.iconCls?child.iconCls:''"></i>
          <span slot="title">{{ child.name }}</span>
        </el-menu-item>
      </template>
    </div>
</template>

<script>
export default {
  name: 'MenuTree',
  props: ['menuData']
}
</script>

<style scoped>

</style>
