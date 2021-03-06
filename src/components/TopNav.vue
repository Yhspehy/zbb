<template>
    <div
        class="topNav"
        :class="{'fixed': positionFixed}"
        :style="{
            'padding': padding,
            'top': top
            }">
        <router-link class="navItem"
            :style="{'font-size': ChosenNav === item.routeName ? activeFontSize : normalFontSize}"
            :class="{'navActive': ChosenNav === item.routeName}"
            @click.native="clickNav(item.routeName)"
            :to="{'name': item.routeName}"
            :replace="replace"
            v-for="item in navList"
            :key="item.routeName">
             {{ item.name }}
        </router-link>
    </div>
</template>

<script>
/**
 *
 * 由于行内样式不会自动计算vw
 * 所以要自行计算
 *
 * navList: [{name: 'xx', routeName: 'ww'}]
 *
 * 使用chooseNav来接收传播事件
 *
 */
export default {
    name: 'c_TopNav',
    props: {
        navList: {
            type: Array,
            require: true
        },
        // 默认选中的nav name
        chosenNav: {
            type: String,
            require: true
        },
        padding: {
            type: String,
            default: '4.267vw 27.2vw 2.667vw'
        },
        positionFixed: {
            type: Boolean,
            default: true
        },
        top: {
            type: String,
            default: 'env(safe-area-inset-top)'
        },
        normalFontSize: {
            type: String,
            default: '4vw'
        },
        activeFontSize: {
            type: String,
            default: '4.8vw'
        },
        // 是否replace历史揭露
        replace: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            ChosenNav: this.chosenNav
        };
    },
    methods: {
        clickNav(name) {
            this.ChosenNav = name;
            this.$emit('chosenNav', name);
        }
    },
    mounted() {
        this.$el.addEventListener('touchmove', e => e.preventDefault());
    },
    beforeDestroy() {
        this.$el.removeEventListener('touchmove', e => e.preventDefault());
    },
    watch: {
        // 兼容浏览器popstate，防止父组件数据改变而子组件未改变
        chosenNav(val) {
            this.ChosenNav = val;
        }
    }
};
</script>

<style scoped lang="scss">
.topNav {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    background: #fff;
    // box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
    .navItem {
        color: $grey;
    }
    .navActive {
        color: $blue-light;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            height: 4px;
            width: 60%;
            background: $blue-light;
            bottom: -10px;
            left: 20%;
        }
    }
}

.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: env(safe-area-inset-top);
    z-index: 99;
}
</style>
