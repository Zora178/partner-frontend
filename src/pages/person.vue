<template>
  <div>
    <van-cell title="昵称" to="/user/edit" is-link  :value="user.username"  />
    <van-cell title="账号"  :value="user.userAccount" />
    <van-cell title="头像" to="/user/edit" is-link  >
    <img style="height: 48px;" :src="user.avatarUrl"></van-cell>
    <van-cell title="性别" to="/user/edit" is-link :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
    <van-cell title="电话" to="/user/edit" is-link :value="user.phone"  @click="toEdit('phone','电话',user.phone)"/>
    <van-cell title="邮箱" to="/user/edit" is-link :value="user.email" />
    <van-cell title="星球编号"  :value="user.planetCode" />
    <van-cell title="注册时间"  :value="user.createTime.toISOString()" />
  </div>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router"
const user = {
    id:1,
    username:'caca',
    userAccount:'zora',
    avatarUrl:'https://pic1.zhimg.com/v2-27ecce3306b3861a4f86d194c21c53c2_r.jpg?source=1940ef5c',
    gender:'男',
    phone:'14354262771',
    email:'2298282845@qq.com',
    planetCode:'1234',
    createTime:new Date(),
}
const router = useRouter()
const toEdit = (editKey: string,editName:string,currentValue: string) => {
    router.push({
        path:'/user/edit',
        query: {
            editKey,
            currentValue,
            editName
        }
    })
}
</script>