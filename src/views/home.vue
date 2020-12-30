<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="Home,News">
      <component class="view" :is="Component" :style="contentHeight"/>
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>

</style>
