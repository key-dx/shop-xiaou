<template>
  <div class="warp">
    <header class="header clearfix">
      <h1>
        <a  @click="$router.go(-1)"
          ><i class="fl iconfont icon-jiantou-left-copy-copy"></i
        ></a>
        <span>确认订单</span>
      </h1>
    </header>
    <div class="order-main">
      <div class="order-address">
        <h1>莎莎 15231191818</h1>
        <p>北京 朝阳区 三环到四环之间 京枕润业一区一号楼102</p>
        <i class="iconfont icon-jiantou-right-copy-copy"></i>
      </div>
      <div class="order-pro">
        <ul>
          <li>
            <a href="javascript:void(0)">
              <img src="/images/car-shop1.png" alt="" />
              <div class="main-box">
                <p>富昌海带丝200g福建特产海鲜海产干货昆布凉拌蔬菜煲汤火锅</p>
                <p>产品1</p>
                <p class="ps">该商品一经拆封不支持7天无理由退款</p>
              </div>
              <span class="price">&yen;16.90</span>
              <span class="num">x1</span>
              <div class="peisong clearfix">
                <strong class="fl">配送方式</strong>
                <strong class="fr">快递 包邮</strong>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="/images/car-shop1.png" alt="" />
              <div class="main-box">
                <p>富昌海带丝200g福建特产海鲜海产干货昆布凉拌蔬菜煲汤火锅</p>
                <p>产品1</p>
                <p class="ps">该商品一经拆封不支持7天无理由退款</p>
              </div>
              <span class="price">&yen;588.00</span>
              <span class="num">x1</span>
              <div class="peisong clearfix">
                <strong class="fl">配送方式</strong>
                <strong class="fr">快递 包邮</strong>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="coupon clearfix">
        <div class="fl">
          <span>券</span>
          <strong>优惠券</strong>
        </div>
        <div class="fr">
          <b>无可用</b>
          <i class="iconfont icon-jiantou-right-copy-copy"></i>
        </div>
      </div>
      <div class="invoice clearfix">
        <div class="fl">
          <strong>开具发票</strong>
        </div>
        <div class="fr">
          <b>本次不开具发票</b>
          <i class="iconfont icon-jiantou-right-copy-copy"></i>
        </div>
      </div>
      <div class="total clearfix">
        <div class="fl">
          <strong>商品金额</strong>
        </div>
        <div class="fr">
          <b>&yen;640.90</b>
        </div>
      </div>
    </div>
    <div class="footer-js clearfix">
      <div class="fl clearfix">
        <span class="fr">
          <strong>共2件,</strong>
          合计:
          <b>&yen;604.90</b>
        </span>
      </div>
      <div class="fr">
        <p>提交订单</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

body,
html,
.warp {
  height: 100%;
}
.warp .header span {
  font-weight: bold;
}
.warp .order-main {
  width: 7.5rem;
  padding: 0.22rem 0.18rem 1.6rem 0.18rem;
  box-sizing: border-box;
  background-color: #f8f8f8;
  height: calc(100% - 1.26rem - 0.88rem);
  overflow: hidden;
  overflow-y: scroll;
}
.warp .order-main .order-address {
  position: relative;
  padding: 0.4rem 0.2rem;
  background-color: #ffffff;
  margin-bottom: 0.2rem;
  background-image: url(/images/order-bg.png);
  background-repeat: repeat-x;
  background-position: bottom;
}
.warp .order-main .order-address h1 {
  font-weight: bold;
  margin-bottom: 0.2rem;
  color: #000;
  font-size: 0.26rem;
}
.warp .order-main .order-address p {
  width: 94%;
  color: #525252;
  font-size: 0.2rem;
}
.warp .order-main .order-address i {
  color: #525252;
  font-size: 0.3rem;
  position: absolute;
  top: 0.65rem;
  right: 0.2rem;
}
.warp .order-main .order-pro li {
  position: relative;
  padding: 0.3rem;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 0.25rem;
  border-radius: 0.1rem;
}
.warp .order-main .order-pro li img {
  width: 1.6rem;
  height: 1.6rem;
}
.warp .order-main .order-pro li .main-box {
  display: inline-block;
  width: 3.9rem;
  vertical-align: top;
  margin: 0 0.2rem 0 0.15rem;
}
.warp .order-main .order-pro li .main-box p {
  font-size: 0.24rem;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 私有弹性盒 （摆放内部盒子的方式） */
  display: -webkit-box;
  /* 行数是2  */
  -webkit-line-clamp: 2;
  /* 内容的排放方向: vertical垂直 */
  -webkit-box-orient: vertical;
}
.warp .order-main .order-pro li .main-box p:nth-child(2) {
  margin: 0.2rem 0;
  font-size: 0.2rem;
  color: #a0a0a0;
}
.warp .order-main .order-pro li .main-box p.ps {
  margin: 0.15rem 0 0.35rem;
  font-size: 0.18rem;
  color: #f26d12;
  font-weight: bold;
}
.warp .order-main .order-pro li .price {
  position: absolute;
  top: 0.32rem;
  right: 0.3rem;
  text-align: center;
  font-size: 0.22rem;
}
.warp .order-main .order-pro li .num {
  position: absolute;
  top: 0.7rem;
  right: 0.3rem;
  color: #a0a0a0;
  font-size: 0.18rem;
}
.warp .order-main .order-pro li .peisong {
  font-size: 0.3rem;
  line-height: 0.8rem;
}
.warp .order-main .coupon {
  height: 0.9rem;
  line-height: 0.9rem;
  padding: 0 0.2rem;
  font-size: 0.24rem;
  background-color: #fff;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
}
.warp .order-main .coupon span {
  display: inline-block;
  width: 0.3rem;
  line-height: 0.3rem;
  height: 0.3rem;
  text-align: center;
  font-size: 0.22rem;
  vertical-align: middle;
  background-color: #ffe8e6;
  color: #f26d12;
  border: 1px solid #f26d12;
  border-radius: 0.05rem;
}
.warp .order-main .coupon b {
  color: #f26d12;
}
.warp .order-main .invoice {
  height: 0.9rem;
  line-height: 0.9rem;
  padding: 0 0.2rem;
  font-size: 0.24rem;
  border-bottom-left-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
  background-color: #fff;
}
.warp .order-main .total {
  margin-top: 0.2rem;
  height: 0.9rem;
  line-height: 0.9rem;
  padding: 0 0.2rem;
  font-size: 0.24rem;
  background-color: #fff;
  border-radius: 0.1rem;
}
.warp .order-main .total b {
  color: #f26d12;
}
.warp .footer-js {
  position: fixed;
  bottom: 0;
  left: center;
  background-color: #fff;
  width: 7.51rem;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.3rem;
}
.warp .footer-js div.fl {
  padding-left: 0.3rem;
  padding-right: 0.2rem;
  width: 4.8rem;
}
.warp .footer-js div.fl strong {
  color: #a6a6a6;
  font-size: 0.28rem;
}
.warp .footer-js div.fl b {
  color: #f26d12;
  font-size: 0.32rem;
}
.warp .footer-js div.fr {
  background-color: #f26d12;
  color: #fff;
  text-align: center;
  width: 2.2rem;
  height: 1.25rem;
}

</style>
