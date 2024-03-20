<template>
  <div class="container">
    <div id="main" style="height: 580px;width: 980px"></div>
  </div>
</template>

<script setup>
import SiteClass from '@/assets/data/分类结果测试.json'
import {onMounted} from "vue";
import * as echarts from 'echarts';

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
      data: sites,
      type: 'scroll',
      orient: 'vertical',
      left: -15,
      textStyle: {
        color: '#000'
      },
      top: 25
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
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none !important;
  box-shadow: none;
}
</style>