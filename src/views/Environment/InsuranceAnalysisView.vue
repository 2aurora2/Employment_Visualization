<template>
  <div class="container">
    <div id="main" style="height: 580px;width: 900px"></div>
  </div>
</template>

<script setup>
import Insurance from '@/assets/data/insurance.json'
import * as echarts from 'echarts'
import {onMounted} from "vue";

onMounted(() => {
  const series = []
  const legend = []
  const selected = {}
  const insurance = JSON.parse(JSON.stringify(Insurance))
  const city = Object.keys(insurance)
  city.forEach(item => {
    const tmpHouse = insurance[item]
    const price = []
    tmpHouse.forEach(day => {
      price.push(day[1])
    })
    const s = {
      name: item,
      type: 'line',
      data: price,
      smooth: true,
      areaStyle: {
        opacity: 0.2,
      },
      markArea: {
        silent: true,
        itemStyle: {
          color: '#dcdcdc',
          borderWidth: 1,
          borderType: 'dashed'
        },
        data: [
          [
            {
              name: '预测区间',
              xAxis: '2022',
              yAxis: '0'
            },
            {
              xAxis: '2025',
              yAxis: '80000'
            }
          ]
        ]
      },
    }
    series.push(s)
  })
  insurance['北京市'].forEach(item => {
    legend.push(item[0])
  })
  city.forEach((item, index) => {
    selected[item] = index < 4;
  })

  const dom = echarts.init(document.getElementById('main'))
  dom.setOption({
    title: {
      text: '各省份养老保险支出',
      left: 'center',
      top: 0,
      textStyle: {
        color: '#000'
      },
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: city,
      type: 'scroll',
      orient: 'vertical',
      left: -10,
      inactiveColor: '#9b8a8a',
      textStyle: {
        color: '#000'
      },
      selected: selected,
      top: 35
    },
    grid: {
      left: '10%',
      right: '4%',
      containLabel: true
    },
    // 区域缩放
    dataZoom: [
      {
        type: 'slider',
        show: true,
        startValue: '2010',
        endValue: '2025'
      },
      {
        type: 'inside'
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
        // 区域缩放config
        dataZoom: {
          title: {
            'zoom': '区域缩放',
            'back': '撤销上一次缩放'
          }
        },
        // 重新加载
        restore: {
          show: true
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: legend,
      axisLabel: {
        color: '#000'
      },
      nameTextStyle: {
        color: '#000'
      }
    },
    yAxis: {
      type: 'value',
      name: '亿元',
      axisLabel: {
        color: '#000'
      },
      nameTextStyle: {
        color: '#000'
      }
    },
    series: series
  })
})
</script>

<style scoped lang="scss">
.container {
  width: 1000px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none !important;
  box-shadow: none;
}
</style>