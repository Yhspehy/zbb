<template>
    <transition name="slide-down">
        <div class="setting">
            <header-bar :text="text" :rightText="rightText" rightTextRouteName="profile_setting_problem" rightTextColor="#0088ff"></header-bar>

            <div class="settingContent">
                <transition :name="transitionName" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </transition>

</template>

<script>
import HeaderBar from '@/components/HeaderBar';
import find from 'lodash/find';

export default {
    name: 'setting',
    components: { HeaderBar },
    data() {
        return {
            routeList: [
                {
                    name: '设置',
                    routeName: 'profile_setting_index'
                },
                {
                    name: '个人信息',
                    routeName: 'profile_setting_myself'
                },
                {
                    name: '推送',
                    routeName: 'profile_setting_push'
                },
                {
                    name: '加入我们',
                    routeName: 'profile_setting_join'
                },
                {
                    name: '意见反馈',
                    routeName: 'profile_setting_suggestion'
                },
                {
                    name: '常见问题',
                    routeName: 'profile_setting_problem'
                },
                {
                    name: '系统消息',
                    routeName: 'profile_setting_message'
                },
                {
                    name: '关于我们',
                    routeName: 'profile_setting_about'
                }
            ],
            transitionName: 'slide-left'
        };
    },
    computed: {
        text() {
            return find(this.routeList, e => {
                return e.routeName === this.$route.name;
            }).name;
        },
        rightText() {
            return this.text === '意见反馈' ? '常见问题' : '';
        }
    },
    created() {
        console.log('created');
    },
    beforeRouteUpdate(to, from, next) {
        console.log(this.$store.state.profile.transition);
        if (!this.$store.state.profile.transition) {
            this.transitionName = '';
            this.$store.commit('profile/SET_TRANSITION', true);
        } else {
            this.transitionName = 'slide-left';
        }
        next();
    },
    watch: {
        $route() {
            // console.log(this.$store.state.profile.transition);
            // if (!this.$store.state.profile.transition) {
            //     this.transitionName = '';
            //     this.$store.commit('profile/SET_TRANSITION', true);
            // } else {
            //     this.transitionName = 'slide-left';
            // }
        }
    }
};
</script>

<style scoped lang="scss">
.setting {
    background-color: $bg-body;
    min-height: 100vh;
    overflow: hidden;
    .settingContent {
        margin-top: 86px;
        min-height: calc(100vh - 86px);
    }
}

.slide-down-enter-active {
    transition: all 0.5s ease;
}
.slide-down-leave-active {
    transition: all 0.5s ease;
}
.slide-down-enter,
.slide-down-leave-to {
    transform: translateY(-100px);
    opacity: 0;
}

.slide-left-enter-active {
    transition: all 0.5s ease;
}
.slide-left-leave-active {
    transition: all 0.5s ease;
}
.slide-left-enter,
.slide-left-leave-to {
    transform: translateX(-100px);
    opacity: 0;
}
</style>
