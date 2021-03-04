<template>
  <div class="warp">
    <header class="header clearfix">
      <h1>
        <a href="javascript:void(0)" @click="$router.go(-1)"
          ><i class="fl iconfont icon-jiantou-left-copy-copy"></i
        ></a>
        <span>商品详情</span>
        <a href="javascript:void(0)"
          ><i class="iconfont icon-yuandian fr"></i
        ></a>
      </h1>
    </header>

    <div class="pro-header">
      <img :src="info.img" alt="" />
      <div>
        <p>{{ info.goodsname }}</p>
        <span>&yen;{{ info.price }}<b>(此价格不与套装优惠同时享受)</b></span>
      </div>
    </div>
    <div class="space"></div>
    <div class="pro-norms">
      <div>
        <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
        <b><strong>满减</strong>满2件9折; 3件8折</b>
        <i class="iconfont icon-jiantou-copy-copy"></i>
      </div>
      <div>
        <span>购买数量</span>
        <del class="clearfix">
          <em @click="edit()">-</em>
          <em>{{ num }}</em>
          <em @click="add()">+</em>
        </del>
      </div>
      <div>
        <span>商品属性</span>
        <i class="iconfont icon-jiantou-copy-copy"></i>
        <div>
          <span>{{ info.specsname }}</span>
          <b
            v-for="(item, index) of info.specsattr"
            :class="{ active: activeindex === index }"
            :key="index"
            @click="setActive(index)"
            >{{ item }}</b
          >
        </div>
      </div>

      <div></div>
      <div></div>
    </div>
    <div class="pro-detail-img">
      <h2>商品详情</h2>
      <h2>
        <div v-html="info.description"></div>
      </h2>
    </div>
    <div class="space"></div>
    <div class="assess">
      <h2>商品评价</h2>
      <div>
        <p>#123 奥术大师</p>
        <p>效果很好,物流到位,下次继续来！</p>
        <img src="/images/sj.jpg" alt="" />
        <img src="/images/sj.webp" alt="" />
        <img src="/images/sj3.jpg" alt="" />
        <p>2020-10-10</p>
      </div>
      <div class="clearfix">
        <span class="fl">共1000+加条评论</span>
        <span class="fr"
          >查看更多 <i class="iconfont icon-jiantou-right-copy-copy"></i
        ></span>
      </div>
    </div>
    <div class="footer">
      <div class="fl" @click="$router.push('/shopcar')">
        <i class="iconfont icon-gouwuche"></i>
        <i class="num">{{ carNum }}</i>
        <p>购物车</p>
      </div>
      <div class="fl" @click="addcar()">加入购物车</div>
      <div class="fl">立即购买</div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      info: {},
      num: 1,
      carNum: 0,
      activeindex: 0,
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.axios
        .get("/api/getgoodsinfo?id=" + this.$route.params.id)
        .then((res) => {
          if (res.data.code === 200) {
            this.info = res.data.list[0];
            this.info.specsattr = this.info.specsattr.split(",");
          }
        });
    }
    this.setcarnum();
  },
  methods: {
    setcarnum() {
      if (store.state.userinfo) {
        this.axios
          .get("/api/cartlist?uid=" + store.state.userinfo.uid, {
            headers: {
              authorization: store.state.userinfo.token,
            },
          })
          .then((res) => {
            if (res.data.code === 200) {
              this.carNum = res.data.list.length;
            }
          });
      } else {
        this.carNum = 0;
      }
    },
    setActive(index) {
      this.activeindex = index;
    },
    add() {
      if (this.num < 99) {
        this.num++;
      }
    },
    edit() {
      if (this.num > 1) {
        this.num--;
      }
    },
    addcar() {
      if (store.state.userinfo == null) {
        this.$router.push("/login");
      } else {
        this.axios({
          method: "post",
          url: "/api/cartadd",
          data: {
            uid: store.state.userinfo.uid,
            goodsid: this.info.id,
            num: this.num,
          },
          headers: {
            authorization: store.state.userinfo.token,
          },
        }).then((res) => {
          if (res.data.code === 200) {
            this.$message(res.data.msg);
            this.setcarnum();
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.warp .pro-header {
  width: 7.5rem;
}
.warp .pro-header img {
  width: 7.5rem;
  height: 7.5rem;
}
.warp .pro-header div {
  padding: 0.3rem 0.4rem 0.3rem 0.25rem;
}
.warp .pro-header div p {
  font-size: 0.3rem;
}
.warp .pro-header div span {
  display: block;
  margin-top: 0.2rem;
  font-size: 0.26rem;
  color: #f26d12;
}
.warp .pro-header div b {
  font-size: 0.22rem;
  color: #a9a9a9;
  margin-left: 0.2rem;
}
.warp .pro-norms {
  width: 7.5rem;
  padding: 0 0.25rem;
}
.warp .pro-norms div {
  width: 7rem;
  font-size: 0.22rem;
}
.warp .pro-norms div span {
  display: inline-block;
  width: 1.3rem;
  height: 1rem;
  line-height: 1rem;
  margin-right: 0.2rem;
}
.warp .pro-norms div i {
  float: right;
  margin-top: 0.25rem;
  font-size: 0.28rem;
  color: #a9a9a9;
}
.warp .pro-norms div strong {
  display: inline-block;
  width: 0.8rem;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-right: 0.2rem;
  font-size: 0.18rem;
  text-align: center;
  color: #e43a3d;
  border: 1px solid #e43a3d;
  border-radius: 0.05rem;
}
.warp .pro-norms div del {
  display: inline-block;
  vertical-align: middle;
}
.warp .pro-norms div em {
  float: left;
  height: 0.6rem;
  padding: 0 0.25rem;
  line-height: 0.6rem;
  border: 1px solid #797979;
}
.warp .pro-norms div em:first-of-type {
  border-top-left-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
}
.warp .pro-norms div em:last-of-type {
  border-top-right-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
}
.warp .pro-norms div div span {
  color: #a9a9a9;
}
.warp .pro-norms div div b {
  display: inline-block;
  padding: 0.15rem 0.2rem;
  margin-right: 0.02rem;
  background-color: #a9a9a9;

  border-radius: 0.1rem;
}
.warp .pro-norms div div b.active {
  background-color: #e43a3d;
}
.warp .pro-detail-img h2 {
  font-size: 0.3rem;
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.25rem;
}
.warp .pro-detail-img img {
  width: 7.5rem;
}
.warp .assess {
  margin-bottom: 1.15rem;
  width: 7.5rem;
  padding: 0 0.25rem;
  box-sizing: border-box;
}
.warp .assess h2 {
  font-size: 0.3rem;
  height: 1rem;
  line-height: 1rem;
}
.warp .assess div p {
  font-size: 0.2rem;
  color: #999999;
}
.warp .assess div p:nth-child(2) {
  margin: 0.2rem 0;
  font-size: 0.26rem;
  color: #454545;
}
.warp .assess div img {
  margin: 0 0.2rem 0.2rem 0;
  width: 1.6rem;
  height: 1.55rem;
}
.warp .assess div span {
  font-size: 0.24rem;
  color: #999999;
  height: 1rem;
  line-height: 1rem;
}
.warp .assess div span i {
  font-size: 0.24rem;
}
.warp .assess div:first-of-type {
  padding: 0.2rem 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.warp .footer {
  position: fixed;
  bottom: 0;
  left: center;
  background-color: #fff;
  border-top: 1px solid #b0b0b0;
  width: 7.51rem;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.3rem;
}
.warp .footer div:nth-of-type(1) {
  text-align: center;
  width: calc(100% - 3.2rem - 2.9rem);
  position: relative;
}
.warp .footer div:nth-of-type(1) i {
  font-size: 0.35rem;
  margin-top: -0.2rem;
}
.warp .footer div:nth-of-type(1) i.num {
  position: absolute;
  top: 35%;
  left: 52%;
  font-size: 0.18rem;
  display: block;
  width: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #fff;
  background-color: #e5484a;
  border-radius: 0.3rem;
}
.warp .footer div:nth-of-type(1) p {
  font-size: 0.16rem;
  margin-top: -0.95rem;
}
.warp .footer div:nth-of-type(2) {
  text-align: center;
  width: 3.2rem;
  color: #fff;
  background-color: #f26b11;
}
.warp .footer div:nth-of-type(3) {
  text-align: center;
  width: 2.9rem;
  color: #fff;
  background-color: #e43a3d;
}
</style>
