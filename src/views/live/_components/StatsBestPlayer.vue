<template>
    <div class="live_statsBestPlayter">
        <div class="category" v-for="item in data" :key="item.text">
            <div class="item leftItem">
                <img :src="item.home_player_avatar">
                <div class="info">
                    <div class="value">{{item.home_val}}</div>
                    <div class="histogram" :style="{'height' : item.home_val > item.away_val ? '14vw' : item.home_val / item.away_val * 14 + 'vw'}"></div>
                </div>
            </div>
            <div class="item rightItem">
                <div class="info">
                    <div class="histogram" :style="{'height' : item.away_val > item.home_val ? '14vw' : item.away_val / item.home_val * 14 + 'vw'}"></div>
                    <div class="value">{{item.away_val}}</div>
                </div>
                <img :src="item.away_player_avatar">
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
};
</script>

<style scoped lang="scss">
.live_statsBestPlayter {
    padding: 0 26px;
    .category {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 20px 0;
        .item {
            @include flex-center-between;
            position: relative;
            width: 336px;
            height: 105px;
            margin: 0 6px;
            img {
                height: 73px;
            }
            .info {
                display: flex;
                align-items: flex-end;
            }
            .value {
                font-size: 30px;
                font-weight: bold;
                height: 14vw;
                line-height: 14vw;
            }
            .histogram {
                width: 40px;
            }
            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 6px;
            }
        }
        .leftItem {
            .value {
                color: $red-dark;
                margin-right: 27px;
            }
            .histogram {
                background-image: linear-gradient(0deg, #f3091a 0%, #f63146 50%, #fb413b 74%, #ff512f 100%),
                    linear-gradient(#b3b3b3, #b3b3b3);
            }
            &:after {
                background-image: linear-gradient(-90deg, #f3091a 0%, #f63146 50%, #fb413b 74%, #ff512f 100%),
                    linear-gradient(#f3f7f9, #f3f7f9);
            }
        }
        .rightItem {
            .value {
                color: $blue;
                margin-left: 27px;
            }
            .histogram {
                background-image: linear-gradient(
                        0deg,
                        #0080ff 0%,
                        #0077ff 0%,
                        #006eff 0%,
                        #0073ff 0%,
                        #0077ff 0%,
                        #0089ff 50%,
                        #0091ff 79%,
                        #0099ff 100%
                    ),
                    linear-gradient(#b2b2b2, #b2b2b2);
            }
            &:after {
                background-image: linear-gradient(
                        90deg,
                        #0080ff 0%,
                        #0077ff 0%,
                        #006eff 0%,
                        #0073ff 0%,
                        #0077ff 0%,
                        #0089ff 50%,
                        #0091ff 79%,
                        #0099ff 100%
                    ),
                    linear-gradient(#f3f7f9, #f3f7f9);
            }
        }
    }
}
</style>
