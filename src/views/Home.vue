<template>
    <div class="home">
        <img src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <div class="red">111</div>

    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    }
};
</script>

<style scoped lang="scss">
.red {
    color: red;
}
</style>
