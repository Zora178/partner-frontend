<template>
  <form action="/">
    <van-search
      v-model="searchText"
      show-action
      placeholder="请输入搜索标签"
      @search="onSearch"
      @cancel="onCancel"
    />
    <van-divider content-position="left">已选标签</van-divider>
    <div v-if="activeIds.length === 0">请选择标签</div>
    <van-row gutter="20">
        <van-col v-for="tag in activeIds" >
        <van-tag closeable size="small" type="primary" @close="doClose(tag)">
{{  tag }}
</van-tag>
    </van-col>
</van-row>
    <van-divider content-position="left">选择标签</van-divider>
        <van-tree-select
  v-model:active-id="activeIds"
  v-model:main-active-index="activeIndex"
  :items="tagList"
/>
  </form>
</template>
<script setup>
import { ref } from "vue";
import { Toast } from "vant";

const searchText = ref("");
const originTagLiat = [
      {
        text: '性别',
        children: [
          { text: '男', id: '男' },
          { text: '女', id: '女' },
        ],
      },
      {
        text: '年级',
        children: [
          { text: '大一', id: 4213 },
          { text: '大四', id: 52154 },
          { text: '高中', id: 612 },
          { text: '大四', id: 521524 },
          { text: '高中', id: 6142 },
          { text: '大四', id: 521354 },
          { text: '高中', id: 61452 },
          { text: '大四', id: 525154 },
          { text: '高中', id: 6132 },
          { text: '大四', id: 522154 },
          { text: '高中', id: 6122 },
        ],
      },
    ]
// 标签列表
let tagList = ref(originTagLiat)
// 直接在前端过滤搜索列表
const onSearch = (val) => {
    // 树状数组扁平化 filter保留
    // activeIds.value = tagList.flatMap(parentTag => parentTag.children).filter(item => item.text.includes(searchText.value))
    tagList.value  =originTagLiat.map(parentTag => {
        const tempChildren = [...parentTag.children]
        const tempParentTag = {...parentTag}
        tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value))
        return tempParentTag
    })
}
const onCancel = () => {
    searchText.value = ''
    tagList.value = originTagLiat
}
// 已选中的标签
const activeIds = ref([]);
 const activeIndex = ref(0);
    // 移除标签
const doClose = (tag) => {
    activeIds.value = activeIds.value.filter(items => {
    return items !== tag
 })
}
</script>
<style scoped></style>
