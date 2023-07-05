<template>
  <view class="wrapper">
    <uni-badge text="1"></uni-badge>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { http } from '@/library/http'

console.log(getApp())

const title = ref('Hello')
</script>

<style lang="scss">

</style>
