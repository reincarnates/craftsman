<template>
  <div>
    <div class="corporate-head-wrapper">
      <div class="corporate-head flex">
        <div class="corporate-head-left flex-center">
          <img src="../../assets/images/corporate_head_logo.jpg" alt="">
        </div>
        <div class="corporate-head-nav-wrapper flex-center">
          <div class="corporate-head-nav flex-y-center">
            <div class="corporate-head-nav-item flex-center">首页</div>
            <div class="corporate-head-nav-item flex-center">行业</div>
            <div class="corporate-head-nav-item flex-center">民族</div>
            <div class="corporate-head-nav-item flex-center">地区</div>
            <div class="corporate-head-nav-item flex-center">品牌</div>
          </div>
        </div>
        <div class="corporate-head-right-wrapper flex-y-center">
          <div class="corporate-head-right"></div>
        </div>
      </div>
    </div>
    <el-carousel trigger="click" height="627px">
      <el-carousel-item v-for="item in 1" :key="item">
        <img src="../../assets/images/characteristic_banner.jpg" width="100%" height="100%" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="corporate-resume-wrapper">
      <div class="corporate-resume flex">
        <div class="corporate-resume-left flex-center">
          <img src="../../assets/images/corporate_img.png" alt="">
          <div class="corporate-resume-left-word">公司简介</div>
        </div>
        <div class="corporate-resume-center">
          <p>成长于闻名世界的瓷都景德镇的诚德轩瓷业，致力于景德镇传统制瓷工艺的传承与发展，集成了景德镇最具潜力的工艺师和画师，打造出独具手工艺术魅力的顶级茶具产品，诚德轩这个顶级手绘茶具品牌也随之驰名中外。</p>
          <p style="margin-top: 23px;">
            诚德轩瓷业位于风景秀丽的新都陶瓷园，其生产区域集合了传统制瓷工艺的各道工序，千年手工制瓷工艺一览无余，展现了景德镇博大精深的手工制瓷工艺和丰富的陶瓷底蕴，也是最为经典的传统手工制瓷工艺教科书。 多年来，诚德轩一直引领着景德镇陶瓷品牌建设之路，稳步推进着品牌推广和渠道扩张。怀中世界，壶底乾坤，诚德轩胸怀博大，志存高远，值得更多的期待和更永久的信赖。
          </p>
        </div>
        <div class="corporate-resume-right">
          <img src="../../assets/images/corporate_img2.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="corporate-best-wrapper">
      <div class="corporate-best-title flex-center">产 品 分 类</div>
      <div class="corporate-best flex">
        <div class="corporate-best-left">
          <img src="../../assets/images/corporate_img3.jpg" alt="">
        </div>
        <div class="corporate-best-right flex">
          <div class="corporate-best-item-img">
            <img src="../../assets/images/corporate_img4.jpg" alt="">
          </div>
          <div class="corporate-best-item-img">
            <img src="../../assets/images/corporate_img4.jpg" alt="">
          </div>
          <div class="corporate-best-item-img">
            <img src="../../assets/images/corporate_img4.jpg" alt="">
          </div>
          <div class="corporate-best-item-img">
            <img src="../../assets/images/corporate_img4.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="corporate-best-title flex-center" style="margin-top: 71px;">当 季 热 卖</div>
      <div class="corporate-best-goods flex">
        <div class="corporate-best-goods-item-wrapper" v-for="item in 12" :key="item">
          <a href="javaScript:;">
            <div class="corporate-best-goods-item flex-center">
              <img src="../../assets/images/corporate_goods.png" alt="">
            </div>
            <div class="corporate-best-goods-item-word">
              <div class="corporate-best-goods-item-word-name">景德镇青花瓷 · 陶瓷碗碟</div>
              <div class="corporate-best-goods-item-word-price">售价：￥1880</div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <Foot />
  </div>
</template>

<script>
import Foot from "@/components/foot/Foot";
export default {
  data() {
    return{}
  },

  components: {
    Foot
  }
}
</script>

<style>
@import '../../assets/css/Characteristic/Characteristic.css';
</style>
