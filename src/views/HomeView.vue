<template>
  <div class="container">
    <div class="sidebar">
      <span class="logo">S</span>
      <router-link class="logo-expand" to="/" style="font-size: 30px">锦绣前程</router-link>
      <div class="side-wrapper">
        <div class="side-title">招聘岗位信息分析</div>
        <div class="side-menu">
          <router-link class="sidebar-link discover" href="#" to="/404">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>
            </svg>
            整体情况分析
          </router-link>
          <router-link class="sidebar-link trending" href="#" to="/recruitment-info/difficulty-coefficient-analysis">
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
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"/>
            </svg>
            薪资水平分布分析
          </router-link>
        </div>
      </div>
      <div class="side-wrapper">
        <div class="side-title">城市就业与失业人数分析</div>
        <div class="side-menu">
          <router-link class="sidebar-link" href="#" to="/404">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                  d="M23,15h-.667c-.25,0-.498,.019-.745,.057l-7.046-5.284,1.688-1.616c.399-.382,.413-1.016,.031-1.414-.383-.399-1.017-.412-1.414-.031l-4.173,3.995c-.208,.208-.491,.315-.788,.29-.298-.024-.56-.175-.739-.425-.274-.38-.19-.975,.168-1.334l4.703-4.429c.891-.837,2.284-1.042,3.374-.495l2.316,1.158c.69,.345,1.464,.527,2.235,.527h1.056c.553,0,1-.447,1-1s-.447-1-1-1h-1.056c-.463,0-.928-.109-1.342-.316l-2.314-1.158c-1.824-.913-4.153-.574-5.641,.828l-.618,.582-.7-.638c-.919-.837-2.109-1.298-3.39-1.298-.771,0-1.54,.182-2.227,.525l-2.314,1.158c-.415,.207-.88,.316-1.343,.316H1c-.553,0-1,.447-1,1s.447,1,1,1h1.056c.771,0,1.545-.183,2.236-.527l2.316-1.158c1.022-.514,2.458-.375,3.374,.462l.587,.535-2.646,2.492c-1.073,1.072-1.244,2.767-.398,3.938,.52,.723,1.553,1.259,2.444,1.259,.793,0,1.554-.312,2.104-.863l1.006-.963,6.346,4.759c-.031,.022-6.198,4.646-6.198,4.646-.723,.562-1.732,.562-2.47-.011l-6.091-4.568c-.859-.645-1.925-1-3-1h-.667c-.553,0-1,.447-1,1s.447,1,1,1h.667c.645,0,1.284,.213,1.8,.6l6.077,4.558c.725,.564,1.594,.846,2.461,.846,.862,0,1.723-.279,2.437-.835l6.093-4.568c.515-.387,1.154-.6,1.799-.6h.667c.553,0,1-.447,1-1s-.447-1-1-1Z"/>
            </svg>
            就业人数/GDP分析
          </router-link>
          <router-link class="sidebar-link" href="#" to="/employment-unemployment-num-analysis/unemployment-num-analysis">
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
        <div class="side-title">就业环境分析</div>
        <div class="side-menu">
          <router-link class="sidebar-link" href="#" to="/404">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                  d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z"/>
            </svg>
            城市房价分析预测
          </router-link>
        </div>
      </div>
      <div class="side-wrapper">
        <div class="side-title">大模型助手</div>
        <div class="side-menu">
          <router-link class="sidebar-link" href="#" to="/404">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                  d="M14.5,13A1.5,1.5,0,1,1,16,11.5,1.5,1.5,0,0,1,14.5,13Zm9.425,5.144A5,5,0,0,1,19,24H15a1,1,0,0,1-1-1V20.737A7.959,7.959,0,0,1,12,21a7.84,7.84,0,0,1-2-.27V23a1,1,0,0,1-1,1H5A5,5,0,0,1,.075,18.144l.3-1.74a2.939,2.939,0,0,1,5.337-1.138C6.976,17.124,9.409,19,12,19h0c3.13,0,6.214-2.779,7.13-5.376a1.03,1.03,0,0,1,.959-.667l.432.007A1.461,1.461,0,0,0,22,11.5a1.5,1.5,0,0,0-1.23-1.474,1,1,0,0,1-.816-.879A7.977,7.977,0,0,0,12,2C6.423,2,4.892,5.628,3.662,8.544c-.224.527-.435,1.03-.662,1.483A13.354,13.354,0,0,0,13.186,4.419a1,1,0,0,1,1.628,1.162,15.089,15.089,0,0,1-4.956,4.467,1.5,1.5,0,1,1-1.725.84,15.807,15.807,0,0,1-7.257,1.1A1,1,0,0,1,.5,10.136,6.372,6.372,0,0,0,1.819,7.767C3.124,4.674,5.1,0,12,0a9.972,9.972,0,0,1,9.85,8.274A3.5,3.5,0,0,1,24,11.5a3.428,3.428,0,0,1-.854,2.257c.007.026.025.047.03.075ZM8,19.94a11.088,11.088,0,0,1-3.941-3.552.946.946,0,0,0-.783-.424H3.259a.945.945,0,0,0-.911.782l-.3,1.739A3,3,0,0,0,5,22H8Zm13.955-1.455-.628-3.613a3.384,3.384,0,0,1-.579.086A11.033,11.033,0,0,1,16,19.952V22h3a3,3,0,0,0,2.955-3.514Z"/>
            </svg>
            小锦
          </router-link>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="header">
      </div>
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
  --theme-bg: #1f1d2b;
  --body-color: #808191;
  --button-bg: #353340;
  --border-color: rgb(128 129 145 / 24%);
  --video-bg: #252936;
  --delay: 0s;
}

.container {
  background-color: var(--theme-bg);
  opacity: 0.9;
  max-width: 1240px;
  max-height: 850px;
  height: 95vh;
  display: flex;
  overflow: hidden;
  width: 100%;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  margin-top: 10px;
}

.sidebar {
  width: 250px;
  height: 100%;
  padding: 35px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: auto;
  overflow-x: hidden;

  .logo {
    display: none;
    width: 30px;
    height: 30px;
    background-color: #22b07d;
    flex-shrink: 0;
    color: #fff;
    align-items: center;
    border-radius: 50%;
    justify-content: center;

    &-expand {
      text-decoration: none;
      color: #fff;
      font-size: 19px;
      font-weight: 600;
      line-height: 34px;
      position: sticky;
      top: 0;

      &:before {
        content: "";
        position: absolute;
        top: -30px;
        left: 0;
        background: var(--theme-bg);
        width: 200px;
        height: 70px;
        z-index: -1;
      }
    }
  }

  &-link {
    &:hover,
    &.is-active {
      color: #fff;
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

    .logo-expand,
    .side-title {
      display: none;
    }

    .logo {
      display: flex;
    }

    .side-wrapper {
      width: 30px;
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
      color: #fff;
    }
  }
}

.side-title {
  font-size: 15px;
  letter-spacing: 0.07em;
  margin-bottom: 24px;
  color: aliceblue;
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
  flex-direction: column;
  padding: 0 30px 30px;
  flex-grow: 1;
  overflow: auto;
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