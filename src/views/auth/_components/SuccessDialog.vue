<template>
    <div class="successDialog">
        <div class="dialog">
            <div class="infoItem d-flex flex-column justify-content-evenly align-items-center">
                <img src="http://temp.im/65x65" alt="">
                <p>{{message}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'live_quizDialog',
    props: {
        message: {
            type: String,
            require: true
        }
    },
    data() {
        return {};
    },
    computed: {},
    created() {},
    methods: {}
};
</script>

<style scoped lang="scss">
.successDialog {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    .dialog {
        position: relative;
        width: 420px;
        height: 360px;
        left: 50%;
        top: 250px;
        transform: translateX(-50%);
        background-color: #fff;
        border-radius: 10px;
        font-size: 30px;
        color: $grey;
        .infoItem {
            width: 100%;
            height: 100%;
            img {
                width: 130px;
                height: 130px;
                border-radius: 50%;
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
