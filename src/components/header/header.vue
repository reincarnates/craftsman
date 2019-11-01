<template>
  <div>
    <div class="header-wrapper">
      <div class="header flex-sw">
        <div class="header-login">
          <a href="###">登录 / 注册</a>
        </div>
        <div class="header-right flex-sw">
          <div class="header-cultural flex-center" @mouseover="culturalShow = true">
            <span>国家文化馆</span>
            <img src="../../assets/images/slide.png" alt="">
            <transition name="el-zoom-in-top">
              <div class="header-cultural-slide flex" v-if="culturalShow" @mouseover="culturalShow = true" @mouseout="culturalShow = false">
                <div class="header-cultural-slide-item text-more flex-y-center" @mouseover="culturalShow = true">
                  <span>韩国馆</span>
                  <img src="../../assets/images/fire.png" alt="">
                </div>
                <div class="header-cultural-slide-item text-more flex-y-center" @mouseover="culturalShow = true">
                  <span>韩国馆</span>
                  <img src="../../assets/images/fire.png" alt="">
                </div>
                <div class="header-cultural-slide-item text-more flex-y-center" @mouseover="culturalShow = true">
                  <span>韩国馆</span>
                  <img src="../../assets/images/fire.png" alt="">
                </div>
                <div class="header-cultural-slide-item text-more flex-y-center" @mouseover="culturalShow = true">
                  <span>韩国馆</span>
                  <img src="../../assets/images/fire.png" alt="">
                </div>
                <div class="header-cultural-slide-item text-more flex-y-center" @mouseover="culturalShow = true">
                  <span>韩国馆</span>
                  <img src="../../assets/images/fire.png" alt="">
                </div>
                <div class="header-cultural-slide-item text-more flex-y-center" @mouseover="culturalShow = true">
                  <span>韩国馆</span>
                  <img src="../../assets/images/fire.png" alt="">
                </div>
              </div>
            </transition>
          </div>
          <div class="flex">
            <div class="header-nav-item flex-center">合作通道</div>
            <div class="header-nav-item flex-center">
              <span>APP下载</span>
              <img src="../../assets/images/slide.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-search-wrapper">
      <div class="header-search flex-sw">
        <div class="header-search-logo flex-y-center">
          <img src="../../assets/images/header_logo.png" alt="">
        </div>
        <div class="header-search-input-wrapper">
          <div class="header-search-input-top flex">
            <div class="header-search-input">
              <input type="text" placeholder="民族特色服饰" />
              <img src="../../assets/images/search_left-icon.png" alt="">
            </div>
            <div class="header-search-btn flex-center">
              <img src="../../assets/images/header_search_btn_bg.png" alt="">
            </div>
          </div>
          <div class="header-search-sub-nav">
            <a href="###">贵州茅台</a>
            <a href="###">云南白药</a>
            <a href="###">北京烤鸭</a>
            <a href="###">蒙古地毯</a>
            <a href="###">景德瓷器</a>
          </div>
        </div>
        <div class="header-cart-wrapper flex-center">
          <div class="header-cart-left flex-center">
            <img src="../../assets/images/search_left-icon2.png" alt="">
          </div>
          <div class="header-cart-center flex-center">
            <img src="../../assets/images/cart_bg.png" alt="">
            <span>购物车</span>
          </div>
          <div class="header-cart-right">
            <img src="../../assets/images/search_left-icon2.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="header-nav-wrapper">
      <div class="header-nav flex">
        <div class="header-nav-item flex-center" :class="{ navCur : index == 1 }" @mouseover="navOver(1)" @mouseout="navOut(1)">
          <a href="jacaScript:;">首页</a>
        </div>
        <div class="header-nav-item flex-center" :class="{ navCur : index == 2 }" @mouseover="navOver(2)" @mouseout="navOut(2)">
          <a href="jacaScript:;">中华美食</a>
        </div>
        <div class="header-nav-item flex-center" :class="{ navCur : index == 3 }" @mouseover="navOver(3)" @mouseout="navOut(3)">
          <a href="jacaScript:;">传统家居</a>
        </div>
        <div class="header-nav-item flex-center" :class="{ navCur : index == 4 }" @mouseover="navOver(4)" @mouseout="navOut(4)">
          <a href="jacaScript:;">滋补保健</a>
        </div>
        <div class="header-nav-item flex-center" :class="{ navCur : index == 5 }" @mouseover="navOver(5)" @mouseout="navOut(5)">
          <a href="jacaScript:;">美味香茗</a>
        </div>
        <div class="header-nav-item flex-center" :class="{ navCur : index == 6 }" @mouseover="navOver(6)" @mouseout="navOut(6)">
          <a href="jacaScript:;">行业特色</a>
        </div>
        <div class="header-nav-item flex-center" :class="{ navCur : index == 7 }" @mouseover="navOver(7)" @mouseout="navOut(7)">
          <a href="jacaScript:;">民族特色</a>
        </div>
        <div class="header-nav-item flex-center" :class="{ navCur : index == 8 }" @mouseover="navOver(8)" @mouseout="navOut(8)">
          <a href="jacaScript:;">地区特色</a>
        </div>

        <!-- 民族特色 -->
        <transition name="el-zoom-in-top">
          <div class="header-nav-content flex" v-if="nation" @mouseout="nation = false, index = 0">
            <div class="header-nav-content-item flex-y-center">
              <img src="../../assets/images/han.png" alt="">
              <a href="javaScript:;">汉族</a>
            </div>
            <div class="header-nav-content-item flex-y-center">
              <img src="../../assets/images/han.png" alt="">
              <a href="javaScript:;">汉族</a>
            </div>
            <div class="header-nav-content-item flex-y-center">
              <img src="../../assets/images/han.png" alt="">
              <a href="javaScript:;">汉族</a>
            </div>
            <div class="header-nav-content-item flex-y-center">
              <img src="../../assets/images/han.png" alt="">
              <a href="javaScript:;">汉族</a>
            </div>
            <div class="header-nav-content-item flex-y-center">
              <img src="../../assets/images/han.png" alt="">
              <a href="javaScript:;">汉族</a>
            </div>
            <div class="header-nav-content-item flex-y-center">
              <img src="../../assets/images/han.png" alt="">
              <a href="javaScript:;">汉族</a>
            </div>
            <div class="header-nav-content-item flex-y-center">
              <img src="../../assets/images/han.png" alt="">
              <a href="javaScript:;">汉族</a>
            </div>
            <div class="header-nav-content-item flex-y-center">
              <img src="../../assets/images/han.png" alt="">
              <a href="javaScript:;">汉族</a>
            </div>
          </div>
        </transition>

        <!-- 中华美食 -->
        <transition name="el-zoom-in-top">
          <div class="header-nav-content flex" v-if="food" @mouseout="food = false, index = 0">
            <div class="header-nav-content-item flex-y-center">
              <img src="../../assets/images/han.png" alt="">
              <a href="javaScript:;">饼干糕点</a>
            </div>
          </div>
        </transition>

        <!-- 地区特色 -->
        <transition name="el-zoom-in-top">
          <div class="header-nav-content" v-if="address" @mouseout="address = false, index = 0">
            <div class="map">
              <div class="area">
                <div class="map-point p1" @mouseover="isShow = 'block'">
                  <div class="city">黑龙江省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="230000">黑龙江省</span>
                  </div>
                </div>
                <div class="map-point p2">
                  <div class="city">吉林省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="220000">吉林省</span>
                  </div>
                </div>
                <div class="map-point p3">
                  <div class="city">辽宁省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="210000">辽宁省</span>
                  </div>
                </div>
                <div class="map-point p4">
                  <div class="city">北京市</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="990121">中直单位</span>
                    <span class="s pop_s" key="110000">北京市</span>
                  </div>
                </div>
                <div class="map-point p5">
                  <div class="city">天津市</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="120000">天津市</span>
                  </div>
                </div>
                <div class="map-point p6">
                  <div class="city">河北省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="130000">河北省</span>
                  </div>
                </div>
                <div class="map-point p7">
                  <div class="city">山东省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="370000">山东省</span>
                  </div>
                </div>
                <div class="map-point p8">
                  <div class="city">江苏省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="320000">江苏省</span>
                  </div>
                </div>
                <div class="map-point p9">
                  <div class="city">上海市</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="310000">上海市</span>
                  </div>
                </div>
                <div class="map-point p10">
                  <div class="city">浙江省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="330000">浙江省</span>
                  </div>
                </div>
                <div class="map-point p11">
                  <div class="city">福建省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="350000">福建省</span>
                  </div>
                </div>
                <div class="map-point p12">
                  <div class="city">台湾省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="990385">台湾省</span>
                  </div>
                </div>
                <div class="map-point p13">
                  <div class="city">香港</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="810000">香港</span>
                  </div>
                </div>
                <div class="map-point p14">
                  <div class="city">澳门</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="820000">澳门</span>
                  </div>
                </div>
                <div class="map-point p15">
                  <div class="city">海南省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="460000">海南省</span>
                  </div>
                </div>
                <div class="map-point p16">
                  <div class="city">安徽省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                      <span class="s pop_s" key="340000">安徽省</span>
                  </div>
                </div>
                <div class="map-point p17">
                  <div class="city">江西省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="360000">江西省</span>
                  </div>
                </div>
                <div class="map-point p18">
                  <div class="city">广东省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="440000">广东省</span>
                  </div>
                </div>
                <div class="map-point p19">
                  <div class="city">山西省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="140000">山西省</span>
                  </div>
                </div>
                <div class="map-point p20">
                  <div class="city">河南省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="410000">河南省</span>
                  </div>
                </div>
                <div class="map-point p21">
                  <div class="city">湖北省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="420000">湖北省</span>
                  </div>
                </div>
                <div class="map-point p22">
                  <div class="city">湖南省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="430000">湖南省</span>
                  </div>
                </div>
                <div class="map-point p23">
                  <div class="city">广西壮族自治区</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="450000">广西壮族自治区</span>
                  </div>
                </div>
                <div class="map-point p24">
                  <div class="city">陕西省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="610000">陕西省</span>
                  </div>
                </div>
                <div class="map-point p25">
                  <div class="city">重庆市</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="500000">重庆市</span>
                  </div>
                </div>
                <div class="map-point p26">
                  <div class="city">贵州省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="520000">贵州省</span>
                  </div>
                </div>
                <div class="map-point p27">
                  <div class="city">内蒙古自治区</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="150000">内蒙古自治区</span>
                  </div>
                </div>
                <div class="map-point p28">
                  <div class="city">甘肃省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="620000">甘肃省</span>
                  </div>
                </div>
                <div class="map-point p29">
                  <div class="city">四川省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="510000">四川省</span>
                  </div>
                </div>
                <div class="map-point p30">
                  <div class="city">云南省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="530000">云南省</span>
                  </div>
                </div>
                <div class="map-point p31">
                  <div class="city">青海省</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="630000">青海省</span>
                  </div>
                </div>
                <div class="map-point p32">
                  <div class="city">新疆维吾尔自治区</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="990122">新疆生产建设兵团</span>
                    <span class="s pop_s" key="650000">新疆维吾尔自治区</span>
                  </div>
                </div>
                <div class="map-point p33">
                  <div class="city">西藏自治区</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="540000">西藏自治区</span>
                  </div>
                </div>
                <div class="map-point p34">
                  <div class="city">宁夏回族自治区</div>
                  <div class="pop" :style="{ 'display': isShow }">
                    <div style="position: relative;">
                      <div class="address"></div>
                      <div class="tran"></div>
                    </div>
                    <span class="s pop_s" key="640000">宁夏回族自治区</span>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
var self, service;
export default {
  data() {
    return{
      index: 0,
      culturalShow: false,
      nation: false,
      food: false,
      address: false,
      isShow: 'none'
    }
  },

  beforeMount() {
    self = this;
  },

  methods: {
    navOver: function(index) {
      if(index == 7) {
        self.nation = true;
      }else if(index == 2) {
        self.food = true;
      }else if(index == 8) {
        self.address = true;
      }
      self.index = index;
    },
    
    navOut: function(index) {
      if(index == 7) {
        self.index = index;
        self.address = false;
        self.food = false;
      }else if(index == 2) {
        self.index = index;
        self.food = false;
        self.address = false;
      } else if(index == 8) {
        self.index = index;
        self.nation = false;
        self.food = false;
      } else {
        self.index = 0;
        self.nation = false;
        self.food = false;
        self.address = false;
      }
    }
  }
}
</script>

<style>
@import '../../assets/css/Header/Header.css';
</style>
