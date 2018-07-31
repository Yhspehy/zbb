<template>
    <div class="schedule">
        <div class="topNav">
            <router-link class="navItem"
                 :class="{'navActive': chosenItem === item.name}"
                 @click.native="() => chosenItem = item.name"
                 :to="{'name': item.routerName}"
                 v-for="item in navList" :key="item.name">
                {{ item.name }}
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'schedule',
    data() {
        return {
            chosenItem: '',
            navList: [
                {
                    name: '赛事',
                    routerName: 'schedule_match'
                },
                {
                    name: '热门',
                    routerName: 'schedule_popular'
                },
                {
                    name: '关注',
                    routerName: 'schedule_follow'
                }
            ]
        };
    },
    created() {
        console.log('created');
    },
    activated() {
        console.log('activated');
    },
    methods: {}
};
</script>

<style scoped lang="scss">
.schedule {
    .topNav {
        display: flex;
        padding: 32px 204px 20px;
        justify-content: space-around;
        .navItem {
            font-size: 30px;
            color: $font-color-grey;
        }
        .navActive {
            font-size: 36px;
            color: #0099ff;
            position: relative;
            &:after {
                content: '';
                position: absolute;
                height: 4px;
                width: 30px;
                background: #0099ff;
                bottom: -10px;
                left: 21px;
            }
        }
    }
}
</style>
