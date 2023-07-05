<template>
  <view class="wrapper">
    <uni-badge text="1">{{ title }}</uni-badge>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
</script>

<style lang="scss">

</style>
