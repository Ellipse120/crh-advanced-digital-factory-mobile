<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageSkeleton from '../components/PageSkeleton.vue'
import UserSign from './business-components/user-sign.vue'
import ProductionPlan from './business-components/production-plan.vue'
import EquipmentInspection from './business-components/equipment-inspection.vue'
import ToolsInspection from './business-components/tools-inspection.vue'
import MaterialInspection from './business-components/material-inspection.vue'
import EnvironmentInspection from './business-components/environment-inspection.vue'

const router = useRouter()
const route = useRoute()

const activeIndex = ref(0)
const items = ref([
  { text: '人员打卡' },
  { text: '生产计划' },
  { text: '设备点检' },
  { text: '工具点检' },
  { text: '物料点检' },
  { text: '环境检查' }
])

const handleChange = (v) => {
  router.push({
    name: 'Wangongqingdian',
    query: {
      active: v
    }
  })
}

const activeComp = computed(() => {
  const compMapper = {
    0: UserSign,
    1: ProductionPlan,
    2: EquipmentInspection,
    3: ToolsInspection,
    4: MaterialInspection,
    5: EnvironmentInspection
  }

  return compMapper[activeIndex.value]
})

watch(
  () => route.query.active,
  (v) => {
    activeIndex.value = v || 0
  },
  { immediate: true }
)
</script>

<template>
  <PageSkeleton>
    <div class="flex">
      <van-sidebar v-model="activeIndex" @change="handleChange">
        <van-sidebar-item v-for="item in items" :title="item.text" :key="item.text" />
      </van-sidebar>

      <div class="flex-1 overflow-auto p-2">
        <component :is="activeComp" workStatus="finished" />
      </div>
    </div>
  </PageSkeleton>
</template>
