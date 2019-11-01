<template>
  <div>
    <Header />
    <el-carousel trigger="click" arrow="never" height="341px">
      <el-carousel-item v-for="item in bannerArr" :key="item">
        <img :src="item" alt="" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
    <div class="supplier-industry-wrapper">
      <div class="supplier-industry">
        <div class="supplier-industry-top flex-sw">
          <div class="supplier-industry-top-word">热门行业</div>
          <div class="supplier-industry-top-btn flex-center">
            <img src="../../assets/images/btn_img.png" class="supplier-industry-top-btn-left" alt="">
            <span>我要入驻</span>
            <img src="../../assets/images/btn_img.png" class="supplier-industry-top-btn-right" alt="">
          </div>
        </div>
        <el-carousel trigger="click" height="688px">
          <el-carousel-item v-for="item in 3" :key="item">
            <div class="supplier-industry-goods-wrapper flex">
              <div class="supplier-industry-goods">
                <div class="supplier-industry-goods-img">
                  <img src="../../assets/images/industry_goods.png" alt="">
                </div>
                <div class="supplier-industry-goods-cont">
                  <div class="supplier-industry-goods-name">成衣行</div>
                  <div class="supplier-industry-goods-oper">鱼飞祥 / 珺博 / 古镇 / 九段烧 / 红叶/ 红光 / 红旗</div>
                </div>
              </div>
              <div class="supplier-industry-goods">
                <div class="supplier-industry-goods-img">
                  <img src="../../assets/images/industry_goods.png" alt="">
                </div>
                <div class="supplier-industry-goods-cont">
                  <div class="supplier-industry-goods-name">成衣行</div>
                  <div class="supplier-industry-goods-oper">鱼飞祥 / 珺博 / 古镇 / 九段烧 / 红叶/ 红光 / 红旗</div>
                </div>
              </div>
              <div class="supplier-industry-goods">
                <div class="supplier-industry-goods-img">
                  <img src="../../assets/images/industry_goods.png" alt="">
                </div>
                <div class="supplier-industry-goods-cont">
                  <div class="supplier-industry-goods-name">成衣行</div>
                  <div class="supplier-industry-goods-oper">鱼飞祥 / 珺博 / 古镇 / 九段烧 / 红叶/ 红光 / 红旗</div>
                </div>
              </div>
              <div class="supplier-industry-goods">
                <div class="supplier-industry-goods-img">
                  <img src="../../assets/images/industry_goods.png" alt="">
                </div>
                <div class="supplier-industry-goods-cont">
                  <div class="supplier-industry-goods-name">成衣行</div>
                  <div class="supplier-industry-goods-oper">鱼飞祥 / 珺博 / 古镇 / 九段烧 / 红叶/ 红光 / 红旗</div>
                </div>
              </div>
              <div class="supplier-industry-goods">
                <div class="supplier-industry-goods-img">
                  <img src="../../assets/images/industry_goods.png" alt="">
                </div>
                <div class="supplier-industry-goods-cont">
                  <div class="supplier-industry-goods-name">成衣行</div>
                  <div class="supplier-industry-goods-oper">鱼飞祥 / 珺博 / 古镇 / 九段烧 / 红叶/ 红光 / 红旗</div>
                </div>
              </div>
              <div class="supplier-industry-goods">
                <div class="supplier-industry-goods-img">
                  <img src="../../assets/images/industry_goods.png" alt="">
                </div>
                <div class="supplier-industry-goods-cont">
                  <div class="supplier-industry-goods-name">成衣行</div>
                  <div class="supplier-industry-goods-oper">鱼飞祥 / 珺博 / 古镇 / 九段烧 / 红叶/ 红光 / 红旗</div>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="supplier-leave-wrapper">
        <div class="supplier-leave">
          <a href="javaScript:;">
            <img src="../../assets/images/supplier_leave.jpg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="supplier-brand-wrapper">
      <div class="supplier-brand">
        <div class="supplier-brand-title">优质商品展示区</div>
        <div class="supplier-brand-sub-title">中国工匠城认证入驻企业信息完整展示区，<a href="javaScript:;">我要入驻</a></div>
        <div class="supplier-brand-content flex">
          <div class="supplier-brand-item" v-for="item in 10" :key="item">
            <div class="supplier-brand-item-img-wrapper">
              <div class="supplier-brand-item-img flex-center">
                <img src="../../assets/images/supplier_brand_item_img.png" alt="">
              </div>
            </div>
            <div class="supplier-brand-item-logo flex-center">
              <img src="../../assets/images/supplier_brand_item_logo.png" alt="">
            </div>
            <div class="supplier-brand-item-name">景德镇红叶陶瓷股份有限公司</div>
          </div>
        </div>
      </div>
    </div>
    <div class="supplier-pick-week-wrapper">
      <div class="supplier-pick-week">
        <div class="supplier-industry-top flex-sw">
          <div class="supplier-industry-top-word">推荐产品</div>
          <div class="supplier-industry-top-btn flex-center">
            <img src="../../assets/images/btn_img.png" class="supplier-industry-top-btn-left" alt="">
            <span>了解更多</span>
            <img src="../../assets/images/btn_img.png" class="supplier-industry-top-btn-right" alt="">
          </div>
        </div>
        <div class="supplier-pick-week-content flex">
          <div class="supplier-pick-week-left-wrapper">
            <div class="supplier-pick-week-left">
              <div class="supplier-icon">
                <img src="../../assets/images/pick.png" alt="">
              </div>
              <div class="supplier-pick-week-item flex">
                <div class="supplier-pick-week-item-img">
                  <img src="../../assets/images/pick_week_item_img.png" alt="">
                </div>
                <div class="supplier-pick-week-item-word">
                  <div class="supplier-pick-week-item-name">
                    <span>来自</span>
                    <a href="javaScript:;">红叶景德镇股份有限公司</a>
                  </div>
                  <div class="supplier-pick-week-item-title">景德镇中式碗碟盘套装 釉中彩青花白瓷26/62头古典园林</div>
                  <div class="supplier-pick-week-item-cont">红叶细白瓷取材于景德镇优质高领土，拥有专业的制作机构，经过72道工序的精选，加工成独特配方的瓷泥，在经过现代高科技制瓷工艺制作而成，并对其经常二次烧成，细白瓷成品比较骨瓷会相对厚实而且质地非常好，出品相当难，所以成本和价格偏高，骨瓷相比细白瓷来说要求没有那么高，但是成品效果也是不错，所以诗人比较推崇，其实就是不了解真实情况而产生的误解</div>
                </div>
              </div>
              <div class="supplier-pick-week-item flex">
                <div class="supplier-pick-week-item-img">
                  <img src="../../assets/images/pick_week_item_img.png" alt="">
                </div>
                <div class="supplier-pick-week-item-word">
                  <div class="supplier-pick-week-item-name">
                    <span>来自</span>
                    <a href="javaScript:;">红叶景德镇股份有限公司</a>
                  </div>
                  <div class="supplier-pick-week-item-title">景德镇中式碗碟盘套装 釉中彩青花白瓷26/62头古典园林</div>
                  <div class="supplier-pick-week-item-cont">红叶细白瓷取材于景德镇优质高领土，拥有专业的制作机构，经过72道工序的精选，加工成独特配方的瓷泥，在经过现代高科技制瓷工艺制作而成，并对其经常二次烧成，细白瓷成品比较骨瓷会相对厚实而且质地非常好，出品相当难，所以成本和价格偏高，骨瓷相比细白瓷来说要求没有那么高，但是成品效果也是不错，所以诗人比较推崇，其实就是不了解真实情况而产生的误解</div>
                </div>
              </div>
              <div class="supplier-pick-week-item flex">
                <div class="supplier-pick-week-item-img">
                  <img src="../../assets/images/pick_week_item_img.png" alt="">
                </div>
                <div class="supplier-pick-week-item-word">
                  <div class="supplier-pick-week-item-name">
                    <span>来自</span>
                    <a href="javaScript:;">红叶景德镇股份有限公司</a>
                  </div>
                  <div class="supplier-pick-week-item-title">景德镇中式碗碟盘套装 釉中彩青花白瓷26/62头古典园林</div>
                  <div class="supplier-pick-week-item-cont">红叶细白瓷取材于景德镇优质高领土，拥有专业的制作机构，经过72道工序的精选，加工成独特配方的瓷泥，在经过现代高科技制瓷工艺制作而成，并对其经常二次烧成，细白瓷成品比较骨瓷会相对厚实而且质地非常好，出品相当难，所以成本和价格偏高，骨瓷相比细白瓷来说要求没有那么高，但是成品效果也是不错，所以诗人比较推崇，其实就是不了解真实情况而产生的误解</div>
                </div>
              </div>
              <div class="supplier-pick-week-item flex">
                <div class="supplier-pick-week-item-img">
                  <img src="../../assets/images/pick_week_item_img.png" alt="">
                </div>
                <div class="supplier-pick-week-item-word">
                  <div class="supplier-pick-week-item-name">
                    <span>来自</span>
                    <a href="javaScript:;">红叶景德镇股份有限公司</a>
                  </div>
                  <div class="supplier-pick-week-item-title">景德镇中式碗碟盘套装 釉中彩青花白瓷26/62头古典园林</div>
                  <div class="supplier-pick-week-item-cont">红叶细白瓷取材于景德镇优质高领土，拥有专业的制作机构，经过72道工序的精选，加工成独特配方的瓷泥，在经过现代高科技制瓷工艺制作而成，并对其经常二次烧成，细白瓷成品比较骨瓷会相对厚实而且质地非常好，出品相当难，所以成本和价格偏高，骨瓷相比细白瓷来说要求没有那么高，但是成品效果也是不错，所以诗人比较推崇，其实就是不了解真实情况而产生的误解</div>
                </div>
              </div>
            </div>
          </div>
          <div class="supplier-pick-week-right">
            <div class="supplier-pick-week-right-item">
              <span>用陶瓷与世界精彩对话</span>
            </div>
            <div class="supplier-pick-week-right-item">
              <span>用陶瓷与世界精彩对话</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="supplier-address-wrapper">
      <div class="supplier-address">
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
      </div>
    </div>
    <div class="supplier-address-img">
      <img src="../../assets/images/address_bot.png" alt="">
    </div>


    <sidebar />
    <Foot />
  </div>
</template>

<script>
var self;
import Header from "@/components/header/header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Foot from "@/components/foot/Foot";
export default {
  data() {
    return{
      bannerArr: [require('../../assets/images/supplier_banner.jpg')],
      lookupIndex: 1,
    }
  },

  beforeMount(){
    self = this;
  },

  components: {
    Sidebar,
    Foot,
    Header,
  },

  methods: {
    checkLookUp: function(index) {
      self.lookupIndex = index;
    },
  }
}
</script>

<style>
@import '../../assets/css/Supplier/Supplier.css';
</style>
