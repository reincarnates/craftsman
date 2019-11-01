<template>
  <div>
    <div class="nav">
      <div class="nav-wrapper flex-sw">
        <div class="nav-logo flex-center">
          <img src="../../assets/images/nav_logo.png" alt="">
        </div>
        <div class="nav-search-wrapper flex-x-center">
          <div class="nav-search-top flex">
            <div
              class="nav-search-top-item flex-center"
              :class="{ searchCur : navIndex == 1 }"
              @click="checkNav(1)"
            >产品</div>
            <div
              class="nav-search-top-item flex-center"
              :class="{ searchCur : navIndex == 2 }"
              @click="checkNav(2)"
            >行业</div>
          </div>
          <div class="nav-search-input-wrapper flex">
            <div class="nav-search-input">
              <input type="text">
            </div>
            <div class="nav-search-btn flex-center">搜索一下</div>
          </div>
        </div>
        <div class="home-head-right flex-y-center pat-tw">
          <div class="home-head-item2 flex-center">
            <span>登录/注册</span>
          </div>
          <div
            class="home-head-item2 item-bg2 flex-center"
            :class="{ itemCur2 : index2 == 2 }"
            @mouseover="headHover2(2)"
            @mouseout="headOut2"
          >
            <span>合作通道</span>
            <transition name="el-zoom-in-top">
              <div v-if="show2" class="content">
                <div class="triangle"></div>
                <div class="block-content">
                  <a class="item" href="###" target="_blank">个人VIP</a>
                  <a class="item" href="###" target="_blank">企业套餐</a>
                </div>
              </div>
            </transition>
          </div>
          <div class="home-head-item2 flex-center">
            <span>App下载</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var self;
export default {
  name: 'Nav',
  data() {
    return{
      navIndex: 1,
      index2: 0,
      show2: false,
    }
  },
  beforeMount() {
    self = this;
  },
  methods: {
    checkNav: function(index) {
      self.navIndex = index;
    },

    headHover2: function(index) {
      self.index2 = index;
      self.show2 = true;
    },

    headOut2: function() {
      self.index2 = 0;
      self.show2 = false;
    },
  }
}
</script>

<style>
@import '../../assets/css/Home/Home.css'
</style>
