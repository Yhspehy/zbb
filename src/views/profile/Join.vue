<template>
<transition name="birth">
      <div class="setting-join">
        <cut-off-line></cut-off-line>

        <div class="joinContent">
            <div class="item border-bottom-1px" v-for="(item, idx) in list" :key="item.name">
                <span>
                    <i class="fa fa-qq"></i>
                    <span>
                        {{item.name}}：
                        <span class="greyValue" :class="'copy' + idx">{{item.value}}</span>
                    </span>
                </span>
                <span class="copyBtn" @click="onCopy('.copy' + idx)">复制</span>
            </div>
        </div>
    </div>
</transition>
  
</template>

<script>
import HeaderBar from '@/components/HeaderBar';
import cutOffLine from '@/components/CutOffLine';
import { copy } from '@/utils/index';
export default {
    name: 'profile_setting_join',
    components: { HeaderBar, cutOffLine },
    data() {
        return {
            list: [
                {
                    avatar: '',
                    name: 'QQ群',
                    value: 123456789
                },
                {
                    avatar: '',
                    name: '微信公众号',
                    value: 43256676
                }
            ]
        };
    },
    methods: {
        onCopy(el) {
            let res = copy(el);
            if (res) this.$toast({ duration: 500, message: '复制成功' });
        }
    }
};
</script>

<style scoped lang="scss">
.setting-join {
    .joinContent {
        width: 100%;
        height: 180px;
        background: #ffffff;
        padding: 0 36px;

        .greyValue {
            color: $grey;
        }
        .item {
            height: 90px;
            color: $grey-dark;
            font-size: 28px;
            @include flex-center-between;
            @include border-bottom-1px;
            .fa {
                display: inline-block;
                width: 50px;
            }
        }
        .copyBtn {
            color: $blue;
        }
    }

    .birth-enter-active {
        transition: all 0.5s ease;
    }
    .birrh-leave-active {
        transition: all 0.5s ease;
    }
    .birth-enter,
    .birth-leave-to {
        transform: translateY(100px);
        opacity: 0;
    }
}
</style>
