<template>
  <div class="container">
    <div class="user-choose">
      <div class="select">
        <select id="city-choose" class="form-select" aria-label="Default select example" v-model="curCity">
        </select>
      </div>
      <div class="radio">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="keyword" id="keyword1" value="0" checked v-model="curType">
          <label class="form-check-label" for="keyword1">公司名称</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="keyword" id="keyword2" value="1" v-model="curType">
          <label class="form-check-label" for="keyword2">岗位类型</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="keyword" id="keyword3" value="2" v-model="curType">
          <label class="form-check-label" for="keyword3">岗位特点</label>
        </div>
      </div>
    </div>
    <div class="keyword-cloud">
      <div id="main" style="height: 600px;width: 950px"></div>
    </div>
  </div>
</template>

<script setup>
import Keyword from '@/assets/data/关键字.json'
import {onMounted, ref, watch} from "vue"
import * as echarts from 'echarts'
import "echarts-wordcloud"

const keyword = JSON.parse(JSON.stringify(Keyword))
const cityArray = Object.keys(keyword)

const curCity = ref('太原')
const curType = ref(0)

const cityWatch = watch(curCity, (newVal, oldVal) => {
  keywordCloud()
})

const typeWatch = watch(curType, (newVal, oldVal) => {
  keywordCloud()
})

const keywordCloud = () => {
  const wordCloud = echarts.init(document.getElementById("main"))
  const city = curCity.value
  const type = Number(curType.value) === 0 ? "com_name" : (Number(curType.value) === 1 ? "job" : "feature")
  const keywordCount = keyword[city][type]
  wordCloud.setOption({
    // 核心配置
    series: [
      {
        type: 'wordCloud',
        sizeRange: [8, 46],
        rotationRange: [0, 0],
        gridSize: 0,
        shape: 'diamond',
        left: 'center',
        top: 'center',
        width: '100%',
        height: '90%',
        layoutAnimation: true,
        textStyle: {
          color: () => {
            return 'rgb(' + [
              Math.round(Math.random() * 110 + 80),
              Math.round(Math.random() * 110 + 80),
              Math.round(Math.random() * 110 + 80)
            ].join(',') + ')';
          }
        },
        data: keywordCount,
        emphasis: {
          textStyle: {
            fontWeight: 'bold',
            color: '#000000'
          }
        }
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
    }
  })
}

onMounted(() => {
  const dom = document.getElementById("city-choose")
  cityArray.forEach(city => {
    const option = document.createElement('option');
    option.text = city;
    option.value = city;
    dom.add(option);
  })
  keywordCloud()
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

  .user-choose {
    display: flex;
    height: 50px;
    width: 100%;
    margin-top: 25px;

    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    #city-choose {
      width: 200px;
    }

    .radio {
      height: 40px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      .form-check {
        color: #000000;
        margin-left: 10px;
      }
    }
  }
}
</style>