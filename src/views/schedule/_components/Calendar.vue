<template>
    <div class="calendar">
        <!-- 样式一 -->
        <div class="header1" v-if="header1">
            <!-- 选择年份 -->
            <div class="year">
                <div class="year-header" @click.stop="showDropDown('year')">
                    <div class="rendered">{{choose.year}}</div>
                </div>
                <transition name="dropdown">
                    <div class="dropdown" v-if="visable.year">
                        <ul>
                            <li v-for="yearItem in yearList" @click="chooseYear(yearItem)" :key="yearItem">{{yearItem}}</li>
                        </ul>
                    </div>
                </transition>
            </div>
            <!-- 选择月份 -->
            <div class="month">
                <div class="month-header" @click.stop="showDropDown('month')">
                    <div class="rendered">{{choose.month}}</div>
                </div>
                <transition name="dropdown">
                    <div class="dropdown" v-if="visable.month">
                        <ul>
                            <li v-for="monthItem in monthList" @click="chooseMonth(monthItem)" :key="monthItem">{{monthItem}}</li>
                        </ul>
                    </div>
                </transition>
            </div>
            <!-- 选择月显示还是年显示 -->
            <div class="radio-group" v-if="isShowYear">
                <div class="radio-group-item radio-group-month" @click="() => radioGroup = 'month'" :class="{'radio-month-checked': radioGroup === 'month'}">Month
                </div>
                <div class="radio-group-item radio-group-year" @click="() => radioGroup = 'year'" :class="{'radio-year-checked': radioGroup === 'year'}">Year
                </div>
            </div>

        </div>
        
        <!-- 样式二 -->
        <div class="header2" v-if="header2">
            <i @click="prevMonth" class="fas fa-chevron-left"></i>
            <span class="time">{{choose.year}}年{{choose.month}}</span>
            <i @click="nextMonth" class="fas fa-chevron-right"></i>
        </div>

        <div class="full">
            <table class="month-table">
                <thead>
                    <tr>
                        <td v-for="day in dayHeaderList" :key="day">{{day}}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(week, idx) in daysObject.weekArr" :key="idx">
                        <td v-for="date in week" :key="date.rowDate">
                            <div class="dateCell" :class="{
                                     'not-this-month-data': date.month != choose.month,
                                     'chooseDate': date.day == choose.day && date.month == choose.month}" @click="chooseDay(date)">
                                <div>{{date.day}}</div>
                                <div class="matchCount">{{cloneItemList[date.rowDate] ? cloneItemList[date.rowDate].match_count : 0}}场</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
/**
 *
 * 日历组件
 *
 * 可供选项：
 * 1.header1  日历头部样式一，可自行使用查看样式
 * 2.header2  日历头部样式二
 * 3.isShowYear  样式一头部是否显示年份选择
 * 4.itemList  数据对象传入{'2018-09-01': {}, .....}
 * 5.setDate  设置默认显示的日期
 * 6.cacheData   是否缓存数据
 *
 */

