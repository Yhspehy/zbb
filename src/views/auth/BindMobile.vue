<template>
    <div class="bind-mobile">
        <v-header title="登录"></v-header>
        <div class="content">
            <h2>绑定手机号码</h2>
            <div class="form">
                <div class="input-group">
                    <div class="input-control border-bottom-1px">
                        <input type="tel" v-model="mobile" placeholder="请输入11位手机号">
                        <i class="rt fas fa-times-circle" v-if="mobile.length > 0" v-clean></i>
                    </div>
                    <div class="input-control border-bottom-1px">
                        <input type="tel" maxlength="4" ref="code" id="code" class="code" placeholder="请输入验证码"
                            @focus = "focus=true" 
                            v-model = "code"
                            @blur = "focus=false"
                            :disabled = "isError || mobile.length < 11">
                        <button class="rt" 
                            :disabled = "isError || mobile.length < 11 || disabled" 
                            :class="isError || mobile.length < 11 || disabled ? 'disable' : 'able'"
                            @click="sendCode">{{btntxt}}</button>
                    </div>
                    <div class="error" v-show="yzmErrorShow">
                        <i class="fas fa-exclamation-circle"></i>验证码有误，请重新输入
                    </div>
                </div>
                <div class="btn-group">
                    <button class="btn" :disabled="yzmError || mobile.length < 11"  @click="success">下一步</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VHeader from './_components/header';
export default {
    name: 'bind_mobile',
    data() {
        return {
            mobile: '',
            isError: false, // 手机号格式是否错误
            yzmError: true, // 验证码是否错误
            yzmErrorShow: false, // 验证码错误是否显示
            length: 4,
            code: '',
            focus: false,
            time: 0,
            btntxt: '获取验证码',
            disabled: false //验证码是否无效
        };
    },
    methods: {
        // 发送验证码
        sendCode() {
            this.time = 60;
            this.timer();
        },

        // 获取验证码
        verifyCode() {
            return new Promise(resolve => {
                let self = this;
                setTimeout(function() {
                    resolve(self.code === '1234');
                }, 1000);
            });
        },
        timer() {
            if (this.time > 0) {
                this.disabled = true;
                this.time--;
                this.btntxt = this.time + 's后重新获取';
                setTimeout(this.timer, 1000);
            } else {
                this.time = 0;
                this.btntxt = '获取验证码';
                this.disabled = false;
            }
        },

        // 验证手机号
        vertifyMobile() {
            let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if (!reg.test(this.mobile)) {
                this.isError = true;
                return false;
            } else {
                this.isError = false;
            }
        },
        success() {
            console.log('登录成功');
        }
    },
    watch: {
        mobile(newVal) {
            this.mobile = newVal.replace(/[^\d]/g, '');
            if (newVal.length >= 11) {
                this.vertifyMobile();
            }
        },
        code: function(newValue) {
            this.code = newValue.replace(/[^\d]/g, '');
            console.log(newValue);
            if (newValue.length >= 4) {
                this.disabled = true;
                this.verifyCode().then(res => {
                    if (res) {
                        console.log('success');
                        this.yzmError = false;
                        this.yzmErrorShow = false;
                        // this.$emit('next', [2]);
                    } else {
                        console.log('fail');
                        this.yzmError = true;
                        this.yzmErrorShow = true;
                    }
                });
            } else {
                this.yzmError = true;
            }
        }
    },
    components: { VHeader }
};
</script>
<style lang="scss">
.bind-mobile {
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
            color: $grey-dark;
            text-align: center;
        }
        .notice {
            font-size: 24px;
            line-height: 70px;
            color: $grey;
            text-align: center;
            .num {
                color: $blue;
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
                            color: $grey-light;
                        }
                    }
                    .rt {
                        color: #b2b2b2;
                        background: transparent;
                    }
                    .disable {
                        color: $grey-light;
                    }
                    .able {
                        color: red;
                    }
                }
            }
            .error {
                position: absolute;
                bottom: -50px;
                font-size: 24px;
                color: $red;
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
                    @include bg-blue;
                    &:disabled {
                        opacity: 0.7;
                    }
                }
            }
        }
    }
}
</style>
