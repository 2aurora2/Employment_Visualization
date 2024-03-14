<template>
  <div class="container">
    <div id="main" style="height: 580px;width: 950px"></div>
  </div>
</template>

<script setup>
import RecruitmentInfo from '@/assets/data/招聘信息_afterProcessing.json'
import {onBeforeMount, onMounted, ref, shallowRef} from "vue";
import * as echarts from 'echarts';

/**
 * @param {Object} item
 * @param {string} item.site
 */
const recruitmentArray = Array.isArray(RecruitmentInfo) ? RecruitmentInfo : []
const cityArray = Array.from(new Set(recruitmentArray.map(item => item.site)));

const diffOfCities = ref({})
const boxplotEcharts = shallowRef()

onBeforeMount(() => {
  cityArray.forEach(city => {
    let filter = recruitmentArray.filter(item => item.site === city);
    diffOfCities.value[city] = filter.map(item => item['degree of difficulty'])
  })
})

onMounted(() => {
  let source = []
  let index = []
  Object.keys(diffOfCities.value).forEach(city => {
    source.push(diffOfCities.value[city])
    index.push(city)
  })

  boxplotEcharts.value = echarts.init(document.getElementById('main'))
  boxplotEcharts.value.setOption({
    title: [
      {
        text: '招聘岗位难度系数',
        left: 'center',
        textStyle: {
          color: '#dcdcdc'
        }
      }
    ],
    darkMode: 'auto',
    dataset: [
      {
        // prettier-ignore
        source: source
      },
      {
        transform: {
          type: 'boxplot',
          config: {
            itemNameFormatter: (params) => {
              return index[params.value]
            }
          }
        }
      },
      {
        fromDatasetIndex: 1,
        fromTransformResult: 1
      }
    ],
    // 区域缩放
    dataZoom: [
      {
        type: 'slider',
        show: true
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
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      nameGap: 30,
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      name: '难度系数',
      splitArea: {
        show: true
      }
    },
    series: [
      {
        name: '难度系数',
        type: 'boxplot',
        datasetIndex: 1,
        itemStyle: {
          color: '#b8c5f2'
        },
        // tooltip展示内容
        tooltip: {
          formatter: (param) => {
            return '<strong>' + param.name + '</strong><br/>' + [
              '<strong>max:</strong> ' + param.data[5].toFixed(5),
              '<strong>mid:</strong> ' + param.data[3].toFixed(5),
              '<strong>min:</strong> ' + param.data[1].toFixed(5)
            ].join('<br/>');
          }
        }
      },
      {
        name: 'max',
        type: 'line',
        datasetIndex: 1,
        markLine: {
          silent: true,
          symbol: 'circle',
          lineStyle: {
            type: 'dashed',
            color: '#eff5a1',
            width: 2,
            cap: 'round'
          },
          data: [{
            yAxis: 0.32
          }]
        }
      },
      {
        name: 'min',
        type: 'line',
        datasetIndex: 1,
        markLine: {
          silent: true,
          symbol: 'circle',
          lineStyle: {
            type: 'dashed',
            color: '#eff5a1',
            width: 2,
            cap: 'round'
          },
          data: [{
            yAxis: 0.15
          }]
        }
      }
    ]
  })
})
</script>

<style scoped lang="scss">
.container {
  width: 1200px;
  height: 600px;
}
</style>