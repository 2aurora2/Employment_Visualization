<template>
  <div class="container">
    <div class="sidebar">
      <router-link class="logo-expand" to="/" style="font-size: 30px">
        <img src="../../public/logo.png" alt="logo" style="width: 40px;height: 40px">
        <span style="margin-left: 5px">锦绣前程</span>
      </router-link>
      <div class="side-wrappers">
        <div class="side-wrapper">
          <div class="side-title">招聘岗位信息分析</div>
          <div class="side-menu">
            <router-link class="sidebar-link discover" to="/recruitment-info/job-recruitment-overall-analysis">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>
              </svg>
              整体情况分析
            </router-link>
            <router-link class="sidebar-link trending" to="/recruitment-info/difficulty-coefficient-analysis">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"></path>
              </svg>
              难度系数分析
            </router-link>
            <router-link class="sidebar-link" href="#" to="/recruitment-info/keyword-heat-analysis">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"/>
              </svg>
              关键词热度分析
            </router-link>
            <router-link class="sidebar-link" to="/recruitment-info/salary-distribution-analysis">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <g id="_01_align_center">
                  <path
                      d="M16.5,0c-4.206,0-7.5,1.977-7.5,4.5v2.587c-.483-.057-.985-.087-1.5-.087C3.294,7,0,8.977,0,11.5v8c0,2.523,3.294,4.5,7.5,4.5,3.407,0,6.216-1.297,7.16-3.131,.598,.087,1.214,.131,1.84,.131,4.206,0,7.5-1.977,7.5-4.5V4.5c0-2.523-3.294-4.5-7.5-4.5Zm5.5,12.5c0,1.18-2.352,2.5-5.5,2.5-.512,0-1.014-.035-1.5-.103v-1.984c.49,.057,.992,.087,1.5,.087,2.194,0,4.14-.538,5.5-1.411v.911ZM2,14.589c1.36,.873,3.306,1.411,5.5,1.411s4.14-.538,5.5-1.411v.911c0,1.18-2.352,2.5-5.5,2.5s-5.5-1.32-5.5-2.5v-.911Zm20-6.089c0,1.18-2.352,2.5-5.5,2.5-.535,0-1.06-.038-1.566-.112-.193-.887-.8-1.684-1.706-2.323,.984,.28,2.092,.435,3.272,.435,2.194,0,4.14-.538,5.5-1.411v.911Zm-5.5-6.5c3.148,0,5.5,1.32,5.5,2.5s-2.352,2.5-5.5,2.5-5.5-1.32-5.5-2.5,2.352-2.5,5.5-2.5ZM7.5,9c3.148,0,5.5,1.32,5.5,2.5s-2.352,2.5-5.5,2.5-5.5-1.32-5.5-2.5,2.352-2.5,5.5-2.5Zm0,13c-3.148,0-5.5-1.32-5.5-2.5v-.911c1.36,.873,3.306,1.411,5.5,1.411s4.14-.538,5.5-1.411v.911c0,1.18-2.352,2.5-5.5,2.5Zm9-3c-.512,0-1.014-.035-1.5-.103v-1.984c.49,.057,.992,.087,1.5,.087,2.194,0,4.14-.538,5.5-1.411v.911c0,1.18-2.352,2.5-5.5,2.5Z"/>
                </g>
              </svg>
              职业薪资水平分析
            </router-link>
            <router-link class="sidebar-link" to="/recruitment-info/salary-site-analysis">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM22,12a9.938,9.938,0,0,1-1.662,5.508l-1.192-1.193A.5.5,0,0,1,19,15.962V15a3,3,0,0,0-3-3H13a1,1,0,0,1-1-1v-.5a.5.5,0,0,1,.5-.5A2.5,2.5,0,0,0,15,7.5v-1a.5.5,0,0,1,.5-.5h1.379a2.516,2.516,0,0,0,1.767-.732l.377-.377A9.969,9.969,0,0,1,22,12Zm-19.951.963,3.158,3.158A2.978,2.978,0,0,0,7.329,17H10a1,1,0,0,1,1,1v3.949A10.016,10.016,0,0,1,2.049,12.963ZM13,21.949V18a3,3,0,0,0-3-3H7.329a1,1,0,0,1-.708-.293L2.163,10.249A9.978,9.978,0,0,1,17.456,3.63l-.224.224A.507.507,0,0,1,16.879,4H15.5A2.5,2.5,0,0,0,13,6.5v1a.5.5,0,0,1-.5.5A2.5,2.5,0,0,0,10,10.5V11a3,3,0,0,0,3,3h3a1,1,0,0,1,1,1v.962a2.516,2.516,0,0,0,.732,1.767l1.337,1.337A9.971,9.971,0,0,1,13,21.949Z"/>
              </svg>
              各地区薪资水平聚类分析
            </router-link>
          </div>
        </div>
        <div class="side-wrapper">
          <div class="side-title">城市从业与失业人数分析</div>
          <div class="side-menu">
            <router-link class="sidebar-link" href="#"
                         to="/employment-unemployment-num-analysis/employment-num-analysis">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M23,15h-.667c-.25,0-.498,.019-.745,.057l-7.046-5.284,1.688-1.616c.399-.382,.413-1.016,.031-1.414-.383-.399-1.017-.412-1.414-.031l-4.173,3.995c-.208,.208-.491,.315-.788,.29-.298-.024-.56-.175-.739-.425-.274-.38-.19-.975,.168-1.334l4.703-4.429c.891-.837,2.284-1.042,3.374-.495l2.316,1.158c.69,.345,1.464,.527,2.235,.527h1.056c.553,0,1-.447,1-1s-.447-1-1-1h-1.056c-.463,0-.928-.109-1.342-.316l-2.314-1.158c-1.824-.913-4.153-.574-5.641,.828l-.618,.582-.7-.638c-.919-.837-2.109-1.298-3.39-1.298-.771,0-1.54,.182-2.227,.525l-2.314,1.158c-.415,.207-.88,.316-1.343,.316H1c-.553,0-1,.447-1,1s.447,1,1,1h1.056c.771,0,1.545-.183,2.236-.527l2.316-1.158c1.022-.514,2.458-.375,3.374,.462l.587,.535-2.646,2.492c-1.073,1.072-1.244,2.767-.398,3.938,.52,.723,1.553,1.259,2.444,1.259,.793,0,1.554-.312,2.104-.863l1.006-.963,6.346,4.759c-.031,.022-6.198,4.646-6.198,4.646-.723,.562-1.732,.562-2.47-.011l-6.091-4.568c-.859-.645-1.925-1-3-1h-.667c-.553,0-1,.447-1,1s.447,1,1,1h.667c.645,0,1.284,.213,1.8,.6l6.077,4.558c.725,.564,1.594,.846,2.461,.846,.862,0,1.723-.279,2.437-.835l6.093-4.568c.515-.387,1.154-.6,1.799-.6h.667c.553,0,1-.447,1-1s-.447-1-1-1Z"/>
              </svg>
              从业人数分析
            </router-link>
            <router-link class="sidebar-link" href="#"
                         to="/employment-unemployment-num-analysis/unemployment-num-analysis">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/>
                <path d="M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z"/>
                <rect x="11" y="17" width="2" height="2" rx="1"/>
              </svg>
              失业人数分析
            </router-link>
          </div>
        </div>
        <div class="side-wrapper">
          <div class="side-title">就业环境分析及预测</div>
          <div class="side-menu">
            <router-link class="sidebar-link" href="#" to="/employment-environment/medical-education-analysis">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M23.94,14.658l-3.005-8.265c-.461-1.267-1.519-2.21-2.829-2.523l-5.105-1.221V1c0-.552-.448-1-1-1s-1,.448-1,1v1.17L6.531,1.102c-1.514-.404-3.061,.404-3.59,1.869L.063,10.649c-.042,.112-.063,.653-.063,.653,0,2.506,1.871,4.567,4.26,4.692,1.251,.063,2.434-.372,3.338-1.229,.891-.846,1.402-2.036,1.402-3.264,0,0-.022-.745-.067-.859L6.006,3.032c.012,.002,4.994,1.194,4.994,1.194V22H5c-.552,0-1,.448-1,1s.448,1,1,1h14c.552,0,1-.448,1-1s-.448-1-1-1h-6V4.705l4.641,1.11c.198,.047,.384,.124,.554,.224l-3.135,8.619c-.04,.109-.06,.644-.06,.644,0,2.506,2,4.698,4.503,4.698,1.158,0,2.249-.434,3.094-1.236,.892-.846,1.403-2.036,1.403-3.264,0,0,0-.538-.06-.842Zm-19.576-.662c-1.081-.057-1.986-.902-2.266-1.997H6.95c-.1,.499-.35,.954-.729,1.313-.502,.478-1.165,.719-1.856,.683Zm2.18-3.997H2.443l2.024-5.401,2.078,5.401Zm12.956-1.699l2.072,5.699h-4.145l2.072-5.699Zm-.136,9.695c-1.081-.057-1.986-.902-2.266-1.997h4.851c-.1,.499-.35,.954-.729,1.313-.503,.478-1.168,.717-1.856,.683Z"/>
              </svg>
              医疗与教育分析
            </router-link>
            <router-link class="sidebar-link" href="#" to="/employment-environment/house-price-analysis">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z"/>
              </svg>
              城市房价分析预测
            </router-link>
            <router-link class="sidebar-link" href="#" to="/employment-environment/insurance-analysis">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M18.581,2.14,12.316.051a1,1,0,0,0-.632,0L5.419,2.14A4.993,4.993,0,0,0,2,6.883V12c0,7.563,9.2,11.74,9.594,11.914a1,1,0,0,0,.812,0C12.8,23.74,22,19.563,22,12V6.883A4.993,4.993,0,0,0,18.581,2.14ZM20,12c0,5.455-6.319,9.033-8,9.889-1.683-.853-8-4.42-8-9.889V6.883A3,3,0,0,1,6.052,4.037L12,2.054l5.948,1.983A3,3,0,0,1,20,6.883Z"/>
                <path
                    d="M15.3,8.3,11.112,12.5,8.868,10.16a1,1,0,1,0-1.441,1.386l2.306,2.4a1.872,1.872,0,0,0,1.345.6h.033a1.873,1.873,0,0,0,1.335-.553l4.272-4.272A1,1,0,0,0,15.3,8.3Z"/>
              </svg>
              保险支出分析预测
            </router-link>
            <router-link class="sidebar-link" href="#" to="/employment-environment/revenue-analysis">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M24,12c0-1.626-.714-3.16-1.925-4.124,.14-1.622-.44-3.211-1.59-4.362-1.15-1.149-2.734-1.731-4.277-1.555-1.048-1.245-2.582-1.959-4.208-1.959s-3.16,.714-4.124,1.925c-1.624-.14-3.212,.439-4.362,1.59-1.15,1.15-1.729,2.74-1.555,4.277-1.245,1.048-1.959,2.582-1.959,4.208s.714,3.16,1.925,4.124c-.14,1.622,.44,3.212,1.59,4.362,1.15,1.151,2.744,1.732,4.277,1.555,1.048,1.245,2.582,1.959,4.208,1.959s3.16-.714,4.124-1.925c1.618,.139,3.21-.439,4.361-1.59,1.149-1.15,1.729-2.74,1.555-4.277,1.246-1.048,1.96-2.582,1.96-4.208Zm-3.247,2.678c-.479,.403-.724,.993-.67,1.617,.088,1.033-.28,2.045-1.012,2.776-.732,.732-1.742,1.099-2.776,1.012-.626-.051-1.213,.191-1.616,.67-.668,.793-1.644,1.248-2.679,1.248s-2.011-.455-2.679-1.248c-.367-.435-.887-.676-1.447-.676-.056,0-.113,.002-.169,.007-1.027,.089-2.044-.28-2.776-1.012-.731-.732-1.1-1.744-1.011-2.776,.053-.624-.19-1.212-.67-1.617-.793-.667-1.248-1.644-1.248-2.678s.455-2.011,1.248-2.679c.479-.404,.723-.993,.669-1.617-.088-1.032,.28-2.044,1.012-2.776,.732-.731,1.744-1.097,2.776-1.011,.621,.049,1.212-.191,1.617-.67,.667-.793,1.644-1.248,2.678-1.248s2.011,.455,2.679,1.248c.403,.478,.991,.726,1.617,.669,1.025-.084,2.043,.28,2.775,1.012,.731,.731,1.1,1.744,1.012,2.776-.054,.624,.19,1.213,.67,1.617,.792,.667,1.247,1.644,1.247,2.678s-.455,2.011-1.247,2.678Zm-4.753-.678c0,1.654-1.346,3-3,3v1c0,.552-.448,1-1,1s-1-.448-1-1v-1h-.268c-1.068,0-2.063-.574-2.598-1.499-.276-.478-.113-1.089,.365-1.366,.477-.277,1.089-.113,1.366,.365,.178,.308,.511,.5,.867,.5h2.268c.552,0,1-.449,1-1,0-.378-.271-.698-.644-.76l-3.042-.507c-1.341-.223-2.315-1.373-2.315-2.733,0-1.654,1.346-3,3-3v-1c0-.552,.448-1,1-1s1,.448,1,1v1h.268c1.067,0,2.063,.575,2.598,1.5,.277,.478,.113,1.089-.364,1.366-.48,.276-1.092,.113-1.366-.365-.179-.309-.511-.5-.867-.5h-2.268c-.551,0-1,.449-1,1,0,.378,.271,.698,.644,.76l3.041,.507c1.342,.223,2.315,1.373,2.315,2.733Z"/>
              </svg>
              人均可支配收入分析预测
            </router-link>
          </div>
        </div>
        <div class="side-wrapper">
          <div class="side-title">大模型助手与开发背景</div>
          <div class="side-menu">
            <router-link class="sidebar-link" href="#" to="/model-assistant">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M14.5,13A1.5,1.5,0,1,1,16,11.5,1.5,1.5,0,0,1,14.5,13Zm9.425,5.144A5,5,0,0,1,19,24H15a1,1,0,0,1-1-1V20.737A7.959,7.959,0,0,1,12,21a7.84,7.84,0,0,1-2-.27V23a1,1,0,0,1-1,1H5A5,5,0,0,1,.075,18.144l.3-1.74a2.939,2.939,0,0,1,5.337-1.138C6.976,17.124,9.409,19,12,19h0c3.13,0,6.214-2.779,7.13-5.376a1.03,1.03,0,0,1,.959-.667l.432.007A1.461,1.461,0,0,0,22,11.5a1.5,1.5,0,0,0-1.23-1.474,1,1,0,0,1-.816-.879A7.977,7.977,0,0,0,12,2C6.423,2,4.892,5.628,3.662,8.544c-.224.527-.435,1.03-.662,1.483A13.354,13.354,0,0,0,13.186,4.419a1,1,0,0,1,1.628,1.162,15.089,15.089,0,0,1-4.956,4.467,1.5,1.5,0,1,1-1.725.84,15.807,15.807,0,0,1-7.257,1.1A1,1,0,0,1,.5,10.136,6.372,6.372,0,0,0,1.819,7.767C3.124,4.674,5.1,0,12,0a9.972,9.972,0,0,1,9.85,8.274A3.5,3.5,0,0,1,24,11.5a3.428,3.428,0,0,1-.854,2.257c.007.026.025.047.03.075ZM8,19.94a11.088,11.088,0,0,1-3.941-3.552.946.946,0,0,0-.783-.424H3.259a.945.945,0,0,0-.911.782l-.3,1.739A3,3,0,0,0,5,22H8Zm13.955-1.455-.628-3.613a3.384,3.384,0,0,1-.579.086A11.033,11.033,0,0,1,16,19.952V22h3a3,3,0,0,0,2.955-3.514Z"/>
              </svg>
              小锦
            </router-link>
            <router-link class="sidebar-link trending" to="/develop-background">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"></path>
              </svg>
              开发背景
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="main-container">
        <div class="main-blogs">
          <router-view v-slot="{Component,route}">
            <transition name="fade" mode="out-in">
              <component :is="Component" :key="route.path"/>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import $ from 'jquery'

