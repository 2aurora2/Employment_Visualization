<template>
  <footer class="pt-5 pb-3 footer footer-dark bg-tertiary" id="footer" @click="ExpandFooter">
    <div id="button"></div>
    <div id="container" style="justify-items: center; justify-content: center">
      <div id="cont"></div>
      <div class="footer_center" style="width: 100%">
        <div class="row justify-content-md-center" style="width: 100%">
          <div class="col-12 col-md-4">
            <div class="pr-lg-5">
              <h1 class="heading h6 text-uppercase font-weight-700 mb-3">
                <strong>锦绣前程——云端就业数据可视化开拓者</strong></h1>
            </div>
          </div>
        </div>
        <div class="row justify-content-md-center" style="width: 100%">
          <div class="card-list col-2" v-for="(item, index) in option_list" :key="index">
            <div class="card card-item">
              <div class="card-body">
                <h2 class="header">{{ item.name }}</h2>
                <p class="content">{{ item.value }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-md-center" style="width: 100%">
          <div class="col-12 col-md-4">
            <div class="pr-lg-5">
              <p class="text-p">
                "锦绣前程"旨在使求职者通过直观的、可靠的、多元的、近期的可交互可视化信息，更快速、多维度地了解到近期多个城市的岗位招聘整体情况、城市就业失业情况、房价相关情况，以辅助求职者择业时做出更明智的决策，消除信息壁垒，使其结合自身条件制定更好的职业规划。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {ref} from "vue";

const option_list = [
  {
    name: "后疫情时代",
    value: "后疫情时代的经济变革对就业市场产生了巨大影响"
  },
  {
    name: "生活成本",
    value: "生活成本的不断上涨，房价和薪资水平也成为了去某个城市择业的一个重要的考虑因素"
  },
  {
    name: "需求与供给不对称",
    value: "招聘市场需求与供给不对称的情况，就业人数持续上升，岗位热门领域发生转移"
  },
  {
    name: "就业区域差异",
    value: "不同地区的产业、经济、文化等因素影响了就业机会和需求，导致就业区域性差异"
  },
  {
    name: "公司裁员",
    value: "大量公司的采取裁员与减少新员工招聘等措施"
  },
]
const isExpanded = ref(false)
const ExpandFooter = () => {
  isExpanded.value = !isExpanded.value
  if (isExpanded) {
    const dom = document.getElementById('footer')
    if (isExpanded.value) {
      dom.style.height = '42em';
    } else {
      dom.style.height = '2em';
    }
  }
}
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400);

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  background-color: lightblue;
  color: #FFF;
}

section {
  text-align: center;
}

.footer #button {
  width: 45px;
  height: 45px;
  border: #727172 12px solid;
  border-radius: 35px;
  margin: 0 auto;
  position: relative;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}

.footer #button:hover {
  width: 35px;
  height: 35px;
  border: #262537 12px solid;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  position: relative;
}

.footer {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 2em;
  overflow: hidden;
  margin: 0 auto;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  z-index: 999;
}

.footer #container {
  margin-top: 5px;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: #222133;
  opacity: 0.9;
}

.footer #cont {
  position: relative;
  top: -45px;
  right: 190px;
  width: 150px;
  height: auto;
  margin: 0 auto;
}

.footer_center {
  width: 500px;
  float: left;
  text-align: center;
  color: white;
}

.footer h3 {
  font-family: 'Helvetica', serif;
  font-size: 30px;
  font-weight: 100;
  margin-top: 70px;
  margin-left: 40px;
}

footer {
  .heading {
    font-size: 25px;
    color: white;
    margin: 30px;
  }

  .text-p {
    margin: 10px;
    color: rgb(118, 125, 125);
    font-family: 楷体, sans-serif;
    font-size: large;
  }
}

.card-list {
  display: flex;
  margin: 10px;

  .card-item {
    width: 100%;
    align-items: stretch;
    background-color: #808191;

    .header {
      justify-content: center;
      font-size: 20px;
      font-weight: bolder;
    }

    .content {
      font-size: small;
    }
  }
}
</style>
