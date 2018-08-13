<template>
    <div class="setting-join">
        <div class="header">
            <i class="fa fa-angle-left"></i>
            <span>设置</span>
        </div>
        <div class="mar-top padding-36 id">
            <div class="item border-bottom">
                <span>
                    <i class="fa fa-qq wid-50"></i>QQ群：
                    <input type="text" class="value" id="qq_group" value="123456789" readonly>
                </span>
                <span style="color: #0088ff;" @click="onCopy('qq_group')">复制</span>
            </div>
            <div class="item">
                <span>
                    <i class="fa fa-weixin wid-50"></i>微信公众号：
                    <input type="text" class="value" id="weixin_num" value="43256676" readonly>
                </span>
                <span style="color: #0088ff;" @click="onCopy('weixin_num')">复制</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'setting_join',
    created() {
        console.log('created');
    },
    activated() {
        console.log('activated');
    },
    methods: {
        onCopy(id) {
            let url = document.getElementById(id);
            url.select(); // 选择对象
            document.execCommand('Copy');
            this.$toast({ duration: 500, message: '复制成功' });
        }
    }
};
</script>

<style scoped lang="scss">
.setting-join {
    position: relative;
    .mar-top {
        margin-top: 20px;
    }
    .border-bottom {
        @include border-bottom-1px;
    }
    .padding-36 {
        padding: 0 36px;
    }
    .wid-50 {
        display: inline-block;
        width: 50px;
    }
    .value {
        color: #808080;
        border: 0;
        outline: none;
    }
    .item {
        height: 90px;
        color: #4d4d4d;
        font-size: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    .head {
        position: relative;
        width: 100%;
        height: 140px;
        background: #ffffff;
        .header-img {
            width: 100px;
            height: 100px;
            .user-header {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
            .album {
                display: block;
                position: absolute;
                bottom: 20px;
                right: 40px;
                width: 30px;
                height: 31px;
                background-image: linear-gradient(
                    -45deg,
                    #1d75f2 0%,
                    #0f6ef9 0%,
                    #0066ff 0%,
                    #0073ff 0%,
                    #0080ff 0%,
                    #009aff 50%,
                    #04a7ff 73%,
                    #07b5ff 100%
                );
                border-radius: 50%;
            }
        }
    }
    .information {
        width: 100%;
        height: 360px;
        background: #ffffff;
    }
    .id {
        width: 100%;
        height: 180px;
        background: #ffffff;
    }
}
</style>
