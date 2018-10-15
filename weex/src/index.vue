<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <text @click="jump">111111</text>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import { getBaseURL } from './utils'
var navigator = weex.requireModule('navigator')
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  methods: {
    jump () {
      navigator.push({
        url: getBaseURL('home'),
        animated: 'true'
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
    justify-content: center;
    align-items: center;
}
.logo {
    width: 424px;
    height: 200px;
}
.greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41b883;
}
.message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
}
</style>
