<template>
  <div class="foot">
    <div class="foot-content">
      <el-row :gutter="30">
        <el-col :span="7">
          <dl>
            <dt class="flex-y-center"><span></span>快速链接</dt>
            <dd class="flex">
              <ul>
                <li><a href="#">企业名录</a></li>
                <li><a href="#">商品价值</a></li>
                <li><a href="#">商业合作</a></li>
                <li><a href="#">人物查询</a></li>
                <li><a href="#">名词解释</a></li>
              </ul>
              <ul>
                <li><a href="#">入驻流程</a></li>
                <li><a href="#">策划服务</a></li>
                <li><a href="#">商业透支</a></li>
              </ul>
              <ul>
                <li><a href="#">数据服务</a></li>
                <li><a href="#">意见反馈</a></li>
              </ul>
            </dd>
          </dl>
        </el-col>
        <el-col :span="5">
          <dl>
            <dt class="flex-y-center"><span></span>联系我们</dt>
            <dd class="flex">
              <ul>
                <li><a href="#">工匠客户:400-888-6866</a></li>
                <li><a href="#">工作时间:周一至周五9:00-18:00</a></li>
                <li><a href="#">在线客户:点击咨询</a></li>
                <li><a href="#">商务合作:bdserv@zggjc.com</a></li>
                <li><a href="#">官方论坛:bbs.zggjc.com</a></li>
              </ul>
            </dd>
          </dl>
        </el-col>
        <el-col :span="3">
          <dl>
            <dt class="flex-y-center"><span></span>关于大国工匠城</dt>
            <dd class="flex">
              <ul>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">用户协议</a></li>
                <li><a href="#">隐私声明</a></li>
                <li><a href="#">版权政策</a></li>
                <li><a href="#">加入我们</a></li>
              </ul>
            </dd>
          </dl>
        </el-col>
        <el-col :span="3">
          <dl>
            <dt class="flex-y-center"><span></span>微信公众号</dt>
            <dd>
              <img src="" alt="" width="100" height="100">
            </dd>
          </dl>
        </el-col>
        <el-col :span="3">
          <dl>
            <dt class="flex-y-center"><span></span>小程序</dt>
            <dd>
              <img src="" alt="" width="100" height="100">
            </dd>
          </dl>
        </el-col>
        <el-col :span="3">
          <dl>
            <dt class="flex-y-center"><span></span>APP下载</dt>
            <dd>
              <img src="" alt="" width="100" height="100">
            </dd>
          </dl>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content text-right">
            <a href="#">
              <el-button size="small">投诉</el-button>
            </a>
            <a href="#">
              <el-button size="small">在线咨询</el-button>
            </a>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="foot-links">
            <p>
              数据来源:
              <a href="#">国家知识产权局</a>&nbsp;&nbsp;
              <a href="#">中国艺术馆</a>&nbsp;&nbsp;
              <a href="#">中国传统文化传播协会</a>&nbsp;&nbsp;
              <a href="#">故宫博物馆</a>
            </p>
            <p>
              友情链接:
              <a href="#">阿里巴巴</a>&nbsp;&nbsp;
              <a href="#">腾讯网络</a>&nbsp;&nbsp;
              <a href="#">百度</a>&nbsp;&nbsp;
              <a href="#">京东商城</a>
            </p>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="foot-info text-center flex-x-center">
            <a href="#" class="flex-y-center">
              <img src="../../assets/images/99e5241c6ce65789fdbc3cd0a70d084.png" height="20" width="20"/>&nbsp;&nbsp;
              京公安网备 xxxxxxxxxxx号</a>
            <a href="#" class="flex-y-center">
              <img src="../../assets/images/45a347a365b8551e80a7f43b01c7f54.png" height="24" width="64"/>&nbsp;&nbsp;
            </a>
            <a href="#" class="flex-y-center">
              <img src="../../assets/images/417be72d91b4f4b4f6586dfd3445874.png" height="26" width="40"/>&nbsp;&nbsp;
              营业执照
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Foot"
    }
</script>

<style scoped lang="scss">
  @import "../../assets/css/Foot/Foot.scss";
</style>
