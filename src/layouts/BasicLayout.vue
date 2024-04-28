<template>
<van-nav-bar
  title="标题"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<div id="content">
  <template v-if="active === 'index'">  <Index/></template>
  <template v-if="active ==='team'"> <Team/> </template>


</div>

<van-tabbar v-model="active" @change="onChange">
  <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
  <van-tabbar-item icon="search" name="team">队伍页</van-tabbar-item>
  <van-tabbar-item icon="friends-o" name="user">个人</van-tabbar-item>
</van-tabbar>

</template>
<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';
import Index from "../pages/Index.vue"
import Team from "../pages/Team.vue"
 const onClickLeft = () => alert("zuo");
 const onClickRight = () => alert("you");
 const active = ref("index");
 //active关联name
 const onChange = (index) => showToast(` ${index}`);
</script>