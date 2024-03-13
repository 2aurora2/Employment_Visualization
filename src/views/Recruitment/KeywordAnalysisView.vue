<template>
  <div class="container">
    关键词
  </div>
</template>

<script setup>
import RecruitmentInfo from '@/assets/data/招聘信息_afterProcessing.json'

const recruitmentArray = Array.isArray(RecruitmentInfo) ? RecruitmentInfo : []

/**
 * @param {Object} item
 * @param {string} item.com_name
 * @param {string} item.job
 * @param {string} item.feature
 */
const companyArray = recruitmentArray.map(item => item.com_name)
const jobArray = recruitmentArray.map(item => item.job)
const featureArray = recruitmentArray.map(item => item.feature)

console.log(companyArray)
console.log(jobArray)
console.log(featureArray)
</script>

<style scoped lang="scss">

</style>