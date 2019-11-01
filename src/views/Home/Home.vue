<template>
  <div class="Home">
    <!-- <Header /> -->
    <div class="home-head-wrapper">
      <el-carousel trigger="click" height="598px">
        <el-carousel-item v-for="item in bannerArr" :key="item">
          <img :src="item" alt="" style="width: 100%; height: 100%;">
        </el-carousel-item>
      </el-carousel>
      <div class="home-head">
        <div class="home-head-top flex-sw">
          <div class="home-head-logo flex-center">
            <img src="../../assets/images/logo.png" alt="">
          </div>
          <div class="home-head-right flex-y-center">
            <div class="home-head-item flex-center">
              <span>登录/注册</span>
            </div>
            <div
              class="home-head-item item-bg flex-center"
              :class="{ itemCur : index == 2 }"
              @mouseover="headHover(2)"
              @mouseout="headOut"
            >
              <span>合作通道</span>
              <transition name="el-zoom-in-top">
                <div v-if="show" class="content" @mouseover="headHover(2)" @mouseout="headOut">
                  <div class="triangle"></div>
                  <div class="block-content">
                    <a class="item" href="###" target="_blank">个人VIP</a>
                    <a class="item" href="###" target="_blank">企业套餐</a>
                  </div>
                </div>
              </transition>
            </div>
            <div class="home-head-item flex-center">
              <span>App下载</span>
            </div>
          </div>
        </div>
        <div class="fu-title">
          中国优质民族文化产品名录
        </div>
        <div class="head-search-wrapper">
          <div class="head-search">
            <div class="head-search-top flex">
              <div
                class="head-search-top-item"
                :class="{tabActive : searchIndex == 1}"
                @click="CheckSearch(1)"
              >产品</div>
              <div
                class="head-search-top-item"
                :class="{tabActive : searchIndex == 2}"
                @click="CheckSearch(2)"
              >56民族</div>
              <div
                class="head-search-top-item"
                :class="{tabActive : searchIndex == 3}"
                @click="CheckSearch(3)"
              >72行业</div>
              <div
                class="head-search-top-item"
                :class="{tabActive : searchIndex == 4}"
                @click="CheckSearch(4)"
              >国家非遗项目</div>
              <div
                class="head-search-top-item"
                :class="{tabActive : searchIndex == 5}"
                @click="CheckSearch(5)"
              >大国工匠</div>
            </div>
            <div class="head-search-input-wrapper flex">
              <div class="head-search-input">
                <input type="text" placeholder="搜索产品、产地和企业">
              </div>
              <div class="head-search-btn flex-center">
                <img src="../../assets/images/search.jpg" alt="">
                <span>搜索</span>
              </div>
            </div>
            <div class="head-search-industry flex">
              <div class="head-search-industry-left flex-center">热门行业</div>
              <div class="head-search-industry-list flex-y-center">
                <div class="head-search-industry-list-item">
                  <a href="###">成衣行</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">珠宝行</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">玉石行</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">丝绸行</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">铁器行</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">药肆行</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">竹木行</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">针线行</a>
                </div>
              </div>
            </div>
            <div class="head-search-industry flex" style="margin-top: 10px;">
              <div class="head-search-industry-left flex-center">热门搜索</div>
              <div class="head-search-industry-list flex-y-center">
                <div class="head-search-industry-list-item">
                  <a href="###">贵州茅台</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">山西汾酒</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">盘山柿子</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">云南白药</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">北京烤鸭</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">蒙古地毯</a>
                </div>
                <div class="head-search-industry-list-item">
                  <a href="###">景德瓷器</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-banner-wrapper">
      <div class="box" style="height: 165px">
        <div class="right">
          <div class="list-item l0"></div>
        </div>
        <div class="list">
          <div
            class="list-item l1"
            :class="{'cur' : index3 == 1, 'sib' : index3 != 1 && index3 !=''}"
            @mouseover="over(1)"
            @mouseout="out(1)"
          ></div>
          <div
            class="list-item l2"
            :class="{'cur' : index3 == 2, 'sib' : index3 != 2 && index3 !=''}"
            @mouseover="over(2)"
            @mouseout="out(2)"
          ></div>
          <div
            class="list-item l3"
            :class="{'cur' : index3 == 3, 'sib' : index3 != 3 && index3 !=''}"
            @mouseover="over(3)"
            @mouseout="out(3)"
          ></div>
          <div
            class="list-item l4"
            :class="{'cur' : index3 == 4, 'sib' : index3 != 4 && index3 !=''}"
            @mouseover="over(4)"
            @mouseout="out(4)"
          ></div>
          <div
            class="list-item l5"
            :class="{'cur' : index3 == 5, 'sib' : index3 != 5 && index3 !=''}"
            @mouseover="over(5)"
            @mouseout="out(5)"
          ></div>
        </div>
      </div>
    </div>
    <div class="home-brand-wrapper">
      <div class="home-brand">
        <div class="home-brand-title">优质商品展示区</div>
        <div class="home-brand-title2 mar-tm">
          中国工匠城认证入驻企业信息完整展示区，
          <a href="###">我要入驻</a>
        </div>
        <div class="home-brand-small-nav flex-center">
          <div class="home-brand-small-nav-all flex-center">全部</div>
          <div class="home-brand-small-nav-item flex-center">山西汾酒</div>
          <div class="home-brand-small-nav-item flex-center">珠宝行</div>
          <div class="home-brand-small-nav-item flex-center">北京烤鸭</div>
          <div class="home-brand-small-nav-item flex-center">云南白药</div>
          <div class="home-brand-small-nav-item flex-center">北京烤鸭</div>
        </div>
        <div class="home-brand-swiper-wrapper">
          <el-carousel trigger="click" :interval="5000" arrow="never" height="826px">
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="home-brand-swiper flex">
                <div class="home-brand-swiper-item">
                  <div class="home-brand-swiper-item-img">
                    <img src="../../assets/images/brand_img.png" alt="">
                  </div>
                  <div class="home-brand-swiper-item-name flex-center">景德镇青花碗碟</div>
                  <div class="home-brand-swiper-item-shop-wrapper flex">
                    <div class="home-brand-swiper-item-shop-img flex-center"></div>
                    <div class="home-brand-swiper-item-shop-word text-more-2">景德镇高端青花 瓷碗碟</div>
                  </div>
                  <div class="company-tag flex">
                    <div class="company-tag-item flex-center">景德镇</div>
                  </div>
                </div>
                <div class="home-brand-swiper-item">
                  <div class="home-brand-swiper-item-img">
                    <img src="../../assets/images/brand_img.png" alt="">
                  </div>
                  <div class="home-brand-swiper-item-name flex-center">景德镇青花碗碟</div>
                  <div class="home-brand-swiper-item-shop-wrapper flex">
                    <div class="home-brand-swiper-item-shop-img flex-center"></div>
                    <div class="home-brand-swiper-item-shop-word text-more-2">景德镇高端青花 瓷碗碟</div>
                  </div>
                  <div class="company-tag flex">
                    <div class="company-tag-item flex-center">景德镇</div>
                  </div>
                </div>
                <div class="home-brand-swiper-item">
                  <div class="home-brand-swiper-item-img">
                    <img src="../../assets/images/brand_img.png" alt="">
                  </div>
                  <div class="home-brand-swiper-item-name flex-center">景德镇青花碗碟</div>
                  <div class="home-brand-swiper-item-shop-wrapper flex">
                    <div class="home-brand-swiper-item-shop-img flex-center"></div>
                    <div class="home-brand-swiper-item-shop-word text-more-2">景德镇高端青花 瓷碗碟</div>
                  </div>
                  <div class="company-tag flex">
                    <div class="company-tag-item flex-center">景德镇</div>
                  </div>
                </div>
                <div class="home-brand-swiper-item">
                  <div class="home-brand-swiper-item-img">
                    <img src="../../assets/images/brand_img.png" alt="">
                  </div>
                  <div class="home-brand-swiper-item-name flex-center">景德镇青花碗碟</div>
                  <div class="home-brand-swiper-item-shop-wrapper flex">
                    <div class="home-brand-swiper-item-shop-img flex-center"></div>
                    <div class="home-brand-swiper-item-shop-word text-more-2">景德镇高端青花 瓷碗碟</div>
                  </div>
                  <div class="company-tag flex">
                    <div class="company-tag-item flex-center">景德镇</div>
                  </div>
                </div>
                <div class="home-brand-swiper-item">
                  <div class="home-brand-swiper-item-img">
                    <img src="../../assets/images/brand_img.png" alt="">
                  </div>
                  <div class="home-brand-swiper-item-name flex-center">景德镇青花碗碟</div>
                  <div class="home-brand-swiper-item-shop-wrapper flex">
                    <div class="home-brand-swiper-item-shop-img flex-center"></div>
                    <div class="home-brand-swiper-item-shop-word text-more-2">景德镇高端青花 瓷碗碟</div>
                  </div>
                  <div class="company-tag flex">
                    <div class="company-tag-item flex-center">景德镇</div>
                  </div>
                </div>
                <div class="home-brand-swiper-item">
                  <div class="home-brand-swiper-item-img">
                    <img src="../../assets/images/brand_img.png" alt="">
                  </div>
                  <div class="home-brand-swiper-item-name flex-center">景德镇青花碗碟</div>
                  <div class="home-brand-swiper-item-shop-wrapper flex">
                    <div class="home-brand-swiper-item-shop-img flex-center"></div>
                    <div class="home-brand-swiper-item-shop-word text-more-2">景德镇高端青花 瓷碗碟</div>
                  </div>
                  <div class="company-tag flex">
                    <div class="company-tag-item flex-center">景德镇</div>
                  </div>
                </div>
                <div class="home-brand-swiper-item">
                  <div class="home-brand-swiper-item-img">
                    <img src="../../assets/images/brand_img.png" alt="">
                  </div>
                  <div class="home-brand-swiper-item-name flex-center">景德镇青花碗碟</div>
                  <div class="home-brand-swiper-item-shop-wrapper flex">
                    <div class="home-brand-swiper-item-shop-img flex-center"></div>
                    <div class="home-brand-swiper-item-shop-word text-more-2">景德镇高端青花 瓷碗碟</div>
                  </div>
                  <div class="company-tag flex">
                    <div class="company-tag-item flex-center">景德镇</div>
                  </div>
                </div>
                <div class="home-brand-swiper-item">
                  <div class="home-brand-swiper-item-img">
                    <img src="../../assets/images/brand_img.png" alt="">
                  </div>
                  <div class="home-brand-swiper-item-name flex-center">景德镇青花碗碟</div>
                  <div class="home-brand-swiper-item-shop-wrapper flex">
                    <div class="home-brand-swiper-item-shop-img flex-center"></div>
                    <div class="home-brand-swiper-item-shop-word text-more-2">景德镇高端青花 瓷碗碟</div>
                  </div>
                  <div class="company-tag flex">
                    <div class="company-tag-item flex-center">景德镇</div>
                  </div>
                </div>
                <div class="home-brand-swiper-item">
                  <div class="home-brand-swiper-item-img">
                    <img src="../../assets/images/brand_img.png" alt="">
                  </div>
                  <div class="home-brand-swiper-item-name flex-center">景德镇青花碗碟</div>
                  <div class="home-brand-swiper-item-shop-wrapper flex">
                    <div class="home-brand-swiper-item-shop-img flex-center"></div>
                    <div class="home-brand-swiper-item-shop-word text-more-2">景德镇高端青花 瓷碗碟</div>
                  </div>
                  <div class="company-tag flex">
                    <div class="company-tag-item flex-center">景德镇</div>
                  </div>
                </div>
                <div class="home-brand-swiper-item">
                  <div class="home-brand-swiper-item-img">
                    <img src="../../assets/images/brand_img.png" alt="">
                  </div>
                  <div class="home-brand-swiper-item-name flex-center">景德镇青花碗碟</div>
                  <div class="home-brand-swiper-item-shop-wrapper flex">
                    <div class="home-brand-swiper-item-shop-img flex-center"></div>
                    <div class="home-brand-swiper-item-shop-word text-more-2">景德镇高端青花 瓷碗碟</div>
                  </div>
                  <div class="company-tag flex">
                    <div class="company-tag-item flex-center">景德镇</div>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="home-special-wrapper">
      <div class="home-special">
        <div class="home-special-title">特别策划第4期：古镇白瓷</div>
        <div class="home-special-small-title">中国民族工匠精神、传统手工艺文化传承</div>
        <div class="home-special-img-wrapper flex">
          <div class="home-special-img-one">
            <a href="###">
              <img src="../../assets/images/h_img.png" alt="">
            </a>
            <img src="../../assets/images/meihua.png" alt="" class="meihua">
          </div>
          <div class="home-special-img-two flex">
            <div class="home-special-img-two-item">
              <div class="home-special-img-two-item-title">文化传承</div>
              <p class="mar-tw">全平台中国文化传统</p>
              <p class="mar-tm">产品在线</p>
            </div>
            <div class="home-special-img-two-item">
              <div class="home-special-img-two-item-title">文化传承</div>
              <p class="mar-tw">全平台中国文化传统</p>
              <p class="mar-tm">产品在线</p>
            </div>
            <div class="home-special-img-two-item">
              <div class="home-special-img-two-item-title">文化传承</div>
              <p class="mar-tw">全平台中国文化传统</p>
              <p class="mar-tm">产品在线</p>
            </div>
          </div>
        </div>
        <div class="home-tradition-wrapper flex">
          <div class="home-tradition-left">
            <div class="">
              <div class="title">
                <h1>
                  <span class="tit-span">
                    <img src="../../assets/images/public-icon1.png">
                  </span>
                  <span class="s1">故宫</span>
                  <span>藏品</span>
                  <span class="tit-span">
                    <img src="../../assets/images/public-icon2.png">
                  </span>
                </h1>
              </div>
              <div class="num">
                <p>
                  <img
                    src="../../assets/images/indexicon1.png"
                    width="22"
                    alt=""
                  >
                </p>
                <b>1,862</b>
              </div>
              <div class="tip" style="cursor:pointer;">
                <span>藏品
                  <b></b>分类查询
                </span>
              </div>
              <a href="###" target="_blank" class="link">数字文物库
                <div
                  id="line0"
                  style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px;"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="140"
                    height="40"
                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); left: 0px;"
                  >
                    <desc
                      style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"
                    >Created with Raphaël</desc>
                    <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
                    <path
                      fill="none"
                      stroke="#ffffff"
                      d="M0,5L5,5L5,0L135,0L135,5L140,5L140,35L135,35L135,40L5,40L5,35L0,35L0,5"
                      stroke-width="2"
                      stroke-dasharray="1000 1000"
                      style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-width: 2; stroke-dashoffset: 0px; stroke-dasharray: 500, 500;"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div class="home-tradition-right flex">
            <div class="home-tradition-right-item">
              <img src="../../assets/images/tradition_img2.jpg" alt="">
            </div>
            <div class="home-tradition-right-item">
              <img src="../../assets/images/tradition_img2.jpg" alt="">
            </div>
            <div class="home-tradition-right-item">
              <img src="../../assets/images/tradition_img2.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="home-daguo flex-center">
          <img src="../../assets/images/daguo.png" alt="">
        </div>
        <el-carousel
          indicator-position="none"
          :interval="4000"
          type="card"
          height="591px"
          arrow="never"
        >
          <el-carousel-item v-for="item in 3" :key="item" style="border-radius: 12px;">
            <img src="../../assets/images/1.jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="home-lookup-wrapper">
      <div class="home-lookup">
        <div class="home-lookup-cont flex">
          <div class="home-lookup-list">
            <div
              class="home-lookup-list-item"
              :class="{ lookupCur : lookupIndex == 1 }"
              @click="checkLookUp(1)"
            >按区域查询</div>
            <div
              class="home-lookup-list-item"
              :class="{ lookupCur : lookupIndex == 2 }"
              @click="checkLookUp(2)"
            >按行业查询</div>
            <div
              class="home-lookup-list-item"
              :class="{ lookupCur : lookupIndex == 3 }"
              @click="checkLookUp(3)"
            >按民族查询</div>
            <div
              class="home-lookup-list-item"
              :class="{ lookupCur : lookupIndex == 4 }"
              @click="checkLookUp(4)"
            >热门人物</div>
          </div>
          <div class="home-lookup-content" v-if="lookupIndex == 1">
            <div class="home-lookup-check-wrapper flex-y-center">
              <div class="home-lookup-check-item">北京</div>
              <div class="home-lookup-check-item">天津</div>
              <div class="home-lookup-check-item">上海</div>
              <div class="home-lookup-check-item">重庆</div>
            </div>
            <div class="home-lookup-check-wrapper flex-y-center">
              <div class="home-lookup-check-item">河北</div>
              <div class="home-lookup-check-right flex-y-center">
                <div class="home-lookup-check-right-word">石家庄</div>
              </div>
            </div>
          </div>
          <div class="home-lookup-content" v-if="lookupIndex == 2">2</div>
          <div class="home-lookup-content" v-if="lookupIndex == 3">3</div>
          <div class="home-lookup-content" v-if="lookupIndex == 4">4</div>
        </div>
        <div class="box-intro-warp flex">
          <div class="box-intro">
            <div class="left icon-tab">
              <img src="../../assets/images/tic_one.png" alt="">
            </div>
            <div class="right">
              <div class="tab">十万优质民族品牌</div>
              <span class="sub-title">品牌官方联合入住,弘扬中华文化，
                <br>传承工匠精神
              </span>
            </div>
          </div>
          <div class="box-intro">
            <div class="left icon-tab">
              <img src="../../assets/images/tic_two.png" alt="">
            </div>
            <div class="right">
              <div class="tab">七十二行业大师</div>
              <span class="sub-title">来自各个传统行业的顶级大师，
                <br>讲述工匠人传奇故事
              </span>
            </div>
          </div>
          <div class="box-intro">
            <div class="left icon-tab">
              <img src="../../assets/images/tic_three.png" alt="">
            </div>
            <div class="right">
              <div class="tab">权威来源</div>
              <span class="sub-title">数据与国家权威网站同步，
                <br>实时更新
              </span>
            </div>
          </div>
          <div class="box-intro">
            <div class="left icon-tab">
              <img src="../../assets/images/tic_four.png" alt="">
            </div>
            <div class="right">
              <div class="tab">全量数据</div>
              <span class="sub-title">归集整理大量历史数据，全平台
                <br>搜集各地准确传统特产和传承文化
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="el-zoom-in-top">
      <Nav v-if="isNav" />
    </transition>
    <div class="nav-bottom-wrapper">
      <div class="nav-bottom flex-y-center">
        <div>弘扬民族文化</div>
        <div>传承工匠精神</div>
        <div>宣传匠心品牌</div>
        <div>打造传统产品平台</div>
      </div>
    </div>
    <transition name="el-fade-in">
      <sidebar v-if="isNav"/>
    </transition>
    <Foot/>
  </div>
</template>

<script>
var self, service;
import Foot from "@/components/foot/Foot";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/header/header";
import Nav from "@/components/nav/nav"
export default {
  name: "Home",
  data() {
    return {
      index: 0,
      index3: "",
      searchIndex: 1,
      lookupIndex: 1,
      isNav: false,
      show: false,
      bannerArr: [require('../../assets/images/head-bg.png'),require('../../assets/images/head-bg2.jpg')]
    };
  },
  components: {
    Foot,
    Sidebar,
    Header,
    Nav
  },
  created() {},
  beforeMount() {
    self = this;
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    headHover: function(index) {
      self.index = index;
      self.show = true;
    },

    headOut: function() {
      self.index = 0;
      self.show = false;
    },

    CheckSearch: function(index) {
      self.searchIndex = index;
    },

    checkLookUp: function(index) {
      self.lookupIndex = index;
    },

    handleScroll() {
      let nowTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (nowTop > 200) {
        self.isNav = true;
      } else {
        self.isNav = false;
      }
    },

    over: function(index) {
      this.index3 = index;
    },

    out: function() {
      this.index3 = "";
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/Home/Home.css";
</style>
