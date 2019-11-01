<template>
  <div class="sidebar-content">
      <ul>
        <li>
          <a href="#">
            <img src="../../assets/images/xcx.png" height="31" width="31"/>
            <p>小程序</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/app.png" height="31" width="31"/>
            <p>APP</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/wx.png" height="31" width="31"/>
            <p>微信</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/fk.png" height="31" width="31"/>
            <p>反馈</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/kh.png" height="31" width="31"/>
            <p>客户</p>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" @click="backTop">
            <img src="../../assets/images/zd.png" height="31" width="31"/>
            <p>置顶</p>
          </a>
        </li>
      </ul>
  </div>

</template>

<script>
    export default {
        name: "Sidebar",
        methods: {
            backTop() {
                let self = this
                self.timer = setInterval(function () {
                    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    let ispeed = Math.floor(-osTop / 5);
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                    if (osTop === 0) {
                        clearInterval(self.timer);
                    }
                }, 20);
            },
        },

    }
</script>

<style scoped lang="scss">
  @import "../../assets/css/Sidebar/Sidebar.scss";
</style>
