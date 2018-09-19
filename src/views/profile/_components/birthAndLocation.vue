<template>
    <div class="birthAndLocation">
        <div class="container">
            <header>
                <div class="close" @click="close">取消</div>
                <div class="save">保存</div>
            </header>

            <section>
                <div class="mask-top"></div>
                <div class="mask-bottom"></div>
                <div class="wheel-wrapper" ref="wheelWrapper">
                    <div class="wheel">
                        <ul class="wheel-scroll">
                            <li v-for="item in leftList" class="wheel-item" :key="item">{{item}}</li>
                        </ul>
                    </div>
                    <div class="wheel">
                        <ul class="wheel-scroll">
                            <li v-for="item in middleList" class="wheel-item" :key="item">{{item}}</li>
                        </ul>
                    </div>
                    <div class="wheel">
                        <ul class="wheel-scroll">
                            <li v-for="item in rightList" class="wheel-item" :key="item">{{item}}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>

</template>

<script>
import { getAddress } from '@/Api/profile';
import BScroll from 'better-scroll';

export default {
    name: 'profile_birthAndLocation',
    data() {
        return {
            china: {},
            pickerData: ['leftList', 'middleList', 'rightList'],
            pickerSelectedIndex: [0, 0, 0],
            province: '',
            city: '',
            area: '',
            state: 0
        };
    },
    props: {
        // location or birth
        type: {
            type: String,
            default: 'birth'
        },
        isScrollToTop: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        leftVal() {
            if (this.leftList[0] === '请选择') return '请选择';
            return this.leftList[this.pickerSelectedIndex[0]];
        },
        leftList() {
            if (this.type === 'location') {
                if (!this.china['北京']) return ['请选择'];
                return Object.keys(this.china);
            } else if (this.type === 'birth') {
                const first = this.$moment().year() - 50;
                return Array.from(new Array(100), (val, index) => index + first);
            }
        },
        middleVal() {
            if (this.middleList[0] === '请选择') return '请选择';
            return this.middleList[this.pickerSelectedIndex[1]];
        },
        middleList() {
            if (this.type === 'location') {
                if (this.leftVal === '请选择') return ['请选择'];
                const middleObj = this.china[this.leftVal];
                return Object.keys(middleObj);
            } else if (this.type === 'birth') {
                return Array.from(new Array(12), (val, index) => index + 1);
            }
        },
        rightVal() {
            if (this.rightList[0] === '请选择') return '请选择';
            return this.rightList[this.pickerSelectedIndex[2]];
        },
        rightList() {
            if (this.type === 'location') {
                if (this.middleVal === '请选择') return ['请选择'];
                const rightObj = this.china[this.leftVal][this.middleVal];
                return Object.keys(rightObj);
            } else if (this.type === 'birth') {
                const days = this.$moment(`${this.leftVal}-${this.middleVal}`, 'YYYY-M').daysInMonth();
                return Array.from(new Array(days), (val, index) => index + 1);
            }
        }
    },
    mounted() {
        if (this.type === 'location') {
            getAddress().then(res => {
                this.china = res.data['中国'];
            });
        }
        this.show();
    },
    methods: {
        _createWheel(wheelWrapper, i) {
            if (!this.wheels[i]) {
                this.wheels[i] = new BScroll(wheelWrapper.children[i], {
                    wheel: {
                        selectedIndex: this.pickerSelectedIndex[i],
                        wheelWrapperClass: 'wheel-scroll',
                        wheelItemClass: 'wheel-item'
                    },
                    probeType: 3,
                    deceleration: 0.004
                });
                this.wheels[i].on('scrollEnd', () => {
                    this.$set(this.pickerSelectedIndex, i, this.wheels[i].getSelectedIndex());
                    // location gotoTop
                    if (this.isScrollToTop) {
                        if (i == 0) {
                            this.$set(this.pickerSelectedIndex, 1, 0);
                            this.wheels[1].wheelTo(0);
                            this.$set(this.pickerSelectedIndex, 2, 0);
                            this.wheels[2].wheelTo(0);
                        } else if (i == 1) {
                            this.$set(this.pickerSelectedIndex, 2, 0);
                            this.wheels[2].wheelTo(0);
                        }
                    }
                    // birth days not exist
                    if (i !== 2 && !this.rightList[this.pickerSelectedIndex[2]]) {
                        this.validateDay();
                    }
                });
            } else {
                this.wheels[i].refresh();
            }
            return this.wheels[i];
        },
        show() {
            if (this.state === 1) {
                return;
            }
            this.state = 1;
            if (!this.wheels || this.dirty) {
                this.$nextTick(() => {
                    this.wheels = [];
                    let wheelWrapper = this.$refs.wheelWrapper;
                    for (let i = 0; i < this.pickerData.length; i++) {
                        this._createWheel(wheelWrapper, i);
                    }
                    this.dirty = false;
                });
            } else {
                for (let i = 0; i < this.pickerData.length; i++) {
                    this.wheels[i].enable();
                    this.wheels[i].wheelTo(this.pickerSelectedIndex[i]);
                }
            }
        },
        close() {
            this.state = 0;
            // for (let i = 0; i < this.pickerData.length; i++) {
            //     this.wheels[i].disable();
            // }
            this.$emit('close', 'birth');
        },
        validateDay() {
            let i = this.pickerSelectedIndex[2];
            while (i--) {
                if (this.rightList[i]) break;
            }
            this.$set(this.pickerSelectedIndex, 2, i);
        }
    }
};
</script>

<style scoped lang="scss">
.birthAndLocation {
    position: fixed;
    z-index: 100;
    top: -200px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    .container {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        header {
            font-size: 28px;
            background: #eff0f3;
            padding: 20px 36px;
            @include flex-center-between;
            .close {
                color: $grey-light;
            }
            .save {
                color: $blue;
            }
        }

        section {
            background: #fff;
            color: $grey;
            height: 368px;
            position: relative;

            .mask-top {
                position: absolute;
                width: 100%;
                height: 1px;
                top: 155px;
                background: #e6e6e6;
            }
            .mask-bottom {
                position: absolute;
                width: 100%;
                height: 1px;
                top: 217px;
                background: #e6e6e6;
            }

            .wheel-wrapper {
                width: 100%;
                height: 100%;
                display: flex;
                & > div {
                    flex: 1;
                    height: 100%;
                    overflow: hidden;
                    text-align: center;
                    font-size: 28px;
                    line-height: 36px;
                    color: #808080;
                    .wheel-item {
                        padding: 16px 0;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }
                .wheel-scroll {
                    margin-top: 150px;
                }
            }
        }
    }
}
</style>
