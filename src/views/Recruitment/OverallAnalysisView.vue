<template>
  <div class="container">
    <div class="radio">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="keyword" id="keyword1" value="0" checked
               v-model="curType">
        <label class="form-check-label" for="keyword1" style="color:black;">所需学历</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="keyword" id="keyword2" value="1" v-model="curType">
        <label class="form-check-label" for="keyword2" style="color:black;">工作性质</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="keyword" id="keyword3" value="2" v-model="curType">
        <label class="form-check-label" for="keyword3" style="color:black;">公司团队规模</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="keyword" id="keyword4" value="3" v-model="curType">
        <label class="form-check-label" for="keyword4" style="color:black;">工作所需经验</label>
      </div>
    </div>
    <div id="main" style="height: 650px;width: 1000px"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import {onMounted, ref, shallowRef, watch} from "vue";
import RecruitInfoNotProcess from '@/assets/data/招聘信息汇总.json'
import RecruitInfoAfterProcess from '@/assets/data/招聘信息_afterProcessing.json'

const curType = ref(0)
const type = ref(['qualification', 'attribute', 'nop', 'experience'])
const recruitIndoNotProcess = Array.isArray(RecruitInfoNotProcess) ? RecruitInfoNotProcess : []
const recruitInfoAfterProcess = Array.isArray(RecruitInfoAfterProcess) ? RecruitInfoAfterProcess : []
const dom = shallowRef()

const typeWatch = watch(curType, (newVal, oldVal) => {
  const originData = recruitInfoAfterProcess.map(item => [item['site'], item['revenue']])
  const sites = Array.from(new Set(originData.map(item => item[0])))
  const mean = []
  sites.forEach(site => {
    let filter = originData.filter(item => item[0] === site)
    const revenue = filter.map(item => item[1])
    const meanPer = revenue.reduce((total, per) => total + per, 0) / revenue.length
    mean.push(meanPer)
  })

  showBar(sites, mean)
})

onMounted(() => {
  const originData = recruitInfoAfterProcess.map(item => [item['site'], item['revenue']])
  const sites = Array.from(new Set(originData.map(item => item[0])))
  const mean = []
  sites.forEach(site => {
    let filter = originData.filter(item => item[0] === site)
    const revenue = filter.map(item => item[1])
    const meanPer = revenue.reduce((total, per) => total + per, 0) / revenue.length
    mean.push(meanPer)
  })

  dom.value = echarts.init(document.getElementById('main'))
  showBar(sites, mean)
})

const showBar = (sites, mean) => {
  dom.value.clear()
  const colName = type.value[Number(curType.value)]
  const originData = recruitIndoNotProcess.map(item => [item['site'], item[colName]])
  const types = Array.from(new Set(originData.map(item => item[1])))
  const series = []
  types.forEach(type => {
    const number = []
    sites.forEach(site => {
      number.push(originData.filter(item => item[0] === site && item[1] === type).length)
    })
    const per = {
      data: number,
      type: 'bar',
      stack: colName,
      name: type,
      yAxisIndex: 0,
    }
    series.push(per)
  })
  series.push({
    name: '平均薪资（元）',
    type: 'line',
    stack: 'item',
    data: mean,
    yAxisIndex: 1
  })
  dom.value.setOption({
        legend: {
          show: true,
          textStyle: {
            color: '#000'
          }
        },
        itemStyle: {
          borderRadius: [3, 3, 0, 0]
        },
        xAxis: {
          type: 'category',
          data: sites,
          axisLabel: {
            color: '#000'
          }
        },
        yAxis: [{
          type: 'value',
          nameTextStyle: {
            color: '#000'
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#76739a'
            }
          },
          axisLabel: {
            formatter: '{value}',
            color: '#000'
          }
        },
          {
            type: 'value',
            name: '平均薪资（元）',
            position: 'right',
            nameTextStyle: {
              color: '#000'
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: '#76739a'
              }
            },
            axisLabel: {
              formatter: '{value}',
              color: '#000'
            }
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#000'
            }
          }
        },
        // 区域缩放
        dataZoom: [
          {
            type: 'slider',
            show: true,
            startValue: '北京',
            endValue: '海口'
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
        series: series
      }
  )
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

  .radio {
    height: 40px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    .form-check {
      color: #dcdcdc;
      margin-left: 10px;
    }
  }
}
</style>