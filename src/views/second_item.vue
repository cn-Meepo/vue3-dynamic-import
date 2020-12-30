<template>
  <div v-if="menu">
    <el-submenu v-if="menu && menu.children && menu.children.length >= 1" :index="menu.id.toString()"
                :popper-append-to-body="false">
      <template #title>
        <svg class="icon-svg aui-sidebar__menu-icon" aria-hidden="true">
          <use :xlink:href="`#${menu.icon}`"></use>
        </svg>
        <span>{{ menu.name }}</span>
      </template>
      <second_item v-for="item in menu.children" :key="item.name + item.id" :menu="item"></second_item>
    </el-submenu>
      <el-menu-item v-else :index="menu.id.toString()" @click="gotoRouteHandle(menu.id)">
        <svg class="icon-svg aui-sidebar__menu-icon" aria-hidden="true"><use :xlink:href="`#${menu.icon}`"></use></svg>
        <span>{{ menu.name }}</span>
      </el-menu-item>
  </div>
</template>

<script>

export default {
  name: "second_item",
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  mounted () {
    console.log(this.menu)
  }
}
</script>

<style scoped>

</style>
