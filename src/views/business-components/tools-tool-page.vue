<script setup>
import { ref } from 'vue'

const pagination = ref({
  rowsPerPage: 0
})

const columns = ref([
  { name: 'code', required: true, label: '工具编号', field: 'code', sortable: true, align: 'center' },
  { name: 'name', label: '工具名称', field: 'name', sortable: true, align: 'center' },
  { name: 'specs', label: '规格', field: 'specs', sortable: true, align: 'center' },
  { name: 'number', label: '数量', field: 'number', sortable: true, align: 'center' },
  { name: 'date', label: '送检日期', field: 'date', sortable: true, align: 'center' },
  { name: 'status', label: '状态', field: 'status', sortable: true, align: 'center' }
])

const rows = ref([
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  },
  {
    code: '3229299',
    name: '丝锥',
    specs: 'M2',
    number: 1,
    date: '2022-10-24',
    status: '在用'
  }
])

</script>

<template>
  <div class="w-full max-h-88vh overflow-auto">
    <q-table
      class="!shadow-sm !shadow-gray-200"
      :rows="rows"
      :columns="columns"
      row-key="name"
      virtual-scroll
      :rows-per-page-options="[0]"
      v-model:pagination="pagination"
    ></q-table>
  </div>
</template>
