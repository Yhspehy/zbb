<template>
    <div class="setting">
        <header-bar :text="text" :rightText="rightText" rightTextRouteName="profile_setting_problem" rightTextColor="#0088ff"></header-bar>

        <div class="settingContent">
            <router-view></router-view>
        </div>
    </div>
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
            ]
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
    activated() {
        console.log('activated');
        this.a += 1;
    }
};
</script>

<style scoped lang="scss">
.setting {
    background-color: $bg-body;
    min-height: 100vh;
    .settingContent {
        margin-top: 90px;
    }
}
</style>
