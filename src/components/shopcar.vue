<template>
  <div class="warp">
    <header class="header clearfix">
      <h1>
        <a @click="$router.go(-1)"
          ><i class="fl iconfont icon-jiantou-left-copy-copy"></i
        ></a>
        <span>购物车</span>
        <a href="search.html"><i class="iconfont icon-sousuo fr"></i></a>
      </h1>
    </header>
    <div class="car-main">
      <div class="car-pro">
        <ul>
          <li v-for="(item, index) of cartlist" :key="item.id">
            <!-- <a href="javascript:void(0)"> -->
            <input
              type="checkbox"
              name=""
              class="first"
              ref="check"
              @click="check(index)"
            />

            <img :src="item.img" alt="" />
            <div class="main-box">
              <p>{{ item.goodsname }}</p>
              <p class="price">&yen;{{ item.price }}</p>
              <div class="clearfix">
                <span @click="edit(item.id, item.num)">-</span>
                <span>{{ item.num }}</span>
                <span @click="add(item.id, item.num)">+</span>
              </div>
            </div>
            <span class="yh">优惠券</span>
            <i class="iconfont icon-lajixiang" @click="del(item.id)"></i>
            <!-- </a> -->
          </li>
        </ul>
      </div>
      <div class="hint ">
        <p>温馨提示: 产品是否购买成功, 以最终下单为准, 请尽快结算</p>
      </div>
      <div class="car-tj">
        <img src="/images/car-tj.png" alt="" />
        <div>
          <ul class="clearfix">
            <li
              v-for="item of loveList"
              :key="item.id"
              @click="$router.push('/shopinfo/' + item.id)"
            >
              <a href="javascript:void(0)">
                <img :src="item.img" alt="" />
                <p>{{ item.goodsname }}</p>
                <p>
                  <span>&yen;{{ item.price }}</span>
                  <s>&yen;{{ item.market_price }}</s>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-js clearfix">
      <div class="fl clearfix">
        <span class="fl">
          <input type="checkbox" id="all" v-model="allActive" />
          全选
        </span>
        <span class="fr">
          合计: <b>&yen;{{ allPrice }}</b>
        </span>
      </div>
      <div class="fr">
        <a href="order.html"><p>结算</p></a>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      cartlist: {},
      loveList: {},
      allActive: false,
      allPrice: 0,
    };
  },
  mounted() {
    // 喜欢
    this.axios.get("/api/getindexgoods").then((res) => {
      if (res.data.code == 200) {
        this.loveList = res.data.list[0].content;
      }
    });
    // 获取购物车列表
    this.cardLIST();
  },
  methods: {
    cardLIST() {
      // 购物车列表
      this.axios
        .get("/api/cartlist?uid=" + store.state.userinfo.uid, {
          headers: {
            authorization: store.state.userinfo.token,
          },
        })
        .then((res) => {
          if (res.data.code === 200) {
            this.cartlist = res.data.list;
            this.comPrice();
          }
        });
    },
    // 选择每一个商品时
    check(index) {
      // 全选
      this.allcheck();
      // 计算价格
      this.comPrice();
    },
    comPrice() {
      if (this.$refs.check) {
        let allp = 0;
        for (let i = 0; i < this.$refs.check.length; i++) {
          if (this.$refs.check[i].checked) {
            allp += this.cartlist[i].num * this.cartlist[i].price;
          }
        }
        this.allPrice = allp;
      }
    },
    // 判断是否全选
    allcheck() {
      for (let i = 0; i < this.$refs.check.length; i++) {
        if (this.$refs.check[i].checked == false) {
          this.allActive = false;
          return;
        } else {
          this.allActive = true;
        }
      }
    },
    //加
    add(shopid, num) {
      if (num < 99) {
        this.axios({
          method: "post",
          url: "/api/cartedit",
          data: { id: shopid, type: 2 },
          headers: {
            authorization: store.state.userinfo.token,
          },
        }).then((res) => {
          if (res.data.code === 200) {
            this.cardLIST();
          }
        });
      } else {
        return;
      }
    },
    // 减
    edit(shopid, num) {
      if (num > 1) {
        this.axios({
          method: "post",
          url: "/api/cartedit",
          data: { id: shopid, type: 1 },
          headers: {
            authorization: store.state.userinfo.token,
          },
        }).then((res) => {
          if (res.data.code === 200) {
            this.cardLIST();
          }
        });
      } else {
        return;
      }
    },
    // 删除
    del(shopid) {
      this.axios({
        method: "post",
        url: "/api/cartdelete",
        data: { id: shopid },
        headers: {
          authorization: store.state.userinfo.token,
        },
      }).then((res) => {
        if (res.data.code === 200) {
          this.$message(res.data.msg);
          this.cardLIST();
        }
      });
      // + store.state.userinfo.uid,
    },
  },
};
</script>

