<script setup>
import PageWithNavbar  from '../components/PageWithNavbar.vue'

</script>

<template>
  <PageWithNavbar>
    <div class="flex flex-col items-center justify-around h-140 mt-10">
      <router-link to="/kaigongzhunbei">
        <div class="text-white bg-blue-500 px-12 py-8 text-4xl">开工准备</div>
      </router-link>
    
      <router-link to="/shengchanguocheng">
        <div class="text-white bg-blue-500 px-12 py-8 text-4xl my-2">生产过程</div>
      </router-link>
    
      <router-link to="/wangongqingdian">
        <div class="text-white bg-blue-500 px-12 py-8 text-4xl">完工清点</div>
      </router-link>
    </div>
  </PageWithNavbar>
</template>
