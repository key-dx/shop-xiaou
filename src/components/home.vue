<template>
  <div>
    <header class="header-index clearfix">
      <h1>小U商城</h1>
      <input type="text" placeholder="搜索您想要的商品" />
      <i class="iconfont icon-yuandian"></i>
    </header>
    <nav class="nav">
      <div class="nav-bar">
        <ul class="clearfix">
          <li class="active"><a href="javascript:void(0)">推荐</a></li>
          <li v-for="item of cateData" :key="item.id">
            <router-link to="/category">
              <a href="javascript:void(0)">{{ item.catename }}</a></router-link
            >
          </li>
        </ul>
      </div>
      <div class="nav-icon" @click="$router.push('/category')"></div>
    </nav>
    <div class="banner">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of bannerData" :key="item.id">
            <a href="javascript:void(0)"><img :src="item.img"/></a>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="nav-btn">
      <div>
        <a href="javascript:void(0)"
          ><img src="/images/index_images/icon_1.jpg" alt="" />
          <p>限时抢购</p>
        </a>
      </div>
      <div>
        <a href="javascript:void(0)"
          ><img src="/images/index_images/icon_2.jpg" alt="" />
          <p>时令生鲜</p>
        </a>
      </div>
      <div>
        <a href="javascript:void(0)"
          ><img src="/images/index_images/icon_3.jpg" alt="" />
          <p>家电数码</p>
        </a>
      </div>
      <div>
        <a href="javascript:void(0)"
          ><img src="/images/index_images/icon_4.jpg" alt="" />
          <p>商品分类</p>
        </a>
      </div>
    </div>
    <div class="space"></div>
    <div class="channel">
      <div class="channel-son">
        <h2>品牌上新</h2>
        <p>先领券 再购物</p>
        <div>
          <img src="/images/index_images/shop_2.png" alt="" />
          <img src="/images/index_images/shop_1.png" alt="" />
        </div>
      </div>
      <div class="channel-son">
        <h2>每日十件</h2>
        <p>低价优选,放心购买</p>
        <div>
          <img src="/images/index_images/shop_3.png" alt="" />
          <img src="/images/index_images/shop_4.png" alt="" />
        </div>
      </div>
    </div>
    <div class="space"></div>
    <div class="seckill clearfix">
      <div class="sk-header clearfix">
        <div class="fl">
          <del>限时秒杀</del>
          <span>01</span>
          <b>:</b>
          <span>59</span>
          <b>:</b>
          <span>25</span>
        </div>
        <div class="fr">
          <del>限时低价<i class="iconfont icon-gengduo1"></i></del>
        </div>
      </div>
      <div class="sk-pro">
        <ul>
          <li>
            <a href="javascript:void(0)">
              <img src="/images/index_images/pic01.png" alt="" />
              <p>KELME 卡尔美奥术大师</p>
              <span>&yen;97 <s>&yen;108</s></span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="/images/index_images/pic03.png" alt="" />
              <p>KELME 卡尔美奥术大师</p>
              <span>&yen;97 <s>&yen;108</s></span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="/images/index_images/pic02.png" alt="" />
              <p>KELME 卡尔美奥术大师</p>
              <span>&yen;97 <s>&yen;108</s></span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="/images/index_images/pic03.png" alt="" />
              <p>KELME 卡尔美奥术大师</p>
              <span>&yen;97 <s>&yen;108</s></span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="/images/index_images/pic01.png" alt="" />
              <p>KELME 卡尔美奥术大师</p>
              <span>&yen;97 <s>&yen;108</s></span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="/images/index_images/pic02.png" alt="" />
              <p>KELME 卡尔美奥术大师</p>
              <span>&yen;97 <s>&yen;108</s></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="space"></div>
    <div class="poster">
      <img src="/images/index_images/pic01.jpg" alt="" />
    </div>
    <div class="space"></div>
    <div class="pro">
      <div class="pro-nav">
        <ul>
          <li
            v-for="(item, index) of card"
            :key="index"
            :class="{ active: index == cardActive }"
            @click="setActive(index)"
          >
            <a href="javascript:void(0)">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="pro-list">
        <ul>
          <li
            class="clearfix"
            v-for="item of cardList[cardActive]"
            :key="item.id"
            @click="$router.push('/shopinfo/' + item.id)"
          >
            <a href="javascript:void(0)">
              <div class="fl">
                <img :src="item.img" alt="" />
              </div>
              <div class="fl">
                <p>{{ item.goodsname }}</p>
                <i>&yen;{{ item.price }}</i>
                <b>已售800件</b>
                <span>立即抢购</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerData: [],
      cateData: [],
      seckillData: null,
      card: ["热门推荐", "发现好货", "只看专场", "商品专场"],
      cardActive: 0,
      cardList: [],
    };
  },

  mounted() {
    // 页面挂载完成 获取数据
    // 分类
    this.axios.get("/api/getcate").then((res) => {
      if (res.data.code == 200) {
        this.cateData = res.data.list;
      }
    });
    // 轮播图
    this.axios.get("/api/getbanner").then((res) => {
      if (res.data.code == 200) {
        this.bannerData = res.data.list;
      }
    });
    // 秒杀
    this.axios.get("/api/getseckill").then((res) => {
      if (res.data.code == 200) {
        this.seckillData = res.data.list;
      }
    });

    //
    this.axios.get("/api/getindexgoods").then((res) => {
      if (res.data.code == 200) {
        this.cardList.push(res.data.list[0].content);
        this.cardList.push(res.data.list[1].content);
        this.cardList.push(res.data.list[2].content);
        this.cardList.push(res.data.list[1].content);
      }
    });
  },
  methods: {
    setActive(index) {
      this.cardActive = index;
    },
  },
};

