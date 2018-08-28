<template>
    <div>
        <div class="form">
            <div class="input-group">
                <div class="input-control border-bottom-1px">
                    <input type="tel" v-if="isLookPwd" v-model="password" placeholder="请输入新密码">
                    <input type="password" v-if="!isLookPwd" v-model="password" placeholder="请输入新密码">
                    <i class="rt fas fa-times-circle" v-if="password.length > 0" @click="password=''"></i>
                    <i class="rt fas" :class="isLookPwd ? 'fa-eye' : 'fa-eye-slash'" @click="isLookPwd = !isLookPwd"></i>
                </div>
                <div class="input-control border-bottom-1px">
                    <input type="tel" v-if="isLookConfirmPwd" v-model="confirmPwd" placeholder="请再次输入新密码" >
                    <input type="password" v-if="!isLookConfirmPwd" v-model="confirmPwd" placeholder="请再次输入新密码" >
                    <i class="rt fas fa-times-circle" v-if="confirmPwd.length > 0" @click="confirmPwd=''"></i>
                    <i class="rt fa" :class="isLookConfirmPwd ? 'fa-bell' : 'fa-bell-slash'" @click="isLookConfirmPwd = !isLookConfirmPwd"></i>
                </div>
                <div class="error" v-show="isError">
                    <i class="fas fa-exclamation-circle"></i>{{message}}
                </div>
            </div>
            <div class="btn-group">
                <button class="btn" :disabled="isError||!password||!confirmPwd" @click="success">下一步</button>
            </div>
        </div>
        <success-dialog 
            v-if="isSuccess"
            :message="`重置密码成功!`"></success-dialog>
    </div>
</template>
<script>
import successDialog from '../_components/SuccessDialog';
export default {
    name: 'step2',
    components: { successDialog },
    data() {
        return {
            password: '',
            confirmPwd: '',
            message: '',
            isLookPwd: false, // 密码是否可见
            isLookConfirmPwd: false, // 确认密码是否可见
            isError: false, // 密码是否错误
            isSuccess: false // 重置密码成功
        };
    },
    methods: {
        vertifyPassword() {
            let reg = /^(?=.*((?=[\x21-\x7e]+)[^A-Za-z0-9]))(?=.*[a-zA-Z])(?=.*[0-9])[^\u4e00-\u9fa5]{6,14}$/;
            if (!reg.test(this.password)) {
                this.isError = true;
                this.message = '密码由6-12位数字、英文及标点组成';
            } else {
                if (this.confirmPwd) {
                    this.vertifyComfirmPassword();
                } else {
                    this.isError = false;
                }
            }
        },
        vertifyComfirmPassword() {
            if (this.password != this.confirmPwd) {
                this.isError = true;
                this.message = '两次密码输入不一致，请重新设置';
            } else {
                this.isError = false;
            }
        },
        success() {
            this.isSuccess = true;
            // let self = this;
            this.$toast('重置密码成功');
            setTimeout(() => {
                // self.$router.push('/');
                this.isSuccess = false;
                this.password = '';
                this.confirmPwd = '';
            }, 2000);
        }
    },
    watch: {
        password(newVal) {
            if (newVal.length >= 1) {
                this.vertifyPassword();
            }
        },
        confirmPwd(newValue) {
            if (newValue.length >= 1) {
                this.vertifyComfirmPassword();
            }
        }
    }
};
</script>
<style scoped lang="scss">
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
                padding-left: 20px;
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
                @include bg-blue-light;
            }
        }
    }
}
</style>
