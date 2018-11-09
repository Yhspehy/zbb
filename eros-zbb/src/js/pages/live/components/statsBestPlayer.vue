<template>
    <div class="live_statsBestPlayter">
        <div class="category" v-for="item in data" :key="item.text">
            <div class="left">
                <div class="item">
                    <image class="avatar" src="http://temp.im/73x73"></image>
                    <div class="info">
                        <text class="value leftValue">{{item.home_val}}</text>
                        <div class="histogram leftHistogram" :style="{'height' : item.home_val > item.away_val ? '105px' : item.home_val / item.away_val * 105 + 'px'}"></div>
                    </div>
                </div>
                <div class="leftBottomBar"></div>
            </div>
            <div class="right">
                <div class="item">
                    <div class="info">
                        <div class="histogram rightHistogram" :style="{'height' : item.away_val > item.home_val ? '105px' : item.away_val / item.home_val * 105 + 'px'}"></div>
                        <text class="value rightValue">{{item.away_val}}</text>
                    </div>
                    <image class="avatar" src="http://temp.im/73x73"></image>
                </div>
                <div class="rightBottomBar"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'live_statsBestPlayer',
    props: {
        data: {
            type: Array,
            require: true
        }
    }
}
</script>

<style scoped>
.live_statsBestPlayter {
    padding-left: 26px;
    padding-right: 26px;
    background-color: #ffffff;
}

.category {
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: flex-end;
    justify-content: center;
}

.item {
    width: 336px;
    height: 105px;
    margin-left: 6px;
    margin-right: 6px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.avatar {
    width: 73px;
    height: 73px;
}

.info {
    flex-direction: row;
    align-items: flex-end;
}

.leftBottomBar {
    background-color: #f3091a;
    height: 6px;
}

.rightBottomBar {
    background-color: #0088ff;
    height: 6px;
}

.value {
    font-size: 30px;
    font-weight: bold;
    height: 105px;
    line-height: 105px;
}

.leftValue {
    color: #f3091a;
    margin-right: 27px;
}

.rightValue {
    color: #0088ff;
    margin-left: 27px;
}

.histogram {
    width: 40px;
}

.leftHistogram {
    background-color: #f3091a;
}

.rightHistogram {
    background-color: #0088ff;
}
</style>
