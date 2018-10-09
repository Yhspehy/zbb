<template>
    <div v-if="isShow" class="scrollTo">
        <i class="fas" :class="`fa-arrow-${direction}`"></i><span @click="scrollTo">{{word}}</span>
    </div>
</template>

<script>
/**
 *
 * word 所要展示的字段
 *
 */
export default {
    name: 'schedule_scrollTo',
    props: {
        direction: {
            type: String,
            default: 'down'
        },
        word: {
            type: String,
            require: true
        },
        isShow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {};
    },
    methods: {
        scrollTo() {
            this.$emit('scrollTo');
        }
    }
};
</script>

<style scoped lang="scss">
.scrollTo {
    width: 260px;
    height: 90px;
    background-color: #000;
    opacity: 0.7;
    border-radius: 45px;
    color: #fff;
    font-size: 28px;
    @include flex-center;
    position: fixed;
    left: 257px;
    bottom: 130px;
    line-height: 90px;
    cursor: pointer;
    z-index: 2;

    @supports (bottom: env(safe-area-inset-bottom)) {
        --safe-area-inset-bottom: env(safe-area-inset-bottom);
        bottom: calc(var(--safe-area-inset-bottom) + 130px);
    }

    i {
        margin-right: 6px;
    }
}
</style>
