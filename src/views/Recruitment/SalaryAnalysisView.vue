<template>
  <div class="container">
    <div class="user-choose">
      <div class="select">
        <select id="city-choose" class="form-select" aria-label="Default select example" v-model="curBigCate">
        </select>
      </div>
      <div class="tip-icon">
        <img src="@/assets/image/tip.svg" alt="tip" style="width: 20px;height: auto;cursor: pointer"
             @mouseover="showTips">
        <p class="tip-content" id="content">
          图表展示的是下拉框所选择的对应一级岗位下的所有二级岗位的月薪资中位数和平均数
        </p>
      </div>
    </div>
    <div class="salary-bar">
      <div id="main" style="height: 600px;width: 1000px"></div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import * as echarts from "echarts";
import JobData from '@/assets/data/job_data.json'

const curBigCate = ref('后端开发')

const cateWatch = watch(curBigCate, (newVal, oldVal) => {
  SalaryNumber()
})

const showTips = () => {
  const dom = document.getElementById('content')
  dom.style.height = '55px';
  dom.style.padding = '5px 6px 5px 10px'

  setTimeout(() => {
    dom.style.height = '0'
    dom.style.padding = '0'
  }, 5000)
}

onMounted(() => {
  const bigCategory = Object.keys(JobData)

  const dom = document.getElementById("city-choose")
  bigCategory.forEach(cate => {
    const option = document.createElement('option');
    option.text = cate;
    option.value = cate;
    dom.add(option);
  })

  SalaryNumber()
})

const SalaryNumber = () => {
  const bigObj = JobData[curBigCate.value]  // 大类对象
  const smlObj = Object.keys(bigObj)        // 小类名称

  const average = []
  const midVal = []
  const xLabel = []
  const need = {}

  smlObj.forEach(cate => {
    xLabel.push(cate);
    midVal.push(parseInt(bigObj[cate]['中位数'].replace("¥", "").replace(",", "")))
    average.push(parseInt(bigObj[cate]['平均数'].replace("¥", "").replace(",", "")))
    need[cate] = {}
    need[cate]['中位数'] = parseInt(bigObj[cate]['中位数'].replace("¥", "").replace(",", ""));
    need[cate]['平均数'] = parseInt(bigObj[cate]['平均数'].replace("¥", "").replace(",", ""));
  })

  console.log(curBigCate.value, JSON.stringify(need))


  const dom = echarts.init(document.getElementById('main'))
  dom.setOption({
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
        startValue: xLabel[0],
        endValue: xLabel[xLabel.length > 6 ? 6 : xLabel.length]
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
      data: ['月薪资中位数', '月薪资平均数'],
      textStyle: {
        color: '#000'
      },
    },
    xAxis: [
      {
        type: 'category',
        data: xLabel,
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          color: '#000',
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '月薪资中位数',
        // min: 0,
        // max: 250,
        axisLabel: {
          formatter: '{value} 元',
          color: '#000'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#2c2a46'
          }
        },
        nameTextStyle: {
          color: '#000'
        },
      },
      {
        type: 'value',
        name: '月薪资平均数',
        nameTextStyle: {
          color: '#000'
        },
        // min: 0,
        // max: Math.max(average),
        axisLabel: {
          formatter: '{value} 元',
          color: '#000'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#302e50'
          }
        }
      }
    ],
    series: [
      {
        name: '月薪资中位数',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 元';
          }
        },
        data: midVal,
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        },
      },
      {
        name: '月薪资平均数',
        type: 'bar',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' 元';
          }
        },
        data: average,
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        },
      }
    ]
  })
}
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

  .user-choose {
    display: flex;
    height: 50px;
    width: 100%;
    margin-top: 26px;
    position: relative;

    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    #city-choose {
      width: 200px;
    }

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
      font-family: 宋体, serif;
      transition: height 1s, padding 1s;
      overflow: hidden;
    }
  }
}
</style>