export default {
    name: 'schedule_calendar',
    props: {
        header1: {
            type: Boolean,
            default: false
        },
        header2: {
            type: Boolean,
            default: false
        },
        isShowYear: {
            type: Boolean,
            default: false
        },
        itemList: {
            type: Object,
            default: function() {
                return {};
            }
        },
        setDate: {
            type: String,
            default: ''
        },
        cacheData: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            visable: {
                month: false,
                year: false
            },
            choose: {
                year: this.$moment()
                    .locale('zh-cn')
                    .format('YYYY'),
                month: this.$moment()
                    .locale('zh-cn')
                    .format('MMM'),
                day: ''
            },
            cloneItemList: {},
            radioGroup: 'month',
            dayHeaderList: ['日', '一', '二', '三', '四', '五', '六']
        };
    },
    computed: {
        yearList() {
            let arr = [];
            let thisYear = this.$moment().year();
            for (let i = thisYear - 5; i < thisYear + 5; i++) {
                arr.push(i);
            }
            return arr;
        },
        monthList() {
            let arr = [];
            for (let i = 0; i < 12; i++) {
                arr.push(
                    this.$moment()
                        .month(i)
                        .format('MMM')
                );
            }
            return arr;
        },
        daysObject() {
            let weekIdx = this.$moment()
                .year(this.choose.year)
                .month(this.choose.month)
                .date(1)
                .format('w');
            let month = this.$moment()
                .year(this.choose.year)
                .month(this.choose.month)
                .format('MMM');
            let begin = this.$moment()
                .year(this.choose.year)
                .month(month)
                .date(1)
                .format('dd');
            let days = this.$moment()
                .year(this.choose.year)
                .month(month)
                .daysInMonth();
            let weeks = 6;
            let weekArr = [];
            for (let i = 0; i < weeks; i++) {
                let weekItem = [];
                for (let j = 0; j < 7; j++) {
                    let rowDate = this.$moment()
                        .year(this.choose.year)
                        .week(Number(weekIdx) + i)
                        .day(j)
                        .format('YYYY-MM-DD');
                    weekItem.push({
                        rowDate: rowDate,
                        day: this.$moment(rowDate).format('D'),
                        month: this.$moment(rowDate).format('MMM'),
                        year: this.$moment(rowDate).format('YYYY')
                    });
                }
                weekArr.push(weekItem);
            }
            return {
                weekIdx: weekIdx,
                month: month,
                begin: begin,
                num: days,
                weekArr: weekArr
            };
        }
    },
    created() {
        this.$moment.locale('zh-cn');
    },
    mounted() {
        const self = this;
        window.document.addEventListener('click', function() {
            self.visable.month = false;
            self.visable.year = false;
        });
        if (this.setDate) {
            let val = this.setDate;
            if (val === 'default') return;
            this.choose.year = val.match(/^(\d{4}).*/)[1];
            this.choose.month = this.$moment()
                .month(val.match(/^\d{4}-(\d{2})-.*/)[1] - 1)
                .format('MMM');
            if (val.match(/^\d{4}-\d{2}-(\d{2}).*/)[1]) {
                this.choose.day =
                    val.match(/^\d{4}-\d{2}-(\d{2}).*/)[1] === '00'
                        ? ''
                        : this.$moment()
                              .date(val.match(/^\d{4}-\d{2}-(\d{2}).*/)[1])
                              .format('D');
            }
        }
    },
    destoryed() {
        const self = this;
        window.document.removeEventListener('click', function() {
            self.visable.month = false;
            self.visable.year = false;
        });
    },
    methods: {
        showDropDown(type) {
            this.visable.month = false;
            this.visable.year = false;
            this.visable[type] = true;
        },
        chooseHeader(type, data) {
            this.choose[type] = data;
            this.visable[type] = false;
        },
        chooseDay(date) {
            if (this.cloneItemList[date.rowDate] && this.cloneItemList[date.rowDate].length === 0) {
                return false;
            }
            if (date.month === this.choose.month) {
                this.choose.day = date.day;
            } else {
                this.choose.year = date.year;
                this.choose.month = date.month;
                this.choose.day = '';
            }
            this.$emit('chooseDay', date);
        },
        chooseYear(year) {
            this.choose.year = year;
            this.$emit('chooseYear', this.choose);
        },
        chooseMonth(month) {
            this.choose.month = month;
            this.$emit('chooseMonth', this.choose);
        },
        prevMonth() {
            let month = this.choose.month.match(/(.*)月$/)[1];
            if (month == 1) {
                this.choose.year = Number(this.choose.year) - 1 + '';
                this.choose.month = '12月';
            } else {
                this.choose.month = Number(month) - 1 + '月';
            }
            this.$emit('chooseMonth', this.choose);
        },
        nextMonth() {
            let month = this.choose.month.match(/(.*)月$/)[1];
            if (month == 12) {
                this.choose.year = Number(this.choose.year) + 1 + '';
                this.choose.month = '1月';
            } else {
                this.choose.month = Number(month) + 1 + '月';
            }
            this.$emit('chooseMonth', this.choose);
        }
    },
    watch: {
        itemList: {
            immediate: true,
            handler: function(val) {
                if (this.cacheData) {
                    for (let key in val) {
                        this.$set(this.cloneItemList, key, val[key]);
                    }
                } else {
                    this.cloneItemList = val;
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@mixin flex {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}

@mixin border {
    border: 1px solid rgb(217, 217, 217);
    border-radius: 4px;
}

// animations
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.5s;
}
.dropdown-enter,
.dropdown-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

.calendar {
    width: 100%;
    background-color: #fff;
    font-size: 24px;

    .header1 {
        padding: 8px 20px 8px 50px;
        box-shadow: 0 1px 0 0 rgb(217, 217, 217);
        @include flex;

        .year,
        .month,
        .radio-group {
            height: 24px;
            cursor: pointer;
            transition: border-color 0.3s;
            position: relative;
            @include border;
            @include flex;
            &:hover {
                border-color: #40a9ff;
            }
        }

        .year-header,
        .month-header {
            padding: 0 25px 0 5px;
        }

        .month {
            margin: 0 10px;
        }

        .arrow {
            position: absolute;
            right: 5px;
            top: 5px;
            transition: transform 0.3s;
        }
        .rotate {
            transform: rotate(180deg);
        }

        .dropdown {
            position: absolute;
            top: 24px;
            left: 0;
            right: 0;
            background: #fff;
            max-height: 200px;
            overflow-y: scroll;
            padding: 5px 0;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
            li {
                text-align: center;
                padding: 5px 0;
                display: block;
                &:hover {
                    background-color: #e6f7ff;
                }
            }
        }

        .radio-group {
            padding: 0 10px;
            border: 0;
            @include flex;
            .radio-group-month {
                cursor: pointer;
                padding: 0 6px;
                border: 1px solid rgb(217, 217, 217);
                border-right: 0;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                transition: border-color 0.3s;
            }
            .radio-group-year {
                padding: 0 6px;
                cursor: pointer;
                border: 1px solid rgb(217, 217, 217);
                border-left: 0;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                transition: border-color 0.3s;
            }
            .radio-month-checked {
                border-right: 1px solid #40a9ff;
                border-color: #40a9ff;
            }
            .radio-year-checked {
                border-left: 1px solid #40a9ff;
                border-color: #40a9ff;
            }
        }
    }

    .header2 {
        text-align: center;
        margin-bottom: 20px;
        .time {
            margin: 0 30px;
            font-size: 24px;
            color: $grey;
        }
    }

    .full {
        width: 100%;
        padding: 8px 12px;
        .month-table {
            width: 100%;
            text-align: center;
            thead tr td {
                color: $grey;
                padding-bottom: 10px;
            }
            .dateCell {
                width: 74px;
                height: 74px;
                margin: 0 auto;
                cursor: pointer;
                transition: background-image 0.3s;
                cursor: pointer;
                border-radius: 50%;
                color: $grey-dark;
                @include flex-center;
                flex-flow: column nowrap;
                .matchCount {
                    margin-top: 10px;
                    font-size: 22px;
                    color: $grey-light;
                }
            }
            // .dateCell:not(.noData):hover {
            //     background-image: linear-gradient(270deg, #f3091a 0%, #f63146 50%, #fb413b 74%, #ff512f 100%),
            //         linear-gradient(#4d4d4d, #4d4d4d);
            //     color: #fff;
            // }
            .noData {
                background: #f7f7f7;
                cursor: not-allowed;
                color: #bbbec4;
            }
            .not-this-month-data {
                color: rgba(0, 0, 0, 0.25);
            }
            .chooseDate {
                @include bg-red;
                color: #fff;
                .matchCount {
                    color: #fff;
                }
            }
        }
    }
}
</style>
