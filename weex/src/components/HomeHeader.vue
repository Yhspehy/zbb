<template>
  <scroller class="header-scroller" scroll-direction="horizontal" show-scrollbar="false">
    <div v-for="bar in headerBar"
         :key="bar"
         class="text chosen"

    >
      <text>{{bar}}</text>
    </div>
  </scroller>
</template>

<script>
export default {
  data () {
    return {
      headerBar: ['推荐', '集锦', '直播'],
      chosenName: '推荐'
    }
  }
}
</script>

<style scoped>
.header-scroller {
  width: 750px;
  height: 100px;
  padding: 25px;
  font-size: 60px;
  text-align: center;
  font-weight: bold;
  color: #41b883;
  background-color: #ffffff;
}

.text {
  width: 100px;
  margin-left: 30px;
  font-size: 50px;
  text-align: center;
}

.chosen {
  color: #0000ff;
}
</style>
