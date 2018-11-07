<template>
    <div>
        <text>{{d}}</text>

    </div>
</template>

<script>
export default {
    data () {
        return {
            d: null
        }
    },
    mounted () {
        setTimeout(() => {
            this.d = 'news'
        }, 2000)
    }
}
</script>

<style scoped>

</style>
