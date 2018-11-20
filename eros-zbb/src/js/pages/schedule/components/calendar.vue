<template>
    <div class="calendar">

        <div class="header">
            <text class="icon" @click="prevMonth">&#xf053;</text>
            <text class="time">{{choose.year}}年{{choose.month}}</text>
            <text class="icon" @click="nextMonth">&#xf054;</text>
        </div>

        <div class="full">
            <div class="monthTable">
                <div class="tableHeader">
                    <div class="dateCell" v-for="day in dayHeaderList" :key="day">
                        <text>{{day}}</text>
                    </div>
                </div>

                <div class="tableContentRow" v-for="(week, idx) in daysObject.weekArr" :key="idx">
                    <div v-for="date in week"
                         :key="date.rowDate"
                         :class="['dateCell',date.day === choose.day && date.month === choose.month ? 'chooseDateBg': '']"
                         @click="chooseDay(date)">
                        <text :class="[
                                'dayText',
                                date.month !== choose.month ? 'not-this-month-data': '',
                                date.day == choose.day && date.month == choose.month ? 'chooseDateText': ''
                                ]">{{date.day}}</text>
                        <text :class="[
                                'matchCount',
                                date.month !== choose.month ? 'not-this-month-data': '',
                                date.day == choose.day && date.month == choose.month ? 'chooseDateText': ''
                                ]">{{cloneItemList[date.rowDate] ? cloneItemList[date.rowDate].match_count : 0}}场</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const domModule = weex.requireModule('dom')

export default {
    name: 'schedule_calendar',
    props: {
        itemList: {
            type: Object,
            default: () => {}
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
            dayHeaderList: ['日', '一', '二', '三', '四', '五', '六']
        }
    },
    computed: {
        yearList() {
            let arr = []
            let thisYear = this.$moment().year()
            for (let i = thisYear - 5; i < thisYear + 5; i++) {
                arr.push(i)
            }
            return arr
        },
        monthList() {
            let arr = []
            for (let i = 0; i < 12; i++) {
                arr.push(
                    this.$moment()
                        .month(i)
                        .format('MMM')
                )
            }
            return arr
        },
        daysObject() {
            let weekIdx = this.$moment()
                .year(this.choose.year)
                .month(this.choose.month)
                .date(1)
                .format('w')
            let month = this.$moment()
                .year(this.choose.year)
                .month(this.choose.month)
                .format('MMM')
            let begin = this.$moment()
                .year(this.choose.year)
                .month(month)
                .date(1)
                .format('dd')
            let days = this.$moment()
                .year(this.choose.year)
                .month(month)
                .daysInMonth()
            let weeks = 6
            let weekArr = []
            for (let i = 0; i < weeks; i++) {
                let weekItem = []
                for (let j = 0; j < 7; j++) {
                    let rowDate = this.$moment()
                        .year(this.choose.year)
                        .week(Number(weekIdx) + i)
                        .day(j)
                        .format('YYYY-MM-DD')
                    weekItem.push({
                        rowDate: rowDate,
                        day: this.$moment(rowDate).format('D'),
                        month: this.$moment(rowDate).format('MMM'),
                        year: this.$moment(rowDate).format('YYYY')
                    })
                }
                weekArr.push(weekItem)
            }
            return {
                weekIdx: weekIdx,
                month: month,
                begin: begin,
                num: days,
                weekArr: weekArr
            }
        }
    },
    beforeCreate() {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fa-solid-900.ttf')"
        })
    },
    created() {
        this.$moment.locale('zh-cn')
    },
    mounted() {
        if (this.setDate) {
            let val = this.setDate
            if (val === 'default') return
            this.choose.year = val.match(/^(\d{4}).*/)[1]
            this.choose.month = this.$moment()
                .month(val.match(/^\d{4}-(\d{2})-.*/)[1] - 1)
                .format('MMM')
            if (val.match(/^\d{4}-\d{2}-(\d{2}).*/)[1]) {
                this.choose.day =
                    val.match(/^\d{4}-\d{2}-(\d{2}).*/)[1] === '00'
                        ? ''
                        : this.$moment()
                            .date(val.match(/^\d{4}-\d{2}-(\d{2}).*/)[1])
                            .format('D')
            }
        }
    },
    methods: {
        chooseDay(date) {
            if (this.cloneItemList[date.rowDate] && this.cloneItemList[date.rowDate].length === 0) {
                return false
            }
            if (date.month === this.choose.month) {
                this.choose.day = date.day
            } else {
                this.choose.year = date.year
                this.choose.month = date.month
                this.choose.day = ''
            }
            this.$emit('chooseDay', date)
        },
        chooseYear(year) {
            this.choose.year = year
            this.$emit('chooseYear', this.choose)
        },
        prevMonth() {
            let month = this.choose.month.match(/(.*)月$/)[1]
            if (month === 1) {
                this.choose.year = Number(this.choose.year) - 1 + ''
                this.choose.month = '12月'
            } else {
                this.choose.month = Number(month) - 1 + '月'
            }
            this.$emit('chooseMonth', this.choose)
        },
        nextMonth() {
            let month = this.choose.month.match(/(.*)月$/)[1]
            if (month === 12) {
                this.choose.year = Number(this.choose.year) + 1 + ''
                this.choose.month = '1月'
            } else {
                this.choose.month = Number(month) + 1 + '月'
            }
            this.$emit('chooseMonth', this.choose)
        }
    },
    watch: {
        itemList: {
            immediate: true,
            handler: function(val) {
                if (this.cacheData) {
                    for (let key in val) {
                        this.$set(this.cloneItemList, key, val[key])
                    }
                } else {
                    this.cloneItemList = val
                }
            }
        }
    }
}
</script>

<style scoped>
.icon {
    font-family: fontAwesome;
    color: #0088ff;
    font-size: 24px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.calendar {
    background-color: #fff;
}

.header {
    text-align: center;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.time {
    font-size: 24px;
    color: #808080;
}

.full {
    padding-left: 25px;
    padding-right: 25px;
}

.tableHeader,
.tableContentRow {
    flex-direction: row;
    padding-bottom: 10px;
}

.dateCell {
    width: 100px;
    height: 100px;
    transition: backgroundColor 0.3s;
    border-radius: 50px;
    color: #4d4d4d;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
}

.dayText {
    color: #4d4d4d;
    font-size: 22px;
}

.matchCount {
    margin-top: 10px;
    font-size: 22px;
    color: #b3b3b3;
}

.noData {
    background: #f7f7f7;
    cursor: not-allowed;
    color: #bbbec4;
}

.not-this-month-data {
    color: rgba(0, 0, 0, 0.25);
}

.chooseDateBg {
    background-color: #f5303d;
}

.chooseDateText {
    color: #fff;
}
</style>
