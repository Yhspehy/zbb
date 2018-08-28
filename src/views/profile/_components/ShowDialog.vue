<template>
    <div class="liveQuizDialog">
        <div class="dialog">
            <div class="infoItem d-flex flex-column justify-content-between">
                <div class="title">分享到</div>
                <div class="address d-flex justify-content-between">
                    <div class="addr-item">
                        <img src="http://temp.im/54x54" alt="">
                        <p class="route">微信</p>
                    </div>
                    <div class="addr-item">
                        <img src="http://temp.im/54x54" alt="">
                        <p class="route">朋友圈</p>
                    </div>
                    <div class="addr-item">
                        <img src="http://temp.im/54x54" alt="">
                        <p class="route">QQ</p>
                    </div>
                    <div class="addr-item">
                        <img src="http://temp.im/54x54" alt="">
                        <p class="route">微博</p>
                    </div>
                </div>
            </div>

            <button class="cancel" @click="submit">取消</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'live_quizDialog',
    props: {},
    data() {
        return {};
    },
    computed: {},
    created() {},
    methods: {
        submit() {
            this.$emit('close');
        }
    }
};
</script>

<style scoped lang="scss">
.liveQuizDialog {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    .dialog {
        position: relative;
        width: 678px;
        height: 354px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #eff0f3;
        border-radius: 10px;
        font-size: 28px;
        color: #b3b3b3;
        .infoItem {
            width: 100%;
            height: 264px;
            padding: 30px 40px;
            .title {
                font-size: 24px;
                text-align: center;
            }
            .route {
                padding-top: 10px;
                text-align: center;
            }
        }
        .cancel {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 90px;
            border-radius: 0 0 10px 10px;
            background: #ffffff;
            color: $grey;
            letter-spacing: 2px;
        }
    }
}
</style>
