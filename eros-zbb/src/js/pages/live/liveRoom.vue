<template>
    <list class="list">
        <cell>
            <div class="topSpace"></div>
        </cell>
        <cell class="cell" v-for="(item, idx) in liveList" :key="idx">
            <div class="line"></div>
            <div class="circle" :style="{'backgroundColor': item.color}"></div>
            <div class="main">
                <text class="user">{{item.user}}</text>
                <text class="content">{{item.content}}</text>
            </div>
        </cell>
    </list>
</template>

<script>
export default {
    data() {
        return {
            liveList: {},
            colorList: ['#ffbb00', '#f3091a', '#0088ff']
        }
    },
    created() {
        this.$notice.loading.show()
        this.fetchLiveList()
    },
    beforeDestroy() {
        this.$notice.loading.hide()
    },
    methods: {
        fetchLiveList() {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/live/liveRoom/1'
            }).then(res => {
                res.data.forEach(e => {
                    e.color = this.colorList[Math.floor(Math.random() * 2.99)]
                })
                this.liveList = res.data
                this.$notice.loading.hide()
            })
        }
    }
}
</script>

<style scoped>
.list {
    background-color: #fff;
}

.topSpace {
    height: 50px;
    width: 750px;
}

.cell {
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
}

.circle {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-top: 10px;
    margin-right: 20px;
}

.line {
    position: absolute;
    top: 0;
    left: 4px;
    width: 1px;
    bottom: 0;
    background-color: #f2f2f2;
}

.main {
    flex: 1;
}
.user {
    font-size: 24px;
    color: #808080;
    margin-bottom: 20px;
}
.content {
    font-size: 28px;
    color: #4d4d4d;
    margin-bottom: 30px;
}
</style>
