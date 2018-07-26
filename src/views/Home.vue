<template>
    <div class="home">
        <img src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <div class="red">sw11221</div>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    created() {
        console.log(123);
    }
};
</script>

<style scoped lang="scss">
.red {
    color: red;
}
</style>
