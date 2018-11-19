<template>
    <div class="game">
        <text class="title">热门游戏</text>

        <div class="gameList">
            <div class="gameItem" v-for="item in games" :key="item.name">
                <image class="img" :src="item.img" alt=""></image>
                <text class="text">{{item.name}}</text>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            games: [
                {
                    name: '血战到底',
                    img: 'http://temp.im/30x30'
                },
                {
                    name: '吉吉游戏',
                    img: 'http://temp.im/30x30'
                },
                {
                    name: '休闲游戏',
                    img: 'http://temp.im/30x30'
                },
                {
                    name: '足球游戏',
                    img: 'http://temp.im/30x30'
                }
            ]
        }
    }
}
</script>

<style scoped>
.game {
    margin-top: 20px;
    background-color: #ffffff;
}

.gameList {
    flex-wrap: wrap;
    flex-direction: row;
}

.title {
    padding-left: 26px;
    font-size: 28px;
    color: #4d4d4d;
    line-height: 66px;
}
.gameItem {
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
