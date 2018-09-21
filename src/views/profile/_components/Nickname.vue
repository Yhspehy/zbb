<template>
    <transition name="slide-top">
        <div class="nickname">
            <div class="container">
                <div class="title">昵称设置</div>

                <div class="p-re">
                    <input type="text" class="name" placeholder="请输入名称" v-model="name">
                    <i class="fas fa-times-circle clear" @click="name = ''"></i>
                </div>

                <div :style="{'opacity': warn ? 1 : 0}" class="existWarning">用户名已经存在,请重新输入</div>

                <div class="buttonDiv border-top-1px">
                    <button @click="close">取消</button>
                    <button class="border-left-1px" @click="save">确认</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { validateNickname } from '@/Api/profile';
export default {
    name: 'profile_nickname',
    data() {
        return {
            name: '',
            warn: false
        };
    },
    methods: {
        save() {
            if (validateNickname(this.name)) {
                this.$emit('save', this.name);
            } else {
                this.warn = true;
            }
        },
        close() {
            this.$emit('close', 'nickname');
        }
    }
};
</script>

<style scoped lang="scss">
.nickname {
    position: fixed;
    z-index: 101;
    top: -200px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    .container {
        position: absolute;
        top: 40%;
        left: calc((100vw - 678px) / 2);
        z-index: 110;
        background: #fff;
        width: 678px;
        border-radius: 10px;
        text-align: center;

        .title {
            color: $grey-light;
            font-size: 24px;
            padding: 30px 0;
        }

        .name {
            width: 608px;
            height: 90px;
            border-radius: 10px;
            border: solid 1px #cccccc;
            padding: 0 30px;
            font-size: 28px;
            -webkit-appearance: none;
            color: $grey-dark;
        }

        .clear {
            position: absolute;
            right: 60px;
            top: 30px;
            font-size: 30px;
            color: $grey-light;
        }

        .existWarning {
            padding: 10px 50px 20px;
            color: #f5303d;
            font-size: 24px;
            line-height: 36px;
            text-align: left;
        }

        .buttonDiv {
            @include border-top-1px;
            display: flex;
            button {
                padding: 30px 0;
                flex: 1;
                color: $grey-light;
                font-size: 28px;
                background: #fff;
                border-radius: 0 0 10px 10px;
                &:last-child {
                    height: 100%;
                    color: $grey;
                    @include border-left-1px;
                }
            }
        }
    }
}

.slide-top-enter-active {
    transition: all 0.5s ease;
}
.slide-top-leave-active {
    transition: all 0.5s ease;
}
.slide-top-enter,
.slide-top-leave-to {
    transform: translateY(100px);
    opacity: 0;
}
</style>
