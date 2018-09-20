<template>
    <div class="setting-push">

        <div class="container" v-for="(item, idx) in content" :key="idx">
            <div v-for="(el, elIdx) in item"
                 :key="elIdx"
                 class="item"
                 :class="{'border-bottom-1px': elIdx < item.length - 1}">

                <div v-if="typeof el.text !== 'string'">
                    <div v-for="(t, tIdx) in el.text" :key="tIdx" :class="{'tips': tIdx === el.text.length - 1}">{{t}}</div>
                </div>

                <div v-else>{{el.text}}</div>

                <i  class="fa fa-check"
                    :style="{'color': check[el.key] ? '#07b5ff' : ''}"
                    @click="triggerPush(el.key)"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { SafariSlideLeftTwiceTransitionAddLis, SafariSlideLeftTwiceTransitionRemoveLis } from '@/utils/index';

export default {
    name: 'profile_setting_push',
    data() {
        return {
            check: {
                importantNews: true,
                followTeamGames: true,
                followTeamNews: false,
                mention: true,
                reply: true,
                noBorderInNight: false
            },
            content: [
                [
                    {
                        text: ['要闻通知', '精选内容或重要新闻通知提醒'],
                        key: 'importantNews'
                    }
                ],
                [
                    {
                        text: '关注球队比赛在开赛/进球/结束时通知',
                        key: 'followTeamGames'
                    },
                    {
                        text: '关注球队的重要新闻',
                        key: 'followTeamNews'
                    }
                ],
                [
                    {
                        text: '@我的',
                        key: 'mention'
                    },
                    {
                        text: '回复我的',
                        key: 'reply'
                    }
                ],
                [
                    {
                        text: ['夜间免打扰', '免打扰模式下24:00-次日8:00都不再接受@和回复提醒'],
                        key: 'noBorderInNight'
                    }
                ]
            ]
        };
    },
    mounted() {
        SafariSlideLeftTwiceTransitionAddLis(this);
    },
    beforeDestroy() {
        SafariSlideLeftTwiceTransitionRemoveLis();
    },
    methods: {
        triggerPush(key) {
            this.check[key] = !this.check[key];
        }
    }
};
</script>

<style scoped lang="scss">
.setting-push {
    overflow: hidden;
    .container {
        margin-top: 20px;
        padding: 0 36px;
        background: #ffffff;
    }
    .border-bottom-1px {
        @include border-bottom-1px;
    }
    .item {
        width: 100%;
        padding: 30px 0;
        color: $grey-dark;
        font-size: 28px;
        @include flex-center-between;
        .tips {
            font-size: 24px;
            color: $grey;
            margin-top: 10px;
            font-weight: 300;
        }
    }
}
</style>
