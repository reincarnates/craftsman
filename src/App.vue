<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './common/font/font.css';
  *{
    margin: 0;
    padding: 0;
  }

  /* body{
    font: 14px/1.5 tw, Arial, Tahoma, Helvetica, sans-serif;
  } */

  #app{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  ul,li,ol{
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    color: #474747;
    line-height: 1.2;
  }

  i, em, b, strong {
    font-style: normal;
    font-weight: normal;
  }
</style>
