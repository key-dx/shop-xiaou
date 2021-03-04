<template>
  <div class="warp">
    <router-view></router-view>
    <div class="footer-nav">
      <ul>
        <li>
          <router-link to="/home">
            <a>
              <p><i class="iconfont icon-shouye1"></i></p>
              <p>首页</p>
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="/category">
            <a>
              <p><i class="iconfont icon-fenlei"></i></p>
              <p>分类</p>
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="/shopcar">
            <a>
              <p><i class="iconfont icon-gouwuche"></i></p>
              <p>购物车</p>
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="/user">
            <a>
              <p><i class="iconfont icon-wode"></i></p>
              <p>我的</p>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.router-link-active p {
  color: red;
}
.warp .footer-nav ul li .router-link-active i.iconfont {
  color: red;
}
</style>
