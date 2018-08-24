<template>
    <div class="login">
        <div class="header">
            <a class="go-back" @click="goBack">
                <i class="fa fa-angle-left"></i>
            </a>
            <div class="right-btn">
                注册
            </div>
        </div>
        <div class="content">
            <div class="logo-wrapper">
                <img class="logo-img" src="http://temp.im/160x160" />
                <h2 class="title">赛事通</h2>
                <h3 class="subtitle">赛事资讯领跑者</h3>
            </div>
            <div class="form">
                <div class="input-group">
                    <div class="input-control">
                        <input type="text" placeholder="请输入赛事通账号">
                        <i class="rt fas fa-times-circle"></i>
                    </div>
                    <div class="input-control">
                        <input type="password" placeholder="请输入密码">
                        <span class="rt">获取验证码</span>
                        <!-- <i class="rt fas fa-eye-slash"></i> -->
                    </div>
                    <div class="error">
                        <i class="fas fa-exclamation-circle"></i>账号/密码有误，请重新输入
                    </div>
                </div>

                <div class="btn-group">
                    <button class="login-btn" disabled>登录</button>
                    <button class="login-with-mobile border-1px">手机号码登录</button>
                </div>
            </div>

        </div>
        <div class="footer">
            <div class="footer-line">
                其他方式登录
            </div>
            <ul class="others-wrapper">
                <li>
                    <i class="fab fa-qq"></i>
                    <span>QQ</span>
                </li>
                <li>
                    <i class="fab fa-weixin"></i>
                    <span>微信</span>
                </li>
                <li>
                    <i class="fab fa-weibo"></i>
                    <span>微博</span>
                </li>

            </ul>
        </div>
    </div>

</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            test: 1
        };
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        }
    }
};
</script>

<style scoped lang="scss">
.login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header {
        width: 100%;
        padding: 30px 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 40px;
        .go-back {
            color: #7f7f7f;
        }
        .right-btn {
            font-size: 24px;
            color: $prime-blue;
        }
    }
    .content {
        padding: 15px 36px 0;
        width: 100%;
        .logo-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            color: $prime-blue;
            .logo-img {
                width: 160px;
                height: 160px;
                background-color: #e6e6e6;
            }
            .title {
                font-size: 36px;
                line-height: 70px;
                letter-spacing: 0.9px;
            }
            .subtitle {
                font-size: 28px;
                font-weight: 200;
                line-height: 30px;
                letter-spacing: 0.7px;
            }
        }
        .form {
            padding: 30px 24px;
            width: 100%;
            .input-group {
                position: relative;
            }
            .input-control {
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 630px;
                height: 98px;
                @include border-bottom-1px;
                input {
                    flex: 1 1 60%;
                    height: 100%;
                    outline: none;
                    &::placeholder {
                        color: #b3b3b3;
                    }
                }
                .rt {
                    color: #b2b2b2;
                    &.active {
                        color: #f5303d;
                    }
                }
            }
            .error {
                position: absolute;
                bottom: -50px;
                font-size: 24px;
                color: #f5303d;
                i {
                    margin-right: 10px;
                }
            }
        }
        .btn-group {
            margin-top: 70px;
            button {
                width: 630px;
                height: 80px;
                border-radius: 40px;
                line-height: 80px;
                border: none;
                outline: none;
                letter-spacing: 12px;
                background-color: #fff;
                &.login-btn {
                    color: #fff;
                    background-image: linear-gradient(
                            -90deg,
                            #0080ff 0%,
                            #0077ff 0%,
                            #006eff 0%,
                            #0073ff 0%,
                            #0077ff 0%,
                            #0089ff 50%,
                            #0091ff 79%,
                            #0099ff 100%
                        ),
                        linear-gradient(#808080, #808080);
                    &:disabled {
                        opacity: 0.7;
                    }
                }
                &.login-with-mobile {
                    margin-top: 30px;
                    color: $prime-blue;
                }
                @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
                    &.border-1px {
                        @include border-1px($prime-blue, 80px);
                    }
                }
                @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                    &.border-1px {
                        @include border-1px($prime-blue, 120px);
                    }
                }
            }
        }
    }
    .footer {
        margin-top: auto;
        margin-bottom: 21px;
        width: 502px;
        height: 180px;
        text-align: center;
        .footer-line {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            color: #e6e6e6;
            &::before,
            &::after {
                content: '';
                width: 160px;
                height: 1px;
                background-color: #b3b3b3;
            }
            @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
                &::before,
                &::after {
                    transform: scaleY(0.5);
                }
            }
            @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
                &::before,
                &::after {
                    transform: scaleY(0.33);
                }
            }
        }
        .others-wrapper {
            display: flex;
            height: 100%;
            justify-content: space-between;
            align-content: center;
            li {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            i {
                font-size: 60px;
                &.fa-qq {
                    color: #5eb1f4;
                }
                &.fa-weixin {
                    color: #91cc4d;
                }
                &.fa-weibo {
                    color: #e46767;
                }
            }
            span {
                margin-top: 22px;
                font-size: 24px;
                color: #b3b3b3;
            }
        }
    }
}
</style>
