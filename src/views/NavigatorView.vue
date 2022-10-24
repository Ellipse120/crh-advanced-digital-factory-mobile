<script setup>
import PageWithNavbar  from '../components/PageWithNavbar.vue'

</script>

<template>
  <PageWithNavbar>
    <div class="flex flex-col items-center justify-around h-160 text-center  mt-10">
      <router-link to="/kaigongzhunbei?active=0">
        <div class="text-white bg-blue-500 w-85vw p-8 text-3xl font-bold">开工准备</div>
      </router-link>
    
      <router-link to="/shengchanguocheng">
        <div class="text-white bg-blue-500 w-85vw p-8 text-3xl font-bold my-2">生产过程（检修）</div>
      </router-link>

      <router-link to="/shengchanguocheng">
        <div class="text-white bg-blue-500 w-85vw p-8 text-3xl font-bold  my-2">生产过程（打磨）</div>
      </router-link>

      <router-link to="/shengchanguocheng">
        <div class="text-white bg-blue-500 w-85vw p-8 text-3xl font-bold my-2">生产过程（小部件）</div>
      </router-link>
    
      <router-link to="/wangongqingdian">
        <div class="text-white bg-blue-500 w-85vw p-8 text-3xl font-bold">完工清点</div>
      </router-link>
    </div>
  </PageWithNavbar>
</template>
