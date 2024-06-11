<template>
  <van-nav-bar
    @click-left="onClickLeft"
    @click-right="onClickRight"
    title="标题"
    left-text="返回"
    left-arrow
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <div id="content">
    <router-view />
  </div>
  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍页</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user" >个人</van-tabbar-item >
  </van-tabbar>
</template>
<script setup>
import { ref } from "vue";
import { showToast } from "vant";
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const onClickLeft = () =>{  route.back( )}
const onClickRight = () => {
  router.push("/search");
};
//active关联name
const onChange = (index) => showToast(` ${index}`);
</script>
