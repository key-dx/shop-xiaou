<template>
  <div>
    <div class="user-info clearfix">
      <div class="fl user-i">
        <i class="iconfont icon-gerenyonghutouxiang"></i>
      </div>
      <div class="fl user-phone">
        <p>{{ username }}</p>
        <span>开通会员</span>
      </div>
    </div>
    <div class="user-order">
      <div>
        <div class="user-order-header clearfix ">
          <h1 class="fl">我的订单</h1>
          <span class="fr" @click="$router.push('/order')">
            查看全部订单
            <i class="iconfont icon-jiantou-right-copy-copy"></i>
          </span>
        </div>
        <div class="user-order-header-list">
          <ul>
            <li>
              <a href="javascript:void(0)">
                <i class="iconfont icon-daifukuan1"></i>
                <p>待付款</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="iconfont icon-daifahuo1"></i>
                <p>待发货</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="iconfont icon-dengdaishouhuo"></i>
                <p>待收货</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="iconfont icon-daipingjia"></i>
                <p>带评价</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="iconfont icon-tuihuo"></i>
                <p>退款/售后</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="space"></div>

      <div>
        <div class="user-order-header clearfix ">
          <h1 class="fl">联系我们</h1>
        </div>
        <div class="user-order-list clearfix ">
          <i class="iconfont icon-xinbaniconshangchuan- fl"></i>
          <h1 class="fl">我的客服</h1>
          <span class="fr">
            常见问题/在线客服
            <i class="iconfont icon-jiantou-right-copy-copy"></i>
          </span>
        </div>
        <div class="user-order-list clearfix ">
          <i class="iconfont icon-dianhua fl"></i>
          <h1 class="fl">客服专线</h1>
          <span class="fr">
            400-810-8818
            <i class="iconfont icon-jiantou-right-copy-copy"></i>
          </span>
        </div>
        <div class="user-order-list clearfix ">
          <i class="iconfont icon-yaoqingdaoshi fl"></i>
          <h1 class="fl">意见反馈</h1>
          <span class="fr">
            投诉/建议
            <i class="iconfont icon-jiantou-right-copy-copy"></i>
          </span>
        </div>
        <div class="user-order-list clearfix ">
          <i class="iconfont icon-guanyuwomen3 fl"></i>
          <h1 class="fl">关于我们</h1>
          <span class="fr">
            隐私协议
            <i class="iconfont icon-jiantou-right-copy-copy"></i>
          </span>
        </div>
        <div class="space"></div>

        <div class="user-order-list clearfix ">
          <i class="iconfont icon-shezhi3 fl"></i>
          <h1 class="fl">设置</h1>
        </div>
      </div>
    </div>
    <div class="liubai"></div>
    <div class="footer-nav">
      <ul>
        <li>
          <a href="index.html">
            <p><i class="iconfont icon-shouye1"></i></p>
            <p>首页</p>
          </a>
        </li>
        <li>
          <a href="search.html">
            <p><i class="iconfont icon-fenlei"></i></p>
            <p>搜索</p>
          </a>
        </li>
        <li>
          <a href="shopingcar.html">
            <p><i class="iconfont icon-gouwuche"></i></p>
            <p>购物车</p>
          </a>
        </li>
        <li class=" active">
          <a href="user.html">
            <p><i class="iconfont icon-wode"></i></p>
            <p>我的</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    this.username = store.state.userinfo.nickname;
  },
};
</script>

<style scoped>
.warp .user-info {
  width: 7.5rem;
  height: 1.65rem;
  padding: 0.35rem 0.3rem 0 0.3rem;
  background: url(/images/userbg.png) no-repeat;
}
.warp .user-info .user-i i {
  display: block;
  font-size: 0.5rem;
  width: 1.1rem;
  height: 1.1rem;
  line-height: 1.1rem;
  text-align: center;
  background-color: #ffb500;
  border: 4px solid #fff;
  color: #fff;
  margin-right: 0.2rem;
  border-radius: 50%;
}
.warp .user-info .user-phone {
  height: 1.1rem;
  line-height: 0.55rem;
  color: #fff;
  font-size: 0.24rem;
}
.warp .user-info .user-phone span {
  display: block;
  width: 1.5rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  background-color: #efe2bc;
  color: #000;
  border-radius: 0.2rem;
  font-size: 0.18rem;
}
.warp .user-order {
  width: 7.5rem;
  border-radius: 0.2rem;
  margin-top: -0.2rem;
}
.warp .user-order .user-order-header {
  height: 0.74rem;
  line-height: 0.74rem;
  border-bottom: 1px solid #f6f6f6;
  background-color: #fff;
  padding: 0 0.3rem;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  margin-bottom: -1px;
}
.warp .user-order .user-order-header h1 {
  font-weight: bold;
  color: #000;
  font-size: 0.28rem;
}
.warp .user-order .user-order-header span {
  font-size: 0.22rem;
  color: #c1c1c1;
}
.warp .user-order .user-order-header-list ul {
  width: 100%;
  padding: 0.4rem 0;
  font-size: 0.2rem;
  display: flex;
}
.warp .user-order .user-order-header-list ul li {
  text-align: center;
  flex: 1;
}
.warp .user-order .user-order-header-list ul li i {
  font-size: 0.4rem;
}
.warp .user-order .user-order-list {
  height: 0.74rem;
  line-height: 0.74rem;
  border-top: 2px solid #f6f6f6;
  background-color: #fff;
  padding: 0 0.3rem;
}
.warp .user-order .user-order-list i.fl {
  font-size: 0.35rem;
  margin-right: 0.2rem;
}
.warp .user-order .user-order-list h1 {
  color: #000;
  font-size: 0.28rem;
}
.warp .user-order .user-order-list span {
  font-size: 0.22rem;
  color: #c1c1c1;
}
.warp .liubai {
  width: 7.5rem;
  background-color: #f7f7f7;
  height: 7rem;
}
</style>
