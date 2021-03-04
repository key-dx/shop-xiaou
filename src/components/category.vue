<template>
  <div class="cateheight">
    <header class="header clearfix">
      <h1>
        <a href="index.html"
          ><i class="fl iconfont icon-jiantou-left-copy-copy"></i
        ></a>
        <span>分类</span>
        <a href="search.html"><i class="iconfont icon-sousuo fr"></i></a>
      </h1>
    </header>
    <div class="space"></div>
    <div class="fenlei">
      <div class="f-nav">
        <ul>
          <li
            v-for="(item, index) of firstCate"
            :key="index"
            :class="{ active: index == cateActive }"
            @click="setActive(index)"
          >
            <a href="javascript:void(0)">{{ item.catename }}</a>
          </li>
        </ul>
      </div>
      <div class="f-pro">
        <div><img src="/images/pic_01.png" alt="" /></div>
        <div v-for="(items, k) of firstCate[cateActive]" :key="k">
          <h2 v-if="k == 'catename'">{{ items }}</h2>
          <div v-if="k == 'children'">
            <ul class="clearfix">
              <li v-for="item of items" :key="item.id">
                <a
                  href="javascript:void(0)"
                  @click="$router.push('/shoplist/' + item.id)"
                >
                  <img :src="item.img" alt="" />
                  <p>{{ item.catename }}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstCate: [],
      cateActive: 0,
    };
  },
  mounted() {
    // 页面挂载完成 获取数据
    // 分类
    this.axios.get("/api/getcate").then((res) => {
      if (res.data.code == 200) {
        this.firstCate = res.data.list;
      }
    });
  },
  methods: {
    setActive(index) {
      this.cateActive = index;
    },
  },
};
</script>

<style scoped>
html,
body,
.warp,
.cateheight{
  height: 100%;
}
.warp .space {
  margin-bottom: 0.1rem;
}
.warp .fenlei {
  width: 7.5rem;
  display: flex;
  height: 100%;
  overflow: hidden;
}
.warp .fenlei .f-nav {
  width: 2.2rem;
  background-color: #f8f8f8;
}
.warp .fenlei .f-nav li {
  width: 100%;
  height: 1.3rem;
  line-height: 1.3rem;
  font-size: 0.3rem;
}
.warp .fenlei .f-nav li a {
  padding: 0.3rem 0rem 0.3rem 0.2rem;
}
.warp .fenlei .f-nav li.active {
  background-color: #fff;
}
.warp .fenlei .f-nav li.active a {
  border-left: 0.1rem solid #f26d12;
}
.warp .fenlei .f-pro {
  width: 5.7rem;
  padding: 0.2rem 0.3rem;
  height: 100%;
  overflow-y: auto;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
}
.warp .fenlei .f-pro img {
  width: 100%;
}
.warp .fenlei .f-pro h2 {
  margin-top: 0.2rem;
  margin-bottom: 0.1rem;
  font-size: 0.26rem;
  font-weight: bold;
}
.warp .fenlei .f-pro ul {
  align-content: space-between;
}
.warp .fenlei .f-pro ul li {
  float: left;
  width: 33.3%;
  text-align: center;
}
.warp .fenlei .f-pro ul li img {
  width: 1.44rem;
  height: 1.44rem;
}
.warp .fenlei .f-pro ul li p {
  margin: 0.25rem 0;
  color: #a4a4a4;
  font-size: 0.26rem;
}
</style>
