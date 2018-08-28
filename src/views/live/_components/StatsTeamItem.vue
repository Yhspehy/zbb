<template>
    <div class="statsTeamItem">
        <div class="info">
            <div>{{home}}</div>
            <div>{{title}}</div>
            <div>{{away}}</div>
        </div>

        <div class="lineCompare">
            <div class="line">
                <div class="dataLine positionRight"
                    :style="{
                        'background': (lineHome ? lineHome >= lineAway : home >= away) ? '#f3091a' : '#b3b3b3',
                        'width': lineHome ? lineHome / (lineHome + lineAway) * 44.8 + 'vw' : Number(home) / (Number(home) + (Number(away))) * 44.8 + 'vw'
                    }">
                </div>
            </div>
            <div class="line">
                <div class="dataLine"
                    :style="{
                        'background': (lineHome ? lineAway >= lineHome : away >= home) ? '#f3091a' : '#b3b3b3',
                        'width': lineHome ? lineAway / (lineHome + lineAway) * 44.8 + 'vw' : Number(away) / (Number(home) + (Number(away))) * 44.8 + 'vw'
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
};
</script>

<style scoped lang="scss">
.statsTeamItem {
    font-size: 24px;
    padding: 10px 35px;
    color: $grey;

    .info {
        margin-bottom: 10px;
        @include flex-center-between;
    }
    .lineCompare {
        @include flex-center-between;
        .line {
            width: 336px;
            background: $bg-body;
            height: 6px;
            position: relative;
            .dataLine {
                position: absolute;
                height: 6px;
            }
        }
        .positionRight {
            right: 0;
        }
    }
}
</style>
