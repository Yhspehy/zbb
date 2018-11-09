<template>
    <div class="statsTeamItem">
        <div class="info">
            <text class="infoText">{{home}}</text>
            <text class="infoText">{{title}}</text>
            <text class="infoText">{{away}}</text>
        </div>

        <div class="lineCompare">
            <div class="line">
                <div class="dataLine positionRight" :style="{
                        'backgroundColor': (lineHome ? lineHome >= lineAway : home >= away) ? '#f3091a' : '#b3b3b3',
                        'width': lineHome ? lineHome / (lineHome + lineAway) * 336 + 'px' : Number(home) / (Number(home) + (Number(away))) * 336 + 'px'
                    }">
                </div>
            </div>
            <div class="line">
                <div class="dataLine" :style="{
                        'backgroundColor': (lineHome ? lineAway >= lineHome : away >= home) ? '#f3091a' : '#b3b3b3',
                        'width': lineHome ? lineAway / (lineHome + lineAway) * 336 + 'px' : Number(away) / (Number(home) + (Number(away))) * 336 + 'px'
                    }">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'live_statsTeamItem',
    props: {
        home: {
            type: [String, Number],
            require: true
        },
        away: {
            type: [String, Number],
            require: true
        },
        title: {
            type: String,
            require: true
        },
        lineHome: {
            type: Number,
            default: 0
        },
        lineAway: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped lang="scss">
.statsTeamItem {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 35px;
    padding-right: 35px;
}

.info {
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.infoText {
    font-size: 24px;
    color: #808080;
}

.lineCompare {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.line {
    width: 336px;
    background: #f3f7f9;
    height: 6px;
}
.dataLine {
    position: absolute;
    height: 6px;
}

.positionRight {
    right: 0;
}
</style>
