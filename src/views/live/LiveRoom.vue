<template>
    <div class="live_liveRoom">
        <div class="item" v-for="(item, idx) in allData.data" :key="idx">
            <div class="circle border-left-1px"
                 :style="{'background': item.color}"></div>
            <div class="main">
                <div class="user">{{item.user}}</div>
                <div class="content">{{item.content}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { getLiveRoom } from '@/Api/live';
export default {
    name: 'live_liveRoom',
    data() {
        return {
            allData: {},
            colorList: ['#ffbb00', '#f3091a', '$prime-blue']
        };
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            const self = this;
            let res = await getLiveRoom(1);
            res.data.data.forEach(e => {
                e.color = self.colorList[Math.floor(Math.random() * 2.99)];
            });
            this.allData = res.data;
        }
    }
};
</script>

<style scoped lang="scss">
.live_liveRoom {
    padding: 50px 30px;
    .item {
        display: flex;
    }
    .circle {
        width: 9px;
        height: 9px;
        position: relative;
        border-radius: 50%;
        margin: 10px 20px 0 0;
        &:after {
            content: '';
            position: absolute;
            top: -10px;
            left: 4px;
            width: 1px;
            height: 120px;
            background: #f2f2f2;
            z-index: -1;
        }
    }
    .main {
        flex: 1;
        .user {
            font-size: 24px;
            color: $font-color-grey;
            margin-bottom: 20px;
        }
        .content {
            font-size: 28px;
            color: $font-color-deep-grey;
            margin-bottom: 30px;
        }
    }
}
</style>
