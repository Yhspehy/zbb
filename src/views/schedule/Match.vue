<template>
    <div class="schedule">
        赛程2121
        <div>{{a}}</div>
    </div>
</template>

<script>
export default {
    name: 'schedule',
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
</style>
