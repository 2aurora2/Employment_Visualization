<template>
  <div class="container">
    <div class="tips">
      <div class="tip-icon">
        <img src="@/assets/image/tip.svg" alt="tip" style="width: 20px;height: auto;cursor: pointer"
             @mouseover="showTips">
        <p class="tip-content" id="content">
          平均房价是以周为时间单位，真实数据区间为2022/3/14至2024/3/4且预测区间是使用ARIMA模型进行时序数据预测，预测时间区间为2024/3/5至2024/3/25。
        </p>
      </div>
    </div>
    <div id="main" style="height: 580px;width: 1000px"></div>
  </div>
</template>

<script setup>
import HousePrice from '@/assets/data/房价_total.json'
import * as echarts from 'echarts'
import {onMounted} from "vue";

const showTips = () => {
  const dom = document.getElementById('content')
  dom.style.height = '95px';
  dom.style.padding = '5px 6px 5px 10px'

  setTimeout(() => {
    dom.style.height = '0'
    dom.style.padding = '0'
  }, 4000)
}

onMounted(() => {
  const series = []
  const legend = []
  const selected = {}
  const house = JSON.parse(JSON.stringify(HousePrice))
  const city = Object.keys(house)
  city.forEach(item => {
    const tmpHouse = house[item]
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
              xAxis: '2024/3/11',
              yAxis: '0'
            },
            {
              xAxis: '2024/3/25',
              yAxis: '80000'
            }
          ]
        ]
      },
    }
    series.push(s)
  })
  house['北京'].forEach(item => {
    const date = new Date(item[0])
    legend.push(date.toLocaleDateString())
  })
  city.forEach((item, index) => {
    selected[item] = index < 4;
  })

  const dom = echarts.init(document.getElementById('main'))
  dom.setOption({
    title: {
      text: '城市近两年每周平均房价',
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
      inactiveColor: '#9b8a8a',
      left: -10,
      textStyle: {
        color: '#000'
      },
      selected: selected,
      top: 35,
      height: 500
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
        startValue: '2023/5/1',
        endValue: '2024/3/25'
      },
      {
        type: 'inside'
      }
    ],
    toolbox: {
      bottom: 0,
      left: -7,
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
      name: '元/平方米',
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
        width: 350px;
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