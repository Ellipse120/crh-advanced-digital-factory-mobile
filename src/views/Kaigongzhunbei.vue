<script setup>
import { ref, computed } from 'vue'
import PageSkeleton from '../components/PageSkeleton.vue'
import UserSign from './business-components/user-sign.vue'
import ProductionPlan from './business-components/production-plan.vue'
import EquipmentInspection from './business-components/equipment-inspection.vue'
import ToolsInspection from './business-components/tools-inspection.vue'
import MaterialInspection from './business-components/material-inspection.vue'
import EnvironmentInspection from './business-components/environment-inspection.vue'

const activeIndex = ref(0)
const items = ref([
  { text: '人员打卡' },
  { text: '生产计划' },
  { text: '设备点检' },
  { text: '工具点检' },
  { text: '物料点检' },
  { text: '环境检查' },
])

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
</script>

<template>
  <PageSkeleton>
    <div>
      <van-tree-select
        v-model:main-active-index="activeIndex"
        height="85vh"
        :items="items"
      >
        <template #content>
          <div class="p-1">
            <component :is="activeComp" />
          </div>
        </template>
      </van-tree-select>
    </div>
  </PageSkeleton>
</template>