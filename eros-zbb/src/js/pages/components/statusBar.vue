<template>
    <div class="status-bar" :style="{'height': statusBarHeight, 'background-color': bg }"></div>
</template>

<script>
export default {
    props: {
        bg: {
            type: String,
            default: '#ffffff'
        }
    },
    data() {
        return {
            statusBarHeight: weex.config.eros.statusBarHeight ? weex.config.eros.statusBarHeight : 40
        }
    }
}
</script>

<style scoped>
.status-bar {
    width: 750;
    height: 40;
}
</style>
