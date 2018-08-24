<!-- <template>
    <div class="register">
        <div class="header border-bottom-1px">
            <a class="go-back">
                <i class="fa fa-angle-left"></i>
            </a>
            <div class="title">注册</div>
        </div>
        <div class="content">
            <h2>{{titleText}}</h2>
            <div class="notice" v-if="step === 2">验证码已发送至
                <span class="num">{{mobile}}</span>
            </div>
            <div class="form" v-if="step === 1">
                <div class="input-group">
                    <div class="input-control border-bottom-1px">
                        <input type="text" placeholder="请输入11位手机号">
                        <i class="rt fas fa-times-circle"></i>
                    </div>
                    <div class="error">
                        <i class="fas fa-exclamation-circle"></i>账号/密码有误，请重新输入
                    </div>
                </div>
                <div class="btn-group">
                    <button class="btn" disabled>{{btnText}}</button>
                </div>
            </div>
            <div class="form" v-if="step === 2">
                
            </div>
            <div class="form" v-if="step === 3">
                <div class="input-group">
                    <div class="input-control border-bottom-1px">
                        <input type="text" placeholder="密码由6-12位数字、英文及标点组成">
                        <i class="rt fas fa-times-circle"></i>
                    </div>
                    <div class="error">
                        <i class="fas fa-exclamation-circle"></i>密码格式有误，请重新输入
                    </div>
                </div>
                <div class="btn-group">
                    <button class="btn" disabled>{{btnText}}</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            step: 2, //1:输入手机号 2:输入验证码 3:设置密码 4: 注册成功
            mobile: 13700000000,
            verifyInputs: ['', '', '', '']
        };
    },
    computed: {
        btnText() {
            return this.step === 1 ? '下一步' : '提交注册';
        },
        titleText() {
            switch (this.step) {
                case 2:
                    return '请输入验证码';
                case 3:
                    return '设置密码';
                default:
                    return '请输入手机号码';
            }
        }
    },
    methods: {},
    filter: {}
};
</script>

<style scoped lang="scss">
.register {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
        padding: 70px 60px 0;
        width: 100%;
        h2 {
            font-size: 36px;
            color: #4d4d4d;
            text-align: center;
        }
        .notice {
            font-size: 24px;
            line-height: 70px;
            color: #808080;
            text-align: center;
            .num {
                color: $prime-blue;
            }
        }
        .form {
            margin-top: 30px;
            width: 100%;
            .input-group {
                position: relative;
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
            }
        }
    }
}
</style>
-->