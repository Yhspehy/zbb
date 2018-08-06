<template>
    <div class="topNav" :style="{'padding': padding, 'top': top}">
        <router-link class="navItem"
            :class="{'navActive': ChosenNav === item.name}"
            @click.native="clickNav(item.name)"
            :to="{'name': item.routeName}"
            :replace="replace"
            v-for="item in navList" :key="item.name">
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
 */
export default {
    name: 'c_TopNav',
    props: {
        navList: {
            type: Array,
            require: true
        },
        chosenNav: {
            type: String,
            require: true
        },
        padding: {
            type: String,
            default: '4.267vw 27.2vw 2.667vw'
        },
        top: {
            type: String,
            default: '0'
        },
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
            this.$store.commit('schedule/SET_CHOSENNAV', name);
            this.$emit('update:chosenNav', name);
        }
    },
    watch: {
        chosenNav(val) {
            this.ChosenNav = val;
        }
    }
};
</script>

<style scoped lang="scss">
.topNav {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: #fff;
    z-index: 99;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
    .navItem {
        font-size: 30px;
        color: $font-color-grey;
    }
    .navActive {
        font-size: 36px;
        color: #0099ff;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            height: 4px;
            width: 30px;
            background: #0099ff;
            bottom: -10px;
            left: calc(50% - 15px);
        }
    }
}
</style>
