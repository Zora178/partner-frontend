<template>
<van-card
v-for="user in userList"
  :desc="user.profile"
  :title="`${user.username} (${user.planetCode})`"
  :thumb="user.avatarUrl"
>
  <template #tags>
    <van-tag plain type="danger" v-for="tag in user.tags" style="margin-left: 5px; margin-top: 5px;">
      {{ tag }}</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">联系我</van-button>
  </template>
</van-card>


</template>
<script setup>
import { ref } from "vue";
import { Toast } from "vant";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import myAxios from "../plugins/myAxios.js"
import qs from 'qs';
const route = useRoute();
const {tags} = route.query

onMounted(() => {
  myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer:params =>{
return qs.stringify(params,{indices:false})
    }
  })
  .then(function (response) {
    console.log('/user/search/tags success',response);
  })
  .catch(function (error) {
    console.error(error);
  })
})

const mockUser ={
  id:12345,
    username:'假小子',
    userAccount:'12232',
    avatarUrl:'https://txc.gtimg.com/data/370820/2021/1216/8502754403f350e9e2085df8a33632d9.png',
    profile:'一个思想上进的大学生,未来想养一只缅因猫,目前正在努力工作买狗粮,蟹蟹大家',
    gender:1,
    phone:'15462512507',
    email:'2254161724@qq.com',
    userRole:0,
    planetCode:'1233',
    tags: ['c++','emo中','打工族','铲屎官','二次元','本科','计算机','图像处理'],
    createTime:new Date()
}
const userList = ref([mockUser]);

</script>
<style scoped></style>
