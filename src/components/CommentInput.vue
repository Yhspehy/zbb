<template>
    <div>
        <div class="commentInput">
            <input
                type="text"
                class="typeIn"
                placeholder="我来说两句"
                @blur="inputBlur"
                @click="inputFocus($event)">

            <button class="send">发送</button>
        </div>

        <transition name="mask">
            <c-mask v-if="disScroll"></c-mask>
        </transition>

    </div>
</template>

<script>
import cMask from '@/components/Mask';

let bodyEl = document.querySelector('body');
let top = 0;

export default {
    name: 'c_commentInput',
    components: { cMask },
    data() {
        return {
            disScroll: false,
            scrollY: 0
        };
    },
    mounted() {
        this.$el.addEventListener(
            'touchmove',
            e => {
                e.preventDefault();
            },
            false
        );
    },
    beforeDestroy() {
        this.$el.removeEventListener(
            'touchmove',
            e => {
                e.preventDefault();
            },
            false
        );
    },
    methods: {
        inputFocus(el) {
            if (this.disScroll) return;
            this.scrollY = window.scrollY;
            this.disScroll = true;

            // 使用这个方案出现的问题：
            // 1. 拉起键盘后点击input页面会下移,已经解决
            // 2. safari拉起键盘后键盘和input有空隙
            top = window.scrollY;
            bodyEl.style.position = 'fixed';
            bodyEl.style.top = -top + 'px';

            // console.log(window.innerHeight);
            // console.log(window.scrollY);
            // console.log(window.parent.innerHeight);
            // console.log(window.parent.scrollY);
            setTimeout(() => {
                el.target.scrollIntoView(true);
                el.target.scrollIntoViewIfNeeded();
            }, 200);
        },
        inputBlur() {
            // console.log(window.scrollY);
            this.disScroll = false;
            bodyEl.style.position = '';
            bodyEl.style.top = '';
            window.scrollTo(0, top);
        },
        send() {}
    }
};
</script>

<style scoped lang="scss">
.commentInput {
    // flex
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    // fixed
    // position: relative;
    height: 90px;
    z-index: 110;
    background: #fff;
    box-shadow: 0px 0px 1px 0px #bfbfbf;
    line-height: 90px;

    .typeIn {
        margin: 0 20px 0 36px;
        height: 66px;
        width: 540px;
        background-color: #f2f2f2;
        border-radius: 33px;
        padding-left: 40px;
        line-height: 50px;
    }

    .send {
        width: 118px;
        height: 66px;
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
            linear-gradient(#f2f2f2, #f2f2f2);
        border-radius: 33px;
        font-size: 28px;
        color: #fff;
    }
}

.mask-enter-active,
.mask-leave-active {
    transition: opacity 0.6s;
}

.mask-enter,
.mask-leave-to {
    opacity: 0;
}
</style>
