<script setup>
import { ref } from 'vue'
import { useToggle } from '@vant/use'
import PageSkeleton  from '../components/PageSkeleton.vue'
import Camera from '@/components/Camera.vue'

const [visible, toggle] = useToggle()

const value1 = ref(null)
const barCode = ref(null)
const value2 = ref(null)
const value3 = ref(null)
const value4 = ref(null)
const showPicker = ref(false)
const showPicker1 = ref(false)
const columns = ['管理包1', '管理包2', '管理包3', '管理包4', '管理包5']
const columns1 = ['1', '2', '3', '4', '5']

const onConfirm = (value) => {
  value1.value = value
  showPicker.value = false
}

const onConfirm1 = (value) => {
  value4.value = value
  showPicker1.value = false
}

const handleSuccess = (v) => {
  console.log(v);
  barCode.value = v
}
</script>

<template>
  <PageSkeleton :right-nav="true">
    <van-form>
      <van-cell-group inset>
        <van-field
          v-model="value1"
          is-link
          readonly
          name="作业工序"
          label="作业工序"
          placeholder="点击选择作业工序"
          @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
          <van-picker
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>

        <van-field
          v-model="barCode"
          center
          clearable
          name="基本信息"
          label="基本信息"
          placeholder="请输入"
        >
          <template #button>
            <van-button size="small" plain type="primary" icon="photograph" @click="toggle()">扫描</van-button>
          </template>
        </van-field>

        <van-field
          v-model="value2"
          name="配置部件"
          label="配置部件"
          placeholder="请输入"
        />

        <van-field
          v-model="value3"
          name="检修记录"
          label="检修记录"
          placeholder="请输入"
        />

        <van-field
          v-model="value4"
          is-link
          readonly
          name="台位选择"
          label="台位选择"
          placeholder="点击选择台位"
          @click="showPicker1 = true"
        />

        <van-popup v-model:show="showPicker1" position="bottom">
          <van-picker
            :columns="columns1"
            @confirm="onConfirm1"
            @cancel="showPicker1 = false"
          />
        </van-popup>
      </van-cell-group>

      <div class="m-4">
        <van-button round  block type="primary" native-type="submit">
          开始
        </van-button>
      </div>
    </van-form>

    <van-dialog v-model:show="visible" title="扫码" show-cancel-button>
      <Camera @scan-success="handleSuccess" />
    </van-dialog>

  </PageSkeleton>
</template>