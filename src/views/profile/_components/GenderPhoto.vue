<template>
    <transition name="slide-top">
        <div class="genderPhoto">
            <div class="container">
                <div class="choose">请选择</div>

                <div class="border-top-1px" :class="{'blue': type === 'photo'}" v-for="item in list" :key="item" @click="save(item)">
                    {{ item }}
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'profile_genderPhoto',
    data() {
        return {
            gender: ['保密', '男', '女', '取消'],
            photo: ['从相册选取', '拍照', '取消']
        };
    },
    props: {
        // gender or photo
        type: {
            type: String,
            defalut: 'gender'
        }
    },
    computed: {
        list() {
            return this.type === 'gender' ? this.gender : this.photo;
        }
    },
    methods: {
        save(data) {
            const r = data === '取消' ? '请选择' : data;
            this.$emit('save', r);
        }
    }
};
</script>

<style scoped lang="scss">
.genderPhoto {
    position: fixed;
    z-index: 101;
    top: -200px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    .container {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 110;
        background: #fff;
        flex-flow: column nowrap;
        @include flex-center;

        .choose {
            color: $grey-light;
            font-size: 24px;
            padding: 10px 0;
        }

        .border-top-1px {
            width: 100%;
            text-align: center;
            padding: 28px 0;
            font-size: 28px;
            color: $grey;
            @include border-top-1px;
            &:last-child {
                color: #f5303d;
            }
        }

        .blue {
            color: #0088ff;
        }
    }
}

.slide-top-enter-active {
    transition: all 0.4s ease;
}
.slide-top-leave-active {
    transition: all 0.4s ease;
}
.slide-top-enter,
.slide-top-leave-to {
    transform: translateY(100px);
    opacity: 0;
}
</style>
