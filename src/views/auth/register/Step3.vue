<template>
    <div>
        <h2>设置密码</h2>
        <div class="form">
            <div class="input-group">
                <div class="input-control border-bottom-1px">
                    <input type="password" v-if="!isLook" v-model="password" placeholder="密码由6-14位数字、英文及标点组成">
                    <input type="tel" v-if="isLook" v-model="password" placeholder="密码由6-14位数字、英文及标点组成">
                    <i class="rt fas fa-times-circle"></i>
                    <i class="rt fas" :class="isLook ? 'fa-eye' : 'fa-eye-slash'" @click="isLook = !isLook"></i>
                </div>
                <div class="error" v-show="isError">
                    <i class="fas fa-exclamation-circle"></i>密码格式有误，请重新输入
                </div>
            </div>
            <div class="btn-group">
                <button class="btn" :disabled="isError || password.length < 6" @click="success">提交注册</button>
            </div>
        </div>

        <success-dialog 
            v-if="isSuccess"
            :message="`恭喜你注册成功!`"></success-dialog>
    </div>
</template>
<script>
import successDialog from '../_components/SuccessDialog';
export default {
    name: 'step3',
    components: { successDialog },
    data() {
        return {
            password: '',
            isError: false,
            isSuccess: false,
            isLook: false
        };
    },
    methods: {
        vertifyPassword() {
            let reg = /^(?=.*((?=[\x21-\x7e]+)[^A-Za-z0-9]))(?=.*[a-zA-Z])(?=.*[0-9])[^\u4e00-\u9fa5]{6,14}$/;
            if (!reg.test(this.password)) {
                this.isError = true;
            } else {
                this.isError = false;
            }
        },
        success() {
            this.isSuccess = true;
            // let self = this;
            this.$toast('注册成功');
            setTimeout(() => {
                // self.$router.push('/');
                this.password = '';
                this.isSuccess = false;
            }, 2000);
        }
    },
    watch: {
        password(newVal) {
            if (newVal.length >= 6) {
                this.vertifyPassword();
            }
        }
    }
};
</script>
<style scoped lang="scss">
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
                padding-left: 20px;
                &.active {
                    color: $red;
                }
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
            @include btn-bg;
        }
    }
}
</style>
