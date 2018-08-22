<template>
    <div class="goTop">
        <span @click="goTop1">{{word}}1</span>
    </div>
</template>

<script>
/**
 *
 * 如果需要多可以考虑写进global的components中
 *
 * 到时候在添加几个字段，top,left,width等等
 *
 * word 所要展示的字段
 * time 持续的时间
 *
 */
export default {
    name: 'schedule_goTop',
    props: {
        word: {
            type: String,
            require: true
        },
        time: {
            type: Number,
            default: 500
        },
        interval: {
            type: Number,
            default: 20
        }
    },
    data() {
        return {};
    },
    methods: {
        goTop1() {
            this.$emit('goTop');
        },
        goTop() {
            let x = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (x) {
                console.log('scroll start');
                let n = Math.ceil(this.time / this.interval);
                let speed = x / 3;
                let animation = setInterval(function() {
                    if (n === 1) {
                        console.log('scroll over');
                        // 兼容chrome
                        if (document.documentElement.scrollTop) {
                            document.documentElement.scrollTop = 0;
                        } else {
                            // 兼容safari
                            document.body.scrollTop = 0;
                        }
                        clearInterval(animation);
                        return;
                    }
                    n -= 1;
                    if (document.documentElement.scrollTop) {
                        document.documentElement.scrollTop -= speed;
                        speed = document.documentElement.scrollTop / ((3 * (n + 1)) / n);
                    } else {
                        document.body.scrollTop -= speed;
                        speed = document.body.scrollTop / ((3 * (n + 1)) / n);
                    }
                }, this.interval);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.goTop {
    width: 260px;
    height: 90px;
    background-color: #000;
    opacity: 0.7;
    border-radius: 45px;
    color: #fff;
    font-size: 28px;
    @include flex-center;
    position: fixed;
    left: 257px;
    bottom: 130px;
    cursor: pointer;
    z-index: 2;
}
</style>
