<script setup>
import PageSkeleton  from '../components/PageSkeleton.vue'
import { useUserInfoStore } from '../stores/user'

const { userInfo } = useUserInfoStore()

</script>

<template>
  <PageSkeleton>
    <pre>
      {{userInfo}}
    </pre>
  </PageSkeleton>
</template>