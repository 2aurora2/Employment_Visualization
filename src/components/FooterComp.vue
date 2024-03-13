<template>
  <footer class="pt-5 pb-3 footer footer-dark bg-tertiary">
    <div id="button"></div>
    <div id="container" style="justify-items: center; justify-content: center">
      <div id="cont"></div>
      <div class="footer_center" style="width: 100%">
        <div class="row justify-content-md-center" style="width: 100%">
          <div class="col-12 col-md-4">
            <div class="pr-lg-5">
              <h1 class="heading h6 text-uppercase font-weight-700 mb-3"><strong>锦绣前程——云端就业数据可视化开拓者</strong></h1>
            </div>
          </div>
        </div>
        <div class="row justify-content-md-center" style="width: 100%">
          <!--TODO: 轮播图-->
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

.footer:hover {
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  height: 40em;
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
</style>
