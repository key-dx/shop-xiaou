<template>
  <div class="warp">
    <header class="header clearfix">
      <h1>
        <a @click="$router.go(-1)"
          ><i class="fl iconfont icon-jiantou-left-copy-copy"></i
        ></a>
        <span>商品列表</span>
        <a href="javascript:void(0)"
          ><i class="iconfont icon-yuandian fr"></i
        ></a>
      </h1>
    </header>
    <div class="search">
      <input type="text" placeholder="搜索商品" id="search" />
      <label for="search"><i class="iconfont icon-sousuo"></i></label>
    </div>

    <div class="pro-list">
      <ul>
        <li
          class="clearfix"
          v-for="item of shopList"
          :key="item.id"
          @click="$router.push('/shopinfo/' + item.id)"
        >
          <a href="javascript:void(0)">
            <div><img :src="item.img" alt="" /></div>
            <div>
              <p>
                {{ item.goodsname }}
              </p>
              <i>&yen;{{ item.price }}</i>
              <b>666评论</b>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopList: [],
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.axios
        .get("/api/getcategoods?sid=" + this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            this.shopList = res.data.list;
            console.log(this.shopList);
          }
        });
    }
  },
};
</script>

<style scoped>
.warp {
  width: 7.5rem;
}
.warp .search {
  width: 7.5rem;
  text-align: center;
  position: relative;
}
.warp .search label i {
  font-size: 0.3rem;
  color: #fff;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-top: 0.42rem;
  margin-left: -1.8rem;
}
.warp .search input {
  width: 6.2rem;
  height: 0.75rem;
  margin: 0.25rem;
  line-height: 0.75rem;
  background-color: #f26d12;
  text-align: center;
  font-size: 0.28rem;
  border-radius: 0.375rem;
  color: #fafafa;
}
.warp .search input::placeholder {
  color: #fafafa;
}
.warp .search input:focus + label i {
  display: none;
}
.warp .pro-list {
  margin-bottom: 2.4rem;
}
.warp .pro-list li {
  margin: 0.2rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
.warp .pro-list li a {
  display: flex;
}
.warp .pro-list li a div img {
  width: 1.7rem;
  height: 1.7rem;
  margin-right: 0.4rem;
}
.warp .pro-list li a div p {
  font-size: 0.26rem;
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 私有弹性盒 （摆放内部盒子的方式） */
  display: -webkit-box;
  /* 行数是2  */
  -webkit-line-clamp: 2;
  /* 内容的排放方向: vertical垂直 */
  -webkit-box-orient: vertical;
}
.warp .pro-list li a div i {
  display: block;
  margin-bottom: 0.15rem;
  font-size: 0.28rem;
  color: #f26d12;
}
.warp .pro-list li a div b {
  display: block;
  font-size: 0.24rem;
  color: #989898;
}
</style>
