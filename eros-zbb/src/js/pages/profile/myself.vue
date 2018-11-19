<template>
    <div class="setting-myself">
        <div class="container">
            <div class="item" style="padding: 2vw 0">
                <text class="icon">&#xf2bd; 头像</text>
                <div class="header-img" @click="show.genderPhoto = 'photo'">
                    <image class="avatar" src="http://temp.im/50x50"></image>
                    <div></div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="item border-bottom-1px">
                <text class="icon">&#xf007; 昵称</text>
                <div class="flex-row" @click="pickNickName">
                    <text class="value">{{nickname}}</text>
                    <text class="rightIcon">&#xf054;</text>
                </div>
            </div>
            <div class="item border-bottom-1px">
                <text class="icon">&#xf183; 性别</text>
                <div class="flex-row" @click="pickGender">
                    <text class="value">{{gender}}</text>
                    <text class="rightIcon">&#xf054;</text>
                </div>
            </div>
            <div class="item border-bottom-1px">
                <text class="icon">&#xf1fd; 生日</text>
                <div class="flex-row" @click="pickBirth">
                    <text class="value">{{birthday}}</text>
                    <text class="rightIcon">&#xf054;</text>
                </div>
            </div>
            <div class="item">
                <text class="icon">&#xf041; 位置</text>
                <div class="flex-row" @click="pickLocation">
                    <text class="value">{{location}}</text>
                    <text class="rightIcon">&#xf054;</text>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="item border-bottom-1px">
                <text class="icon">&#xf10b; 手机号码</text>
                <text class="value">{{encryptMobile}}</text>
            </div>
            <div class="item">
                <text class="icon">&#xf2c2; 账号ID</text>
                <text class="value">{{id}}</text>
            </div>
        </div>
    </div>
</template>

<script>
import { getFormatDate } from 'Utils/common'

const domModule = weex.requireModule('dom')
const picker = weex.requireModule('picker')
const modal = weex.requireModule('modal')
export default {
    name: 'profile_setting_myself',
    data() {
        return {
            nickname: '哈哈哈',
            gender: '请选择',
            birthday: '请选择',
            location: '请选择',
            mobile: '18283837373',
            id: 10086,
            genderList: ['保密', '男', '女']
        }
    },
    computed: {
        encryptMobile() {
            const type = 'xxx****xxxx'
            return type.replace(/x/g, (a, b) => this.mobile[b])
        }
    },
    beforeCreate() {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fontawesome-webfont.ttf')"
        })
    },
    methods: {
        pickNickName() {
            modal.prompt(
                {
                    message: '昵称设置',
                    duration: 0.3,
                    okTitle: '确认',
                    cancelTitle: '取消'
                },
                res => {
                    if (res.result === '确认') {
                        this.nickname = res.data
                    }
                }
            )
        },
        pickGender() {
            const i = this.genderList.findIndex(e => e === this.gender)
            picker.pick(
                {
                    index: i > -1 ? i : 0,
                    items: this.genderList
                },
                res => {
                    if (res.result === 'success') {
                        this.gender = this.genderList[res.data]
                    }
                }
            )
        },
        pickBirth() {
            const date = getFormatDate()
            picker.pickDate(
                {
                    value: date,
                    max: date
                },
                res => {
                    if (res.result === 'success') {
                        this.birthday = res.data
                    }
                }
            )
        },
        pickLocation() {
            modal.prompt(
                {
                    message: '位置设置',
                    duration: 0.3,
                    okTitle: '确认',
                    cancelTitle: '取消'
                },
                res => {
                    if (res.result === '确认') {
                        this.location = res.data
                    }
                }
            )
        }
    }
}
</script>

<style scoped>
.icon {
    font-family: fontAwesome;
    color: #4d4d4d;
    margin-right: 20px;
    font-size: 30px;
}

.rightIcon {
    font-family: fontAwesome;
    color: #4d4d4d;
    font-size: 20px;
    margin-left: 16px;
}

.flex-row {
    flex-direction: row;
    align-items: center;
}

.container {
    margin-top: 20px;
    padding-left: 36px;
    padding-right: 36px;
    background-color: #ffffff;
}

/* 头像 */
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50px;
}

.item {
    padding-top: 30px;
    padding-bottom: 30px;
    color: #4d4d4d;
    font-size: 28px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.value {
    font-size: 28px;
    color: #4d4d4d;
}
</style>
