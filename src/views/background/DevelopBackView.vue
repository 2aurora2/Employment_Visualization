<template>
  <div class="container justify-content-center">
    <h2 class="col-12 text-center">锦绣前程——云端就业数据可视化及预测分析平台</h2>
    <p class="content">
      “锦绣前程”旨在使求职者通过<strong>直观的、可靠的、多元的、近期的</strong>可交互可视化信息，更快速地、多维度地了解到近期多个城市的<strong>岗位招聘整体情况、城市就业失业情况、房价相关情况</strong>等，以辅助求职者择业时做出更明智的决策，消除信息壁垒，使其结合自身条件制定更好的<strong>职业规划</strong>。
    </p>
    <div class="desc row justify-content-center">
      <div class="col-5 item">
        <div class="icon">
          <img src="@/assets/image/time.svg" alt="后疫情时代" style="height: auto;width: 125px">
        </div>
        <div class="main-content">
          <h5>后疫情时代</h5>
          <p>后疫情时代的经济变革对就业市场产生了巨大影响，需要求职者更敏锐地适应变化。</p>
        </div>
      </div>
      <div class="col-5 item justify-content-center">
        <div class="icon">
          <img src="@/assets/image/need.svg" alt="需求与供给不对称" style="height: auto;width: 125px">
        </div>
        <div class="main-content">
          <h5>需求与供给不对称</h5>
          <p>就业人数持续上升，但岗位热门领域发生转移，求职者需要更灵活地调整职业选择。</p>
        </div>
      </div>
      <div class="col-5 item justify-content-center">
        <div class="icon">
          <img src="@/assets/image/site.svg" alt="就业区域差异" style="height: auto;width: 115px">
        </div>
        <div class="main-content">
          <h5>就业区域差异</h5>
          <p>不同地区的产业、经济等因素影响了就业机会和需求，导致就业区域性差异。</p>
        </div>
      </div>
      <div class="col-5 item justify-content-center">
        <div class="icon">
          <img src="@/assets/image/comp.svg" alt="公司裁员" style="height: auto;width: 120px">
        </div>
        <div class="main-content">
          <h5>公司裁员</h5>
          <p>经济形势波动使公司采取裁员措施适应市场变化，求职者需谨慎了解当前就业形势。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: fit-content;
  background: transparent;
  border: none !important;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  .desc {
    margin-top: 40px;
  }

  .content {
    width: 100%;
    margin-top: 80px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 18px;
  }
}

.item {
  display: flex;
  flex-direction: row;
  height: fit-content;
  margin-top: 20px;

  .main-content {
    margin-left: 20px;
    cursor: pointer;

    h5 {
      padding-bottom: 5px;
      border-bottom: 1px solid #969090;
    }
  }
}
</style>