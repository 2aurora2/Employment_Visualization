<template>
  <div class="container">
    <div class="radio">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="keyword" id="keyword1" value="0" checked v-model="curType">
        <label class="form-check-label" for="keyword1" style="color: #000">城镇单位从业人数</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="keyword" id="keyword2" value="1" v-model="curType">
        <label class="form-check-label" for="keyword2" style="color: #000">城镇私营和个体从业人数</label>
      </div>
    </div>
    <div id="main" style="height: 600px;width: 1000px;margin-top: 20px"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import ChinaMap from '@/assets/data/中华人民共和国.json'
import RegionGeo from '@/assets/data/chinaRegionGeoJson.json'
import Employment from '@/assets/data/各城市就业与失业人数.json'

import {onMounted, ref, shallowRef, watch} from "vue";

const china = shallowRef()
const curType = ref(0)
const employment = Array.isArray(Employment) ? Employment : []

const typeWatch = watch(curType, (newVal, oldVal) => {
  const data = []
  if (Number(newVal) === 0) {
    employment.forEach(city => {
      data.push({name: city['城市'], value: RegionGeo[city['城市']].concat(city['城镇单位从业人数（万人）'])})
    })

    echarts.registerMap('ChinaMap', ChinaMap)
    chinaMapping(data, '城镇单位从业人数(万人)', 18, 791, '#d5cf6d')
  } else {
    employment.forEach(city => {
      data.push({name: city['城市'], value: RegionGeo[city['城市']].concat(city['城镇私营和个体从业人员（万人）'])})
    })
    console.log(data)
    echarts.registerMap('ChinaMap', ChinaMap)
    chinaMapping(data, '城镇私营和个体从业人数(万人)', 40, 882, '#88e799')
  }
})

onMounted(() => {
  const data = []
  employment.forEach(city => {
    data.push({name: city['城市'], value: RegionGeo[city['城市']].concat(city['城镇单位从业人数（万人）'])})
  })

  echarts.registerMap('ChinaMap', ChinaMap)
  china.value = echarts.init(document.getElementById('main'))
  chinaMapping(data, '城镇单位从业人数(万人)', 18, 791, '#d5cf6d')
})

const chinaMapping = (data, name, min, max, color) => {
  china.value.setOption({
    geo: {
      id: 'ChinaMap',
      map: 'ChinaMap',  // 注册的地图名
      show: true,
      zoom: 1.25,
      roam: false,
      // 文本标签，地区名, 控制样式，位置等等
      label: {
        show: false,
        fontSize: 12,
        color: '#fff'
      },
      // 地区区域多边形，每个地区的小块，控制样式等等 #3383c8
      itemStyle: {
        areaColor: '#457b9d',
        borderColor: '#a0d4e7',
        borderWidth: 1,
      },
    },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    visualMap: {
      min: min,
      max: max,
      left: 20,
      bottom: 30,
      calculable: true,
      textStyle: {
        color: '#000'
      },
      text: [name, ''],
    },
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
        type: 'effectScatter',
        name: name,
        data: data,
        avoidLabelOverlap: true,
        coordinateSystem: 'geo',
        symbolSize: (data) => {
          return Math.sqrt(data[2]) / 3;
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'fill',
          color: color,
          scale: 5,
        },
        label: {
          formatter: '{b}',
          position: 'top',
          show: true,
          fontSize: 13,
          color: '#FFF',
          fontWeight: 300,
        },
        labelLayout: {
          hideOverlap: true
        },
        itemStyle: {
          color: '#e8738e',
        },
        emphasis: {
          label: {
            show: true
          }
        },
        tooltip: {
          show: true,
          formatter: (param) => {
            return param.value[2]
          }
        },
        zlevel: 1,
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