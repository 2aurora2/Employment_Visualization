<template>
  <div class="container">
    <div class="tips">
      <div class="tip-icon">
        <img src="@/assets/image/tip.svg" alt="tip" style="width: 20px;height: auto;cursor: pointer"
             @mouseover="showTips">
        <p class="tip-content" id="content">
          薪资水平是通过层次聚类得到的，饼图中由内到外分为六个批次(薪资水平从高到低)
        </p>
      </div>
    </div>
    <div id="main" style="height: 580px;width: 980px"></div>
  </div>
</template>

<script setup>
import SiteClass from '@/assets/data/分类结果测试.json'
import {onMounted} from "vue";
import * as echarts from 'echarts';

const showTips = () => {
  const dom = document.getElementById('content')
  dom.style.height = '85px';
  dom.style.padding = '5px 6px 5px 10px'

  setTimeout(() => {
    dom.style.height = '0'
    dom.style.padding = '0'
  }, 3000)
}

onMounted(() => {
  const siteClass = Array.isArray(SiteClass) ? SiteClass : []
  const sites = Array.from(new Set(siteClass.map(item => item["site"])));

  const pieOriginData = {}
  for (let i = 0; i < 6; ++i) {
    const tmpList = siteClass.filter(item => item['revenue_class'] === i)
    pieOriginData[i.toString()] = []
    sites.forEach(site => {
      let filter = tmpList.filter(item => item.site === site);
      let tmp = {
        value: filter.length,
        name: site
      }
      pieOriginData[i.toString()].push(tmp)
    })
  }

  const classSort = ['1', '4', '5', '2', '0', '3']

  const dom = echarts.init(document.getElementById('main'))
  dom.setOption({
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    toolbox: {
      bottom: 0,
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
          show: true,
          title: '重新加载'
        }
      }
    },
    legend: {
      data: sites,
      type: 'scroll',
      orient: 'vertical',
      left: -10,
      textStyle: {
        color: '#000'
      },
      top: 25,
      inactiveColor: '#9b8a8a',
    },
    avoidLabelOverlap: true,
    itemStyle: {
      borderRadius: 5
    },
    series: [
      {
        name: '第一批次',
        type: 'pie',
        selectedMode: 'single',
        radius: ['5%', '18%'],
        label: {
          show: false
        },
        roseType: 'radius',
        labelLine: {
          show: false
        },
        data: pieOriginData[classSort[0]]
      },
      {
        name: '第二批次',
        type: 'pie',
        radius: ['23%', '30%'],
        label: {
          show: false
        },
        roseType: 'radius',
        labelLine: {
          show: false
        },
        data: pieOriginData[classSort[1]]
      },
      {
        name: '第三批次',
        type: 'pie',
        radius: ['34%', '41%'],
        label: {
          show: false
        },
        roseType: 'radius',
        labelLine: {
          show: false
        },
        data: pieOriginData[classSort[2]]
      },
      {
        name: '第四批次',
        type: 'pie',
        radius: ['45%', '52%'],
        label: {
          show: false
        },
        roseType: 'radius',
        labelLine: {
          show: false
        },
        data: pieOriginData[classSort[3]]
      },
      {
        name: '第五批次',
        type: 'pie',
        radius: ['56%', '63%'],
        label: {
          show: false
        },
        roseType: 'radius',
        labelLine: {
          show: false
        },
        data: pieOriginData[classSort[4]]
      },
      {
        name: '第六批次',
        type: 'pie',
        radius: ['70%', '90%'],
        roseType: 'radius',
        data: pieOriginData[classSort[5]],
        labelLine: {
          length: 30
        },
        label: {
          formatter: ' {b|{b}：} {per|{d}%}  ',
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            b: {
              color: '#4C5058',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 33
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
            }
          }
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
        width: 215px;
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