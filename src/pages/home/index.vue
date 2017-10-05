<template>
  <div>
      <drawer></drawer>
      <search></search>
  </div>
</template>

<script>
  import Drawer from './components/drawer.vue';
  import Search from './components/search.vue';

  export default {
      name: 'Home',
      components: {
          Drawer,
          Search
      },
      data () {
          return {};
      }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
