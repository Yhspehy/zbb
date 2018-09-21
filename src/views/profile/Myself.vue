<template>
    <div class="setting-myself">
        <div class="container">
            <div class="item" style="padding: 2vw 0">
                <span>
                    <i class="fa fa-user-circle"></i>头像
                </span>
                <div class="header-img" @click="show.genderPhoto = 'photo'">
                    <img src="http://temp.im/50x50" class="user-header">
                </div>
            </div>
        </div>


        <div class="container">
            <div class="item border-bottom-1px">
                <span>
                    <i class="fa fa-user"></i>
                    <span>昵称</span>
                </span>
                <span  @click="show.nickname = true">
                    {{nickname}}
                    <i class="fa fa-angle-right"></i>
                </span>
            </div>
            <div class="item border-bottom-1px">
                <span>
                    <i class="fa fa-male"></i>
                    <span>性别</span>
                </span>
                <span @click="show.genderPhoto = 'gender'">
                    {{gender}}
                    <i class="fa fa-angle-right"></i>
                </span>
            </div>
            <div class="item border-bottom-1px">
                <span>
                    <i class="fa fa-birthday-cake"></i>
                    <span>生日</span>
                </span>
                <span @click="show.birthLocation = 'birth'">
                    {{birthday}}
                    <i class="fa fa-angle-right"></i>
                </span>
            </div>
            <div class="item">
                <span>
                    <i class="fa fa-map-marker"></i>
                    <span>位置</span>
                </span>
                <span @click="show.birthLocation = 'location'">
                    {{location}}
                    <i class="fa fa-angle-right"></i>
                </span>
            </div>
        </div>


        <div class="container">
            <div class="item border-bottom-1px">
                <span>
                    <i class="fa fa-mobile"></i>手机号码
                </span>
                <span>{{encryptMobile}}</span>
            </div>
            <div class="item">
                <span>
                    <i class="fa fa-id-card"></i>账号ID
                </span>
                <span>{{id}}</span>
            </div>
        </div>


        
        <nickname v-if="show.nickname" @save="nicknameSave" @close="close"></nickname>

        <gender-photo v-if="show.genderPhoto" :type="show.genderPhoto" @save="genderPhotoSave"></gender-photo>

        <birth-location
            v-if="show.birthLocation"
            :type="show.birthLocation"
            @save="birthLocationSave"
            @close="close">
        </birth-location>

    </div>
</template>

<script>
import birthLocation from './_components/BirthAndLocation';
import genderPhoto from './_components/GenderPhoto';
import nickname from './_components/Nickname';

import { SafariSlideLeftTwiceTransitionAddLis, SafariSlideLeftTwiceTransitionRemoveLis } from '@/utils/index';

export default {
    name: 'profile_setting_myself',
    components: {
        birthLocation,
        genderPhoto,
        nickname
    },
    data() {
        return {
            nickname: '用户10086',
            gender: '请选择',
            birthday: '请选择',
            location: '请选择',
            mobile: '18283837373',
            id: 10086,
            show: {
                nickname: false,
                birthLocation: false,
                genderPhoto: false
            }
        };
    },
    computed: {
        encryptMobile() {
            const type = 'xxx****xxxx';
            return type.replace(/x/g, (a, b) => this.mobile[b]);
        }
    },
    mounted() {
        SafariSlideLeftTwiceTransitionAddLis(this);
    },
    beforeDestroy() {
        SafariSlideLeftTwiceTransitionRemoveLis();
    },
    methods: {
        close(key) {
            this.show[key] = false;
        },
        birthLocationSave(res) {
            const type = this.show.birthLocation;
            const val = `${res[0]}-${res[1]}-${res[2]}`;
            if (type === 'birth') {
                this.birthday = val;
            } else {
                this.location = val;
            }
            this.close('birthLocation');
        },
        genderPhotoSave(data) {
            if (this.show.genderPhoto === 'gender') {
                const old = this.gender;
                this.gender = data === '请选择' ? old : data;
            }
            this.close('genderPhoto');
        },
        nicknameSave(name) {
            this.nickname = name;
            this.close('nickname');
        }
    }
};
</script>

<style scoped lang="scss">
.setting-myself {
    overflow: hidden;
    .container {
        margin-top: 20px;
        padding: 0 36px;
        background: #fff;

        .header-img {
            position: relative;
            &:after {
                content: '';
                position: absolute;
                width: 30px;
                height: 30px;
                bottom: 6px;
                right: 0;
                background-image: linear-gradient(
                    -45deg,
                    #1d75f2 0%,
                    #0f6ef9 0%,
                    #0066ff 0%,
                    #0073ff 0%,
                    #0080ff 0%,
                    #009aff 50%,
                    #04a7ff 73%,
                    #07b5ff 100%
                );
                border-radius: 50%;
            }

            .user-header {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
        }

        .item {
            padding: 30px 0;
            color: $grey-dark;
            font-size: 28px;
            @include flex-center-between;

            .fa {
                width: 50px;
            }
        }
    }
    .border-bottom-1px {
        @include border-bottom-1px;
    }
}
</style>