$(function () {
  $(".sidebar-link").click(function () {
    $(".sidebar-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(window)
    .resize(function () {
      if ($(window).width() > 1090) {
        $(".sidebar").removeClass("collapse");
      } else {
        $(".sidebar").addClass("collapse");
      }
    })
    .resize();

</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
}

:root {
  --body-font: "Inter", sans-serif;
  --theme-bg: rgba(255, 255, 255, 0.9);
  --body-color: #808191;
  --button-bg: #aee8df;
  --border-color: rgb(128 129 145 / 24%);
  --video-bg: #252936;
  --delay: 0s;
}

.container {
  background-color: var(--theme-bg);
  opacity: 0.9;
  max-width: 1240px;
  max-height: 800px;
  height: 95vh;
  display: flex;
  width: 100%;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  margin-top: 17px;
}

.sidebar {
  width: 250px;
  height: 100%;
  padding: 35px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;

  .side-wrappers {
    width: 220px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .logo {
    display: none;
    width: 30px;
    height: 30px;
    background-color: #22b07d;
    flex-shrink: 0;
    color: #000;
    align-items: center;
    border-radius: 50%;
    justify-content: center;

    &-expand {
      text-decoration: none;
      color: #000;
      font-size: 19px;
      font-weight: 600;
      line-height: 34px;
      position: sticky;
      top: 0;

      &:before {
        content: "";
        position: absolute;
        top: -40px;
        left: 0;
        width: 300px;
        height: 70px;
        z-index: -1;
      }
    }
  }

  &-link {
    &:hover,
    &.is-active {
      color: #000;
      font-weight: 600;

      &:nth-child(2n + 1) {
        svg {
          background: #ff7551;
        }
      }

      &:nth-child(2n) {
        svg {
          background: #32a7e2;
        }
      }

      &:nth-child(2n + 3) {
        svg {
          background: #6c5ecf;
        }
      }
    }
  }

  &.collapse {
    width: 90px;
    border-right: 1px solid var(--border-color);

    .logo-expand {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
    }

    .logo-expand,
    .side-title {
      display: none;
    }

    .logo {
      display: flex;
    }

    .side-wrapper {
      width: 30px;
      overflow: auto;
    }

    .side-menu svg {
      margin-right: 30px;
    }
  }
}

@keyframes bottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

.side-menu {
  display: flex;
  flex-direction: column;
  font-size: 14px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--body-color);

    & + a {
      margin-top: 26px;
    }
  }

  svg {
    width: 30px;
    padding: 8px;
    border-radius: 10px;
    background-color: var(--button-bg);
    flex-shrink: 0;
    margin-right: 16px;

    &:hover {
      color: #000;
    }
  }
}

.side-title {
  font-size: 15px;
  letter-spacing: 0.07em;
  margin-bottom: 30px;
  color: #000;
}

.side-wrapper {
  padding: 20px 0;
  width: 200px;

  & + & + & {
    border-bottom: none;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.header {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 30px;
}

.search-bar {
  height: 34px;
  display: flex;
  width: 100%;
  max-width: 450px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: var(--button-bg);
    border-radius: 8px;
    font-family: var(--body-font);
    font-size: 14px;
    font-weight: 500;
    padding: 0 40px 0 16px;
    box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: 96%;
    color: #fff;
  }
}

.user {
  &-settings {
    display: flex;
    align-items: center;
    padding-left: 20px;
    flex-shrink: 0;
    margin-left: auto;

    svg {
      width: 10px;
      flex-shrink: 0;
      @media screen and (max-width: 575px) {
        display: none;
      }
    }

    .notify {
      position: relative;

      svg {
        width: 20px;
        margin-left: 24px;
        flex-shrink: 0;
      }

      .notification {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #ec5252;
        position: absolute;
        right: 1px;
        border: 1px solid var(--theme-bg);
        top: -2px;
        @media screen and (max-width: 575px) {
          display: none;
        }
      }
    }
  }

  &-img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 50%;
  }

  &-name {
    color: #fff;
    font-size: 14px;
    margin: 0 6px 0 12px;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
}

.main-container {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0 30px 30px;
  flex-grow: 1;
  overflow: auto;
  margin-top: 25px;
}

.anim {
  animation: bottom 0.8s var(--delay) both;
}

.main-header {
  font-size: 30px;
  color: #fff;
  font-weight: 700;
  padding-bottom: 20px;
  position: sticky;
  top: 0;
  left: 0;
  background: linear-gradient(
          to bottom,
          #1f1d2b 0%,
          #1f1d2b 78%,
          rgb(31 29 43 / 0%) 100%
  );
  z-index: 11;
}

.small-header {
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  margin: 30px 0 20px;
}

.main {
  &-blogs {
    display: flex;
    align-items: center;
  }

  &-blog__author {
    display: flex;
    align-items: center;
    padding-bottom: 10px;

    &.tips {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }

  &-blog__title {
    font-size: 25px;
    max-width: 12ch;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    margin-bottom: 30px;
  }

  &-blog {
    background-image: url("https://assets.codepen.io/3364143/skate-removebg-preview.png");
    background-size: 80%;
    background-position-x: 150px;
    background-color: #31abbd;
    display: flex;
    flex-direction: column;
    width: 65%;
    padding: 30px;
    border-radius: 20px;
    align-self: stretch;
    overflow: hidden;
    position: relative;
    transition: background 0.3s;
    background-repeat: no-repeat;

    & + & {
      margin-left: 20px;
      width: 35%;
      background-image: url(https://c0.anyrgb.com/images/1020/945/venice-beach-2018-outdoors-sport-men-jumping-desert-sunset-extreme-sports-one-person-action.jpg);
      background-color: unset;
      background-position-x: 0;
      background-size: 139%;
      filter: saturate(1.4);

      .author-img {
        border-color: rgb(255 255 255 / 75%);
        margin-top: 14px;
      }

      .author-img__wrapper svg {
        border-color: #ffe6b2;
        color: #e7bb7d;
      }

      .author-detail {
        margin-left: 0;
      }
    }

    @media screen and (max-width: 905px) {
      &,
      & + .main-blog {
        width: 50%;
        padding: 30px;
      }
      & {
        background-size: cover;
        background-position-x: center;
        background-blend-mode: overlay;
      }
    }

    &__time {
      background: rgba(21, 13, 13, 0.44);
      color: #fff;
      padding: 3px 8px;
      font-size: 12px;
      border-radius: 6px;
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }
}

@media screen and (max-width: 735px) {
  .main-blogs {
    flex-wrap: wrap;
  }
  .main-blog,
  .main-blog + .main-blog {
    width: 100%;
  }
  .videos {
    grid-template-columns: 1fr;
  }
  .main-blog + .main-blog {
    margin-left: 0;
    margin-top: 20px;
    background-size: cover;
  }
}

@media screen and (max-width: 475px) {
  .main-blog__title {
    font-size: 20px;
  }
  .author-name {
    font-size: 14px;
  }
  .main-blog__author {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  .author-detail {
    margin-left: 0;
  }
  .main-blog .author-img {
    margin-top: 14px;
  }
  .main-container {
    padding: 0 20px 20px;
  }
  .header {
    padding: 20px;
  }
  .sidebar.collapse {
    width: 40px;
  }
  .sidebar {
    align-items: center;
  }
  body {
    padding: 0;
  }
  .container {
    height: 100vh;
    border-radius: 0;
    max-height: 100%;
  }
}


::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(21 20 26 / 63%);
  border-radius: 10px;
}
</style>