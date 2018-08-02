<template>
    <div class="schedule">
        赛程
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
    }
};
</script>

<style scoped lang="scss">
</style>
