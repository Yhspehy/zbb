<template>
    <div class="schedule">
        赛程112
        <div class="aa">{{a}}</div>

        <button class="bb">bb</button>
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
.schedule {
    font-size: 20px;
    width: 750px;
    background: pink;
    color: $red;
}
</style>
