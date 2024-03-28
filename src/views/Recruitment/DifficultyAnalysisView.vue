<template>
  <div class="container">
    <div class="tips">
      <div class="tip-icon">
        <img src="@/assets/image/tip.svg" alt="tip" style="width: 20px;height: auto;cursor: pointer"
             @mouseover="showTips">
        <p class="tip-content" id="content">
          招聘岗位难度系数是由该岗位的：薪资、所需工作经验、所需学历、公司规模、工作性质等属性通过变异系数-TOPSIS评价法得到的。
        </p>
      </div>
    </div>
    <div id="main" style="height: 650px;width: 1000px"></div>
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

const showTips = () => {
  const dom = document.getElementById('content')
  dom.style.height = '85px';
  dom.style.padding = '5px 6px 5px 10px'

  setTimeout(() => {
    dom.style.height = '0'
    dom.style.padding = '0'
  }, 5000)
}

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
        left: 'center'
      }
    ],
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
        show: true,
        startValue: '南京',
        endValue: '乌鲁木齐'
      },
      {
        type: 'inside'
      }
    ],
    toolbox: {
      left: 68,
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
      },
      axisLabel: {
        color: '#000'
      },
    },
    yAxis: {
      type: 'value',
      name: '难度系数',
      splitArea: {
        show: true
      },
      axisLabel: {
        formatter: '{value}',
        color: '#000'
      },
      nameTextStyle: {
        color: '#000'
      },
    },
    series: [
      {
        name: '难度系数',
        type: 'boxplot',
        datasetIndex: 1,
        itemStyle: {
          color: '#b8c5f2',
          borderWidth: 3
        },
        colorBy: 'data',
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
            color: '#4d4747',
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
            color: '#4d4747',
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
  width: 1000px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none !important;
  box-shadow: none;

  .tips {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 2px;

    .tip-icon {
      position: relative;

      .tip-content {
        position: absolute;
        top: 0;
        right: 20px;
        width: 350px;
        height: 0;
        background-color: #3d61d2;
        padding: 0;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 15px;
        font-family: 宋体, serif;
        transition: height 1s, padding 1s;
        overflow: hidden;
      }
    }
  }
}
</style>