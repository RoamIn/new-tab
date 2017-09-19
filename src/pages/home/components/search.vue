<template>
  <form :action="search.action">
    <input type="text" :name="search.name" :maxlength="search.maxlength" placeholder="Search" autocomplete="off" autofocus="autofocus" spellcheck="false">
  </form>
</template>
<script>
  export default {
      name: 'hello',
      data () {
          return {
              searchType: 'google',
              searchTypeMap: {
                  baidu: {
                      action: 'https://www.baidu.com/s',
                      name: 'wd',
                      maxlength: 255
                  },
                  google: {
                      action: 'https://www.google.com/search',
                      name: 'q',
                      maxlength: 2048
                  }
              }
          };
      },
      computed: {
          search () {
              return this.searchTypeMap[this.searchType];
          }
      }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  form {
    position: absolute;
    top: 40%;
    left: 50vw;
    transform: translateX(-50%);
  }

  input {
    padding: 0 12px;
    width: 600px;
    height: 40px;

    font-size: 18px;
    background-color: rgba(222, 222, 222, .8);
  }
</style>
