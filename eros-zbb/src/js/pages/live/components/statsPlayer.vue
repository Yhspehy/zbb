<template>
    <div class="statsPlayer">
        <div class="name" ref="name">
            <text class="head">{{result[0].head}}</text>
            <text
                class="text"
                v-for="(item, idx) in result[0].value"
                :key="idx">{{item}}</text>
        </div>
        <div :class="[isIOS?'boxShadow':'']" :style="{'height': height}">
            <scroller class="statsPlayerScroller" scroll-direction="horizontal" :show-scrollbar="false">
                <div class="header" v-if="rIdx > 0" v-for="(r, rIdx) in result" :key="r.head" >
                    <text class="head other">{{r.head}}</text>
                    <text class="text other" v-for="(item, idx) in r.value" :key="idx">{{item}}</text>
                </div>
            </scroller>
        </div>
    </div>
</template>

<script>
import { Utils } from 'weex-ui'

const dom = weex.requireModule('dom')
export default {
    props: {
        data: {
            type: Array,
            require: true
        }
    },
    data() {
        return {
            isIOS: false,
            height: null
        }
    },
    computed: {
        result() {
            let map = {}
            const head = this.data[0].row
            const stats = this.data.slice(1)
            head.forEach((e, idx) => {
                map[idx] = {
                    head: e,
                    value: []
                }
            })
            stats.forEach(e => {
                e.row.forEach((t, tIdx) => {
                    map[tIdx].value.push(t)
                })
            })
            return map
        }
    },
    mounted() {
        this.isIOS = Utils.env.isIOS()
        dom.getComponentRect(this.$refs.name, option => {
            this.height = option.size.height
        })
    }
}
</script>

<style scoped>

.statsPlayer {
    padding-left: 35px;
    padding-right: 35px;
    flex-direction: row;
    background-color: #ffffff;
}

.name {
    width: 200px;
}

.other {
    width: 80px;
    text-align: center;
}

.statsPlayerScroller {
    flex: 1;
    background-color: #ffffff;
}

.head {
    font-size: 24px;
    color: #808080;
    line-height: 60px;
    height: 60px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #f2f2f2;
}

.text {
    lines: 1;
    font-size: 28px;
    color: #808080;
    text-overflow: ellipsis;
    line-height: 60px;
    height: 60px;
}

.boxShadow {
    box-shadow: inset 5px 0 30px #ffffff;
    flex: 1;
}

</style>
