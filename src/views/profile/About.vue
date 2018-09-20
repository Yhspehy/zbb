<template>
    <div class="setting-index">
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
import { SafariSlideLeftTwiceTransitionAddLis, SafariSlideLeftTwiceTransitionRemoveLis } from '@/utils/index';

export default {
    name: 'profile_setting_about',
    mounted() {
        SafariSlideLeftTwiceTransitionAddLis(this);
    },
    beforeDestroy() {
        SafariSlideLeftTwiceTransitionRemoveLis();
    }
};
</script>

<style scoped lang="scss">
.setting-index {
    overflow: hidden;
    .content {
        margin-top: 20px;
        padding: 0 36px;
        background: #ffffff;
        .header-img {
            width: 100%;
            .title {
                text-align: center;
                line-height: 80px;
                font-size: 30px;
                color: $grey-dark;
            }
            img {
                display: block;
                margin: 0 auto;
                padding-top: 80px;
            }
        }
        .content-text {
            font-size: 24px;
            color: $grey;
            line-height: 40px;
        }
    }
}
</style>
