<template>
    <div
        :style="{
            'background': background,
            'height': height
        }"
        class="cutOffLine">
    </div>
</template>

<script>
export default {
    name: 'cut_off_line',
    props: {
        height: {
            type: String,
            default: '2.7vw'
        },
        background: {
            type: String,
            default: '#f3f7f9'
        }
    }
};
</script>

<style scoped lang="scss">
.cutOffLine {
    width: 100%;
}
</style>
