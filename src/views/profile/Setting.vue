<template>
    <div class="setting">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'setting',
    data() {
        return {
            a: 1
        };
    },
    created() {
        console.log('created');
    },
    activated() {
        console.log('activated');
        this.a += 1;
    }
};
</script>

<style scoped lang="scss">
.setting {
    background-color: #f3f7f9;
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