<style scoped>
.warp .header span {
  font-weight: bold;
}
.warp .car-main {
  width: 7.5rem;
  padding: 0.22rem 0.18rem 1.6rem 0.18rem;
  box-sizing: border-box;
  background-color: #f8f8f8;
}
.warp .car-main .car-pro li {
  position: relative;
  padding: 0.3rem;
  width: 100%;
  height: 2.7rem;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 0.25rem;
  border-radius: 0.1rem;
}
.warp .car-main .car-pro li input[type="checkbox"] {
  width: 0.2rem;
  height: 0.2rem;
  margin-right: 0.2rem;
  /* opacity: 0; */
}
.warp .car-main .car-pro li input:checked + label {
  background-color: #f26d12;
}
.warp .car-main .car-pro li label {
  position: absolute;
  top: 0.88rem;
  left: 0.25rem;
  border-radius: 50%;
  text-align: center;
  width: 0.3rem;
  height: 0.3rem;
  border: 1px solid #ccc;
  color: #fff;
}
.warp .car-main .car-pro li label i {
  position: static;
  font-size: 0.22rem;
  line-height: 0.3rem;
}
.warp .car-main .car-pro li img {
  width: 1.6rem;
  height: 1.6rem;
}
.warp .car-main .car-pro li .main-box {
  display: inline-block;
  width: 3.1rem;
  vertical-align: top;
  margin: 0 0.2rem 0 0.15rem;
}
.warp .car-main .car-pro li .main-box p {
  font-size: 0.22rem;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 私有弹性盒 （摆放内部盒子的方式） */
  display: -webkit-box;
  /* 行数是2  */
  -webkit-line-clamp: 2;
  /* 内容的排放方向: vertical垂直 */
  -webkit-box-orient: vertical;
}
.warp .car-main .car-pro li .main-box p.price {
  margin: 0.15rem 0 0.25rem;
  font-size: 0.26rem;
  color: #f26d12;
  font-weight: bold;
}
.warp .car-main .car-pro li .main-box span {
  float: left;
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  background-color: #fafafa;
  color: #c7c7c7;
  border: 1px solid #f6f6f6;
  margin-left: -1px;
  font-size: 0.16rem;
}
.warp .car-main .car-pro li .main-box span:nth-of-type(2) {
  background-color: #fefefe;
  color: #2f2f2f;
}
.warp .car-main .car-pro li .main-box span:last-of-type {
  background-color: #f4f4f4;
  color: #525252;
}
.warp .car-main .car-pro li .yh {
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  width: 1rem;
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: #ffeff0;
  color: #f26d12;
  border-radius: 0.2rem;
  text-align: center;
  font-size: 0.22rem;
}
.warp .car-main .car-pro li i {
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  font-size: 0.3rem;
}
.warp .car-main .hint p {
  margin: 0.3rem 0.14rem;
  font-size: 0.24rem;
}
.warp .car-main .car-tj img {
  width: 100%;
  margin-bottom: 0.2rem;
}
.warp .car-main .car-tj li {
  float: left;
  width: 3.1rem;
  height: 5.2rem;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  margin-right: 0.14rem;
  background-color: #fff;
  border-radius: 0.1rem;
}
.warp .car-main .car-tj li:nth-of-type(2n) {
  margin-right: 0;
}
.warp .car-main .car-tj li p {
  margin: 0 0.1rem 0.3rem 0.15rem;
  font-size: 0.24rem;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 私有弹性盒 （摆放内部盒子的方式） */
  display: -webkit-box;
  /* 行数是2  */
  -webkit-line-clamp: 2;
  /* 内容的排放方向: vertical垂直 */
  -webkit-box-orient: vertical;
}
.warp .car-main .car-tj li p span {
  display: inline-block;
  margin-right: 0.1rem;
  color: #f26d12;
}
.warp .car-main .car-tj li p b {
  display: inline-block;
  width: 0.8rem;
  height: 0.4rem;
  text-align: center;
  font-size: 0.18rem;
  color: #fff;
  line-height: 0.4rem;
  border-radius: 0.2rem;
  background-color: #f26d12;
}
.warp .car-main .car-tj li p s {
  font-size: 0.2rem;
  color: #ccc;
}
.warp .footer-js {
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
.warp .footer-js div.fl {
  padding-left: 0.3rem;
  padding-right: 0.2rem;
  width: 5.2rem;
  position: relative;
}
.warp .footer-js div.fl input[type="checkbox"] {
  width: 0.3rem;
  height: 0.3rem;
  line-height: 1.25rem;
  /* opacity: 0; */
}
.warp .footer-js div.fl input:checked + label {
  background-color: #f26d12;
  opacity: 1;
}
.warp .footer-js div.fl label {
  position: absolute;
  top: 0.5rem;
  left: 0.25rem;
  border-radius: 50%;
  text-align: center;
  width: 0.3rem;
  height: 0.3rem;
  border: 1px solid #ccc;
  color: #fff;
}
.warp .footer-js div.fl label i {
  position: relative;
  top: -0.5rem;
  font-size: 0.22rem;
  line-height: 0.3rem;
}
.warp .footer-js div.fl b {
  color: #f26d12;
  font-size: 0.32rem;
}
.warp .footer-js div.fr {
  background-color: #f26d12;
  color: #fff;
  text-align: center;
  width: 1.8rem;
  height: 1.25rem;
}
.warp .footer-js div.fr a {
  color: #fff;
}
</style>
