<template>
  <router-link :to="{ path: 'first' }">first</router-link>
  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <router-link :to="{ path: 'second' }">second</router-link>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>
