<template>
    <div>
        <h2>设置密码</h2>
        <div class="form">
            <div class="input-group">
                <div class="input-control border-bottom-1px">
                    <input type="password" v-model="password" placeholder="密码由6-14位数字、英文及标点组成">
                    <i class="rt fas fa-times-circle"></i>
                </div>
                <div class="error" v-show="isError">
                    <i class="fas fa-exclamation-circle"></i>密码格式有误，请重新输入
                </div>
            </div>
            <div class="btn-group">
                <button class="btn" :disabled="isError || password.length < 6" @click="success">提交注册</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'step3',
    data() {
        return {
            password: '',
            isError: false
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
            let self = this;
            this.$toast('注册成功');
            setTimeout(() => {
                self.$router.push('/');
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
</style>
