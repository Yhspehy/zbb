<template>
    <div class="statsHistory">
        <div class="flex-row">
            <text
                :class="['text', 'titleFontSize', 'column' + idx]"
                v-for="(hItem, idx) in head.row"
                :key="hItem">{{hItem}}</text>
        </div>

        <div class="flex-row" v-for="tItem in stats" :key="tItem.player_id">
            <text
                :class="['text', 'column' + idx]"
                v-for="(item, idx) in tItem.row"
                :key="idx">{{item}}</text>
        </div>
    </div>
</template>

<script>
export default {
    name: 'live_statsHistory',
    props: {
        data: {
            type: Array,
            require: true
        }
    },
    computed: {
        head () {
            return this.data[0]
        },
        stats () {
            return this.data.slice(1)
        }
    }
}
</script>

<style scoped>
.statsHistory {
    background-color: #ffffff;
    padding-left: 35px;
    padding-right: 35px;
}

.flex-row {
    flex-direction: row;
}

.titleFontSize {
    font-size: 24px;
}

.text {
    lines: 1;
    text-overflow: ellipsis;
    font-size: 28px;
    text-align: center;
    color: #808080;
    line-height: 60px;
    height: 60px;
}

.column0 {
    width: 170px;
}

.column1 {
    width: 190px;
}

.column2,
.column3,
.column4 {
    flex: 1;
}
</style>
