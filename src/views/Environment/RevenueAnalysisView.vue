<template>
  <div class="container">
    <div class="tips">
      <div class="tip-icon">
        <img src="@/assets/image/tip.svg" alt="tip" style="width: 20px;height: auto;cursor: pointer"
             @mouseover="showTips">
        <p class="tip-content" id="content">
          人均可支配收入是以年为时间单位，真实数据区间为2013年至2021年且预测区间是使用ARIMA模型进行时序数据预测，预测时间区间为2022年至2025年。
        </p>
      </div>
    </div>
    <div id="main" style="height: 580px;width: 1000px"></div>
  </div>
</template>

<script setup>
import {onMounted, shallowRef} from "vue";
import Revenue from '@/assets/data/revenue.json'
import * as echarts from "echarts";

const dom = shallowRef()

const showTips = () => {
  const dom = document.getElementById('content')
  dom.style.height = '90px';
  dom.style.padding = '5px 6px 5px 10px'

  setTimeout(() => {
    dom.style.height = '0'
    dom.style.padding = '0'
  }, 4000)
}

const mountEcharts = (originData, title) => {
  const series = []
  const legend = []
  const selected = {}
  const insurance = JSON.parse(JSON.stringify(originData))
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
              yAxis: '100000'
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

  dom.value.setOption({
    title: {
      text: title,
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
      left: 0,
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
      name: '元',
      axisLabel: {
        color: '#000'
      },
      nameTextStyle: {
        color: '#000'
      }
    },
    series: series
  })
}

onMounted(() => {
  dom.value = echarts.init(document.getElementById('main'))
  mountEcharts(Revenue, '人均可支配收入');
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
        top: -10px;
        right: 20px;
        width: 370px;
        height: 0;
        background-color: #3d61d2;
        padding: 0;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 15px;
        font-family: "Times New Roman", 宋体, serif;
        transition: height 1s, padding 1s;
        overflow: hidden;
      }
    }
  }
}
</style>