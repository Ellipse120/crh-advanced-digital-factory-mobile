<script setup>
import PageWithNavbar  from '../components/PageWithNavbar.vue'

</script>

<template>
  <PageWithNavbar>
    <div class="leading-50px my-6">
      <div class="item flex justify-between px-4 border-b">
        <div>车型</div>
        <div>CRH400BF</div>
      </div>
      <div class="item flex justify-between px-4 border-b">
        <div>车号</div>
        <div>5001</div>
      </div>
      <div class="item flex justify-between px-4 border-b">
        <div>配属局</div>
        <div>上海局</div>
      </div>
      <div class="item flex justify-between px-4 border-b">
        <div>配属所</div>
        <div>虹桥所</div>
      </div>
      <div class="item flex justify-between px-4 border-b">
        <div>作业日期</div>
        <div>2002年07月01日 星期三</div>
      </div>
      <div class="item flex justify-between px-4 border-b">
        <div>架车方式</div>
        <div>整编修</div>
      </div>
      <div class="item flex justify-between px-4 border-b">
        <div>完成情况</div>
        <div>未完成</div>
      </div>
      <div class="item flex justify-between px-4">
        <div>计划任务</div>
        <div class="flex text-white w-3/5 items-center">
          <div class="flex-1 text-center mr-2 h-5 leading-5 bg-green-300">1-1</div>
          <div class="flex-1 text-center mr-2 h-5 leading-5 bg-orange-300">1-2</div>
          <div class="flex-1 text-center mr-2 h-5 leading-5 bg-gray-300">1-3</div>
          <div class="flex-1 text-center h-5 leading-5 bg-gray-300">1-4</div>
        </div>
      </div>
    </div>
  </PageWithNavbar>
</template>