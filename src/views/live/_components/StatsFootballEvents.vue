<template>
    <div class="footballEvents">
        <table cellpadding="0" cellspacing="0">
            <tbody>
                <tr v-for="(item, key) in obj" :key="key">
                    <td class="home">
                        <div class="cell" v-for="(el, idx) in item.home" :key="idx">
                            <span>{{ el.player_name }}</span>
                            <span :class="{
                                'up': el.type === '换上',
                                'down': el.type === '换下',
                                'goal': el.type === '进球',
                                'yellowCard': el.type === '黄牌'}">
                                <span v-if="el.type === '进球'">{{el.score}}</span>
                            </span>
                        </div>
                    </td>

                    <td class="center width-1px">
                        <div class="time border-1px">{{key}}</div>
                    </td>

                    <td class="away">
                        <div class="cell" v-for="(el, idx) in item.away" :key="idx">
                             <span :class="{
                                 'up': el.type === '换上',
                                'down': el.type === '换下',
                                'goal': el.type === '进球',
                                'yellowCard': el.type === '黄牌'}">
                                <span v-if="el.type === '进球'">{{el.score}}</span>
                            </span>
                            <span>{{ el.player_name }}</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'live_statsFootballEvents',
    props: {
        data: {
            type: Array,
            require: true
        }
    },
    computed: {
        obj() {
            let obj = {};
            this.data.forEach(e => {
                if (!obj[e.time]) {
                    obj[e.time] = {
                        home: [],
                        away: []
                    };
                }
                obj[e.time][e.side].push(e);
            });
            return obj;
        }
    }
};
</script>

<style scoped lang="scss">
.footballEvents {
    padding: 30px 10px;
    table {
        width: 100%;
        font-size: 23px;
        color: $font-color-grey;
        .home,
        .away {
            width: 45%;
            .down {
            }
            .up {
            }
            .yellowCard {
                background: #fff200;
                border-radius: 2px;
                width: 20px;
                height: 30px;
            }
            .goal {
                &:before {
                }
            }
        }

        .center {
            width: 10%;
            height: 100%;
            text-align: center;
            position: relative;
            &:after {
                content: '';
                position: absolute;
                width: 1px;
                height: 100%;
                top: 0;
                left: calc((100% - 1px) / 2);
                background: $font-color-grey;
            }
            .time {
                width: 48px;
                height: 48px;
                margin: 0 auto;
                z-index: 10;
                line-height: 48px;
                background: #fff;
                color: #333333;
                @include border-1px(#7f7f7f, 50%);
            }
        }
        .cell {
            @include flex-center-between;
            padding: 10px 20px;
            height: 80px;
        }

        tbody > tr:first-child {
            .cell {
                align-items: baseline;
            }
            .center {
                vertical-align: top;
            }
        }

        tbody > tr:last-child {
            .cell {
                align-items: flex-end;
            }
            .center {
                vertical-align: bottom;
            }
        }
    }
}
</style>
