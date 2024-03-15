<template>
  <div class="container">
    <div id="main" style="height: 580px;width: 900px"></div>
  </div>
</template>

<script setup>
import EduMedical from '@/assets/data/edu_and_health.json'
import {onMounted} from "vue";
import * as echarts from "echarts";

onMounted(() => {
  const province = Object.keys(EduMedical['教育'])
  const legend = []
  const edu = []
  const medical = []
  province.forEach(pro => {
    legend.push(pro)
    edu.push(EduMedical['教育'][pro])
    medical.push(EduMedical['卫生'][pro])
  })

  const dom = echarts.init(document.getElementById('main'))
  dom.setOption({
    title: {
      text: '各省份教育与卫生情况',
      textStyle: {
        color: '#fff'
      },
      left: 'center'
    },
    darkMode: true,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    // 区域缩放
    dataZoom: [
      {
        type: 'slider',
        show: true,
        startValue: '北京',
        endValue: '湖南'
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
        // 重新加载
        restore: {
          show: true
        }
      }
    },
    legend: {
      data: ['大学生人数', '医院数量'],
      textStyle: {
        color: '#dcdcdc'
      },
      top: 30
    },
    xAxis: [
      {
        type: 'category',
        data: legend,
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '大学生人数',
        min: 0,
        max: 250,
        axisLabel: {
          formatter: '{value} 万人'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      {
        type: 'value',
        name: '医院数量',
        min: 0,
        max: 2500,
        axisLabel: {
          formatter: '{value} 所'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        }
      }
    ],
    series: [
      {
        name: '大学生人数',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 万人';
          }
        },
        data: edu,
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        },
      },
      {
        name: '医院数量',
        type: 'bar',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 所';
          }
        },
        data: medical,
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        },
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
  justify-content: center;
  align-items: center;
}
</style>