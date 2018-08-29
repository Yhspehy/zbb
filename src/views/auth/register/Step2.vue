<template>
    <div>
        <h2>请输入验证码</h2>
        <div class="notice">验证码已发送至
            <span class="num">{{mobile}}</span>
        </div>
        <div class="form">
            <div class="input-control">
                <div class="vcode" id='vertifycode'>
                    <input type="tel" maxlength='4' ref='code' id='code' class='code' @focus='focus=true' v-model='code' @blur='focus=false' :disabled='inputDisabled'>
                    <div class="labels">
                        <label class='label' for="code" :class='{active: focus===true && index===currentIndex}' v-for='(item,index) in length' :key="index" v-text='arrCode[index]'>
                        </label>
                    </div>
                </div>
            </div>
            <div class="error" v-show="isError">
                <i class="fas fa-exclamation-circle"></i>验证码有误，请重新输入
            </div>
        </div>
        <div class="btntxt">
            <button @click="sendCode" :disabled='disabled'>{{btntxt}}</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'step2',
    data() {
        return {
            isError: false,
            length: 4,
            code: '',
            focus: false,
            inputDisabled: false,
            disabled: true,
            time: 0,
            btntxt: ''
        };
    },
    props: {
        mobile: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.$refs.code.focus();
        this.time = 60;
        this.sendCode();
    },
    computed: {
        arrCode: function() {
            return this.code.split('');
        },
        currentIndex: function() {
            return this.code.length;
        }
    },
    watch: {
        code: function(newValue) {
            this.code = newValue.replace(/[^\d]/g, '');
            console.log(newValue);
            if (newValue.length >= 4) {
                this.disabled = true;
                this.$refs.code.blur();
                this.verifyCode().then(res => {
                    if (res) {
                        this.isError = false;
                        this.$emit('next', [3]);
                    } else {
                        this.isError = true;
                    }
                });
            }
        }
    },
    methods: {
        sendCode() {
            this.time = 60;
            this.timer();
        },
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
                this.time--;
                this.btntxt = this.time + 's后重新获取';
                setTimeout(this.timer, 1000);
            } else {
                this.time = 0;
                this.btntxt = '获取验证码';
                this.disabled = false;
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
    position: relative;
    margin-top: 30px;
    width: 100%;
    .error {
        position: absolute;
        left: 25px;
        bottom: -50px;
        font-size: 24px;
        color: $red;
        i {
            margin-right: 10px;
        }
    }
}
.vcode {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.code {
    width: 100%;
    padding: 0;
    height: 90px;
    font-size: 72px;
    overflow: hidden;
    border: none;
    outline: none;
    opacity: 0;
    margin-left: -100%; // ios上透明度为0时依然有光标
    -webkit-tap-highlight-color: transparent;
}
.labels {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 90px;
    justify-content: space-around;
    margin-top: -90px;
    -webkit-tap-highlight-color: transparent; // 解决ios点击灰色阴影的问题
}
.label {
    height: 90px;
    width: 100px;
    border-bottom: 2px solid #b3b3b3;
    font-size: 72px;
    text-align: center;
    padding-bottom: 4px;
}
.active {
    border-color: $blue;
}
.btntxt {
    margin-top: 70px;
    width: 100%;
    font-size: 28px;
    line-height: 70px;
    text-align: center;
    button {
        background: transparent;
        color: #00bbff;
    }
}
</style>
