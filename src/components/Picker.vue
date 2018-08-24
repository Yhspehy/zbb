<template>
    <div class="picker-container">
        <div class="picker-panel">
            <div class="picker-choose">
                <div class="cancel">取消</div>
                <div class="confirm">确认</div>
            </div>
            <div class="picker-content">
                <i class="border-bottom-1px"></i>
                <i class="border-top-1px"></i>
                <div class="picker-wheel-wrapper" ref="wheelWrapper">
                    <div v-for="(data, index) in pickerData" :key="index" class="picker-wheel">
                        <ul class="picker-wheel-scroll">
                            <li v-for="(item, index) in data" :key="index" class="picker-wheel-item">{{item}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
    name: 'picker',
    data() {
        return {
            wheels: [],
            pickerData: {
                year: [2000, 2001, 2002],
                month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                date: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            },
            pickerSelectedIndex: this.selectedIndex || 0
        };
    },
    mounted() {
        let wheelWrapper = this.$refs.wheelWrapper;
        console.log(wheelWrapper);
        let keys = Object.keys(this.pickerData);
        for (let i = 0; i < keys.length; i++) {
            this._createWheel(wheelWrapper, i);
        }
    },
    methods: {
        _createWheel(wheelWrapper, i) {
            this.wheels[i] = new BScroll(wheelWrapper.children[i], {
                wheel: {
                    selectedIndex: 0,
                    wheelWrapperClass: 'picker-wheel-scroll',
                    wheelItemClass: 'picker-wheel-item'
                }
            });
        }
    }
};
</script>

<style lang="scss">
.picker-container {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
}
.picker-panel {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 436px;
    font-size: 28px;
    background-color: #fff;
    .picker-choose {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 36px;
        height: 68px;
        letter-spacing: 2.8px;
        background-color: #eff0f3;
        .cancel {
            color: #b3b3b3;
        }
        .confirm {
            color: $prime-blue;
        }
    }
    .picker-content {
        position: relative;
        i {
            width: 100%;
            z-index: 10;
            pointer-events: none;
        }
        .border-bottom-1px {
            @include border-bottom-1px(#e6e6e6);
            position: absolute;
            top: 0;
            height: 155px;
            background: linear-gradient(0deg, hsla(0, 0%, 100%, 0.4), hsla(0, 0%, 100%, 0.8));
        }
        .border-top-1px {
            @include border-top-1px(#e6e6e6);
            position: absolute;
            bottom: 0;
            height: 150px;
            background: linear-gradient(180deg, hsla(0, 0%, 100%, 0.4), hsla(0, 0%, 100%, 0.8));
        }
        .picker-wheel-wrapper {
            display: flex;
            justify-content: space-around;
            height: 368px;
            .picker-wheel {
                flex: 1;
                text-align: center;
                overflow: hidden;
            }
            .picker-wheel-scroll {
                margin-top: 155px;
                line-height: 62px;
                .picker-wheel-item {
                    height: 62px;
                }
            }
        }
    }
}
</style>
