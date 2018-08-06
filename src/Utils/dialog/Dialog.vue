<template>
    <!-- <transition name="fade" v-on:after-leave="afterLeave"> -->
    <div class="dialog-container" v-if="option.visiable">
        <div class="mask"></div>
        <div class="dialog-body">
            <template v-if="option.title">
                <div v-if="option.html" class="header" v-html="title"></div>
                <div v-else class="header">{{option.title}}</div>
            </template>
            <div v-if="option.html" class="content" :class="{'alert':option.type === 'alert', 'confirm':option.type === 'confirm'}" v-html="option.message"></div>
            <div v-else class="content" :class="{'alert':option.type === 'alert', 'confirm':option.type === 'confirm'}">{{option.message}}</div>
            <div class="footer">
            <template v-if="option.type === 'confirm'">
                <div class="cancel" @click="onCancel">{{option.cancelText}}</div>
                <div class="split"></div>
                <div class="ok" @click="onOk">{{option.okText}}</div>
            </template>
            <template v-if="option.type === 'alert'">
                <div class="ok" @click="onOk" :class="{'alert':option.type === 'alert', 'confirm':option.type === 'confirm'}">{{option.okText}}</div>
            </template>
        </div>
        </div>
        

    </div>
    <!-- </transition> -->
</template>
<script>

export default {
    data() {
        return {
            option: {
                html: '',
                type: '',
                title: '',
                message: '',
                okText: '',
                cancelText: '',
                visiable: true
            }
        };
    },
    methods: {
        onOk() {
            this.option.visiable = false;
        },
        onCancel() {
        }
    }
};
</script>

<style lang="scss">
.dialog-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.mask{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: 0.5;
    z-index: 999
}
.dialog-body {
    position: fixed;
    z-index: 9999;
    border-radius: 10px;
    width: 500px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #4d4d4d;
    background-color: #fff;
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
        &.alert {
            min-height: 166px;
        }
        &.confirm {
            min-height: 198px;
        }
    }
    .footer {
        display: flex;
        @include border-top-1px(#e6e6e6);
        height: 80px;
        line-height: 80px;
        text-align: center;
        letter-spacing: 2.8px;
        .cancel {
            flex: 1 0 50%;
            color: #b3b3b3;
        }
        .ok {
            flex: 1 0 50%;
            color: #0088ff;
            &.alert {
                @include rounded(bottom,left);
                @include rounded(bottom,right);
                color: #fff;
                @include background-image;
            }
        }
        .split {
            @include border-right-1px(#e6e6e6);
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
