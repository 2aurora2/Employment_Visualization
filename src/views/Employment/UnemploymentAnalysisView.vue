<template>
  <div class="container">
    <div id="main" style="height: 580px;width: 950px"></div>
  </div>
</template>

<script setup>
import EmploymentExcel from '@/assets/data/各城市就业与失业人数.json'
import * as echarts from 'echarts';
import {onMounted} from "vue";

const employmentArray = Array.isArray(EmploymentExcel) ? EmploymentExcel : []

onMounted(() => {
  employmentArray.sort((a, b) => {
    return a['城镇登记失业人员数（万人）'] - b['城镇登记失业人员数（万人）']
  })
  const cityArray = employmentArray.map(item => item['城市'])
  const unemployment = employmentArray.map(item => item['城镇登记失业人员数（万人）'])
  const barEcharts = echarts.init(document.getElementById("main"))
  barEcharts.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      textStyle: {
        color: '#dcdcdc',
        fontSize: 14
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      name: '万人'
    },
    yAxis: {
      type: 'category',
      data: cityArray,
    },
    // 区域缩放
    dataZoom: [
      {
        type: 'slider',
        show: true,
        orient: 'vertical',
        left: 2,
        startValue: '沈阳',
        endValue: '广州'
      }
    ],
    toolbox: {
      feature: {
        // 保存图片
        saveAsImage: {
          show: true,
          title: '保存为图片',
          type: 'png',
          excludeComponents: ['toolbox']
        },
        // 重新加载
        restore: {
          show: true
        }
      }
    },
    series: [
      {
        name: '城镇登记失业人员数',
        type: 'bar',
        data: unemployment,
        itemStyle: {
          borderRadius: [0, 5, 5, 0]
        },
        colorBy: 'data',
        label: {
          show: true,
          distance: 20,
          formatter: '{c}万'
        }
      }
    ]
  })
})


</script>

<style scoped lang="scss">
.container {
  width: 1000px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>