$(function() {
  setTimeout(function() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: 5000,
      speed: 300,
      loop: true,
      autoplayDisableOnInteraction: false,
      observer: true,
      observerParents: true,
      // 分页器
      pagination: ".swiper-pagination",
      paginationClickable: true,
    });
  }, 100);
});
</script>

<style>
.warp .nav {
  padding-left: 0.1rem;
  font-size: 0.28rem;
  position: relative;
}
.warp .nav .nav-bar {
  margin-right: 0.8rem;
  overflow-x: scroll;
}
.warp .nav .nav-bar ul {
  width: 200%;
}
.warp .nav .nav-bar ul li {
  float: left;
  line-height: 0.76rem;
  margin: 0 0.2rem;
}
.warp .nav .nav-bar ul li a {
  color: #303030;
}
.warp .nav .nav-bar ul .active {
  border-bottom: 4px solid #f26d12;
}
.warp .nav .nav-bar ul .active a {
  color: #f26d12;
}
.warp .nav .nav-icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 0.8rem;
  height: 0.8rem;
  background: url("/images/index_images/shadow.png") no-repeat,
    url("/images/index_images/arrow.png") no-repeat center center;
  background-size: 0.04rem auto, 0.3rem auto;
}
.warp .banner .swiper-pagination .swiper-pagination-bullet {
  width: 0.2rem;
  height: 0.06rem;
  border-radius: 0;
  background: #000;
  opacity: 0.2;
}
.warp .banner .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #fff;
  opacity: 1;
}
.warp .banner img {
  width: 100%;
  height: 100%;
}
.warp .nav-btn {
  display: flex;
}
.warp .nav-btn div {
  padding: 0.3rem;
  flex: 1;
  text-align: center;
}
.warp .nav-btn div img {
  width: 0.6rem;
  height: 0.6rem;
}
.warp .nav-btn div p {
  color: #303030;
  margin-top: 0.2rem;
  font-size: 0.3rem;
}
.warp .channel {
  padding: 0.15rem 0.2rem 0.2rem;
  box-sizing: border-box;
  width: 7.5rem;
  height: 2.7rem;
  display: flex;
}
.warp .channel .channel-son {
  flex: 1;
}
.warp .channel .channel-son h2 {
  font-size: 0.3rem;
  color: #f26d12;
}
.warp .channel .channel-son:last-child h2 {
  color: #ff4488;
}
.warp .channel .channel-son p {
  font-size: 0.24rem;
  color: #a1a1a1;
  margin: 0.05rem 0;
}
.warp .channel .channel-son div {
  text-align: center;
}
.warp .channel .channel-son div img {
  margin-right: 0.2rem;
  width: 1.5rem;
  height: 1.5rem;
}
.warp .seckill {
  width: 7.5rem;
  padding: 0.15rem 0 0 0.2rem;
  box-sizing: border-box;
  overflow: hidden;
}
.warp .seckill .sk-header del {
  font-size: 0.3rem;
  margin-right: 0.2rem;
}
.warp .seckill .sk-header .fr del {
  color: #f26d12;
}
.warp .seckill .sk-header .fr del i {
  font-size: 0.3rem;
  vertical-align: middle;
}
.warp .seckill .sk-header span {
  font-size: 0.22rem;
  color: #fff;
  background-color: #666666;
  padding: 0.02rem 0.05rem;
  font-weight: bold;
  border-radius: 0.04rem;
}
.warp .seckill .sk-header b {
  margin: 0 0.04rem;
  font-weight: bold;
  font-size: 20px;
}
.warp .seckill .sk-pro {
  margin-top: 0.2rem;
  overflow-x: scroll;
}
.warp .seckill .sk-pro ul {
  display: flex;
}
.warp .seckill .sk-pro ul li {
  width: 1.9rem;
  margin-right: 20px;
  padding-bottom: 0.3rem;
}
.warp .seckill .sk-pro ul li img {
  width: 1.9rem;
  height: 1.9rem;
}
.warp .seckill .sk-pro ul li p {
  margin: 0.2rem 0 0.15rem;
  font-size: 0.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.warp .seckill .sk-pro ul li span {
  display: block;
  text-align: center;
  font-size: 0.2rem;
  color: #f26d12;
}
.warp .seckill .sk-pro ul li s {
  margin-left: 0.2rem;
  font-size: 0.14rem;
  color: #999;
}
.warp .poster img {
  width: 7.5rem;
}
.warp .pro {
  width: 7.5rem;
  padding: 0.27rem 0.2rem;
  box-sizing: border-box;
  margin-bottom: 1.8rem;
}
.warp .pro .pro-nav ul {
  display: flex;
}
.warp .pro .pro-nav ul li {
  width: 1.8rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  border: 1px solid #d3d3d3;
  border-right: none;
  font-size: 0.3rem;
}
.warp .pro .pro-nav ul li:last-of-type {
  border-right: 1px solid #d3d3d3;
}
.warp .pro .pro-nav ul li.active {
  background-color: #f26d12;
}
.warp .pro .pro-nav ul li.active a {
  color: #fff;
}
.warp .pro .pro-list li {
  margin-top: 0.3rem;
  padding: 0.3rem;
  box-sizing: border-box;
  height: 3rem;
  box-shadow: 0 0 0.1rem #ccc;
}
.warp .pro .pro-list li img {
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.4rem;
}
.warp .pro .pro-list li p {
  font-size: 0.3rem;
  margin-bottom: 0.2rem;
}
.warp .pro .pro-list li i {
  display: block;
  margin-bottom: 0.2rem;
  font-size: 0.28rem;
  color: #f26d12;
}
.warp .pro .pro-list li b {
  display: block;
  margin-bottom: 0.2rem;
  font-size: 0.24rem;
  color: #989898;
}
.warp .pro .pro-list li span {
  display: block;
  width: 1.65rem;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.28rem;
  color: #fff;
  background-color: #f26d12;
  border-radius: 0.04rem;
}
</style>
