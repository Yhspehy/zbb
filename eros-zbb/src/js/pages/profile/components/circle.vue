<template>
    <div class="circle">
        <div class="circleItem" v-for="item in mycircle" :key="item.name">
            <image class="img" src="http://temp.im/22x22" alt=""></image>
            <text class="text">{{item.name}}</text>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            mycircle: [
                {
                    name: '我的关注',
                    to: ''
                },
                {
                    name: '我的收藏',
                    to: ''
                },
                {
                    name: '我的圈子',
                    to: ''
                },
                {
                    name: '我的竞猜',
                    to: ''
                },
                {
                    name: '浏览记录',
                    to: ''
                },
                {
                    name: '我的帖子',
                    to: ''
                },
                {
                    name: 'G币抽奖',
                    to: ''
                },
                {
                    name: 'G币商城',
                    to: ''
                }
            ]
        }
    }
}
</script>

<style scoped>
.circle {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #ffffff;
    flex-wrap: wrap;
    flex-direction: row;
}
.circleItem {
    width: 187.5px;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
}

.img {
    width: 44px;
    height: 44px;
}

.text {
    margin-top: 10px;
    color: #808080;
    font-size: 24px;
}
</style>
