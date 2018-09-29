<template>
    <div class="circle">

        <!-- 搜索 -->
        <div class="searchBar">
            <span>快速查询</span>
            <input class="searchInput" type="text" placeholder="输入球队/球星的名字" @click="isFastSearch = true" @blur="isFastSearch = false">

            <transition name="translateY-20">
                <div v-show="isFastSearch" class="fastSearch">
                    <div class="fastSearchItem" v-for="item in 12" :key="item">
                        世界杯
                    </div>
                </div>
            </transition>
        </div>



        <div class="column" v-for="column in columns" :key="column.name">
            <div class="columnName">{{column.name}}</div>

            <div class="columnList">
                <div class="columnItem" v-for="item in column.list" :key="item.name">
                    <img :src="item.img">
                    <div>{{ item.name }}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { getCircleAll } from '@/Api/community';

export default {
    name: 'community_circle',
    data() {
        return {
            columns: {},
            isFastSearch: false
        };
    },
    created() {
        this.getColums();
    },
    methods: {
        getColums() {
            getCircleAll().then(res => {
                this.columns = res.data.data;
            });
        }
    }
};
</script>

<style scoped lang="scss">
.circle {
    background-color: $bg-body;

    .searchBar {
        background: #0099ff;
        font-size: 24px;
        height: 70px;
        line-height: 70px;
        color: #ffffff;
        padding-left: 36px;
        position: relative;

        .searchInput {
            width: 564px;
            height: 50px;
            background-color: #ffffff;
            border-radius: 25px;
            opacity: 0.4;
            margin-left: 20px;
            padding: 0 40px;
            vertical-align: middle;
            line-height: 50px;
        }

        .fastSearch {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: #fff;
            text-align: center;
            padding: 10px 0 20px;
            box-shadow: 0px 3px 12px rgba(0, 51, 109, 0.3);

            .fastSearchItem {
                display: inline-block;
                width: 206px;
                height: 50px;
                line-height: 48px;
                border: 1px solid #cccccc;
                font-size: 24px;
                color: #b3b3b3;
                margin: 10px 20px;
            }
        }
    }

    .column {
        margin-bottom: 20px;
        padding: 30px 36px 10px;
        background: #fff;

        .columnName {
            font-size: 28px;
            line-height: 36px;
            color: $grey-dark;
        }

        .columnList {
            padding: 10px 0;
            .columnItem {
                display: inline-block;
                width: calc(20% - 4px);
                text-align: center;
                font-size: 24px;
                line-height: 36px;
                color: $grey;
                margin: 10px 0;
                img {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                }
            }
        }
    }
}

.translateY-20-enter-active,
.translateY-20-leave-active {
    transition: all 0.5s;
}
.translateY-20-enter,
.translateY-20-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
