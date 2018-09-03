<template>
    <div class="setting-myself">
        <div class="mar-top padding-36 head d-flex justify-content-between align-items-center">
            <span>
                <i class="fa fa-user-circle wid-50"></i>头像
            </span>
            <div class="header-img">
                <img src="http://temp.im/50x50" class="user-header">
                <span class="album"></span>
            </div>
        </div>
        <div class="mar-top padding-36 information">
            <div class="item border-bottom">
                <span>
                    <i class="fa fa-user wid-50"></i>昵称
                </span>
                <span>
                    用户10086&nbsp;
                    <i class="fa fa-angle-right"></i>
                </span>
            </div>
            <div class="item border-bottom">
                <span>
                    <i class="fa fa-male wid-50"></i>性别
                </span>
                <span>
                    请选择&nbsp;
                    <i class="fa fa-angle-right"></i>
                </span>
            </div>
            <div class="item border-bottom">
                <span>
                    <i class="fa fa-birthday-cake wid-50"></i>生日
                </span>
                <span>
                    请选择&nbsp;
                    <i class="fa fa-angle-right"></i>
                </span>
            </div>
            <div class="item">
                <span>
                    <i class="fa fa-map-marker wid-50"></i>位置
                </span>
                <span>
                    请选择&nbsp;
                    <i class="fa fa-angle-right"></i>
                </span>
            </div>
        </div>
        <div class="mar-top padding-36 id">
            <div class="item border-bottom">
                <span>
                    <i class="fa fa-mobile wid-50"></i>手机号码
                </span>
                <span>187****0590</span>
            </div>
            <div class="item">
                <span>
                    <i class="fa fa-id-card wid-50"></i>账号ID
                </span>
                <span>ID:10086</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'profile_setting_myself'
};
</script>

<style scoped lang="scss">
.setting-myself {
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
    .item {
        height: 90px;
        color: $grey-dark;
        font-size: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
