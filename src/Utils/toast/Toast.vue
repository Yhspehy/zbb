<template>
    <div class="toast-container">
        <transition name="fade" v-on:after-leave="afterLeave">
            <div class="toast" v-if="visiable">
                <div>{{message}}</div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: '',
            visiable: true
        };
    },
    methods: {
        afterLeave: function() {
            this.$el.parentNode.removeChild(this.$el);
        }
    }
};
</script>

<style lang="scss">
.toast-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.toast {
    z-index: 9999;
    border-radius: 10px;
    width: 460px;
    font-size: 28px;
    line-height: 100px;
    text-align: center;
    color: #fff;
    word-wrap: break-word;
    background-color: #000000;
    opacity: 0.5;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
