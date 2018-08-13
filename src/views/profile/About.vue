<template>
    <div class="setting-index">
        <div class="header">
            <i @click="goBack" class="fa fa-angle-left"></i>
            <span>关于我们</span>
        </div>
        <div class="mar-top padding-36 content">
            <div class="header-img">
                <img src="http://temp.im/110x110">
                <p class="title">XX体育</p>
            </div>
            <div class="content-text">
                <p>我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。</p>
                <p>我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。</p>
                <p>我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。我们很牛逼，就只能说这么多了。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'setting_about',
    created() {
        console.log('created');
    },
    activated() {
        console.log('activated');
    },
    methods: {
        goBack() {
            if (this.goBackRouteName) this.$router.push({ name: this.goBackRouteName });
            this.$router.back();
        }
    }
};
</script>

<style scoped lang="scss">
.setting-index {
    position: relative;
    .mar-top {
        margin-top: 20px;
    }
    .padding-36 {
        padding: 0 36px;
    }
    .header {
        width: 100%;
        height: 90px;
        padding: 0 35px;
        background: #ffffff;
        text-align: center;
        line-height: 90px;
        .fa-angle-left {
            position: absolute;
            left: 35px;
            line-height: 90px;
            font-size: 50px;
            color: #808080;
        }
        span {
            font-size: 30px;
            color: #4d4d4d;
        }
    }
    .content {
        position: fixed;
        width: 100%;
        bottom: 0;
        top: 100px;
        background: #ffffff;
        .header-img {
            width: 100%;
            height: 380px;
            .title {
                height: 80px;
                text-align: center;
                line-height: 80px;
                font-size: 30px;
                color: #4d4d4d;
            }
            img {
                display: block;
                margin: 0 auto;
                padding-top: 80px;
            }
        }
        .content-text {
            font-size: 24px;
            color: #808080;
            line-height: 40px;
        }
    }
}
</style>
