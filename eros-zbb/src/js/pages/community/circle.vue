<template>
    <div class="circle">

        <!-- 搜索 -->
        <div class="searchBar">
            <text style="color: #ffffff;font-size: 24px;">快速查询11</text>
            <input class="searchInput" type="text" placeholder="输入球队/球星的名字" @input="isFastSearch = true" @blur="isFastSearch = false">

            <div v-if="isFastSearch" class="fastSearch">
                <div class="fastSearchItem" v-for="item in 12" :key="item">
                    世界杯
                </div>
            </div>
        </div>

        <list class="list">
            <cell v-for="(column, key) in columns" :key="key">
                <div class="column">
                    <text class="columnName">{{column.name}}</text>

                    <div class="columnList">
                        <div class="columnItem" v-for="item in column.list" :key="item.name">
                            <image class="img" :src="item.img"></image>
                            <text class="teamName">{{ item.name }}</text>
                        </div>
                    </div>
                </div>
            </cell>
        </list>
    </div>
</template>

<script>
export default {
    name: 'community_circle',
    components: {},
    data () {
        return {
            columns: {},
            isFastSearch: false
        }
    },
    created () {
        this.$notice.loading.show()
        this.getColums()
    },
    methods: {
        getColums () {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/community/circle/all'
            }).then(res => {
                this.columns = {
                    poppular: res.data.poppular,
                    follow: res.data.follow,
                    country: res.data.country,
                    NBA: res.data.NBA
                }
                this.$notice.loading.hide()
            })
        }
    }
}
</script>

<style scoped>
.circle {
    background-color: #f3f7f9;
    flex: 1;
}

.searchBar {
    background-color: #0099ff;
    height: 70px;
    padding-left: 36px;
    flex-direction: row;
    align-items: center;
}

.searchInput {
    width: 564px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 25px;
    opacity: 0.4;
    margin-left: 20px;
    padding-left: 40px;
    padding-right: 40px;
    line-height: 50px;
    font-size: 24px;
}

.fastSearch {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: #ffffff;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 20px;
    box-shadow: 0px 3px 12px rgba(0, 51, 109, 0.3);
    flex-flow: row wrap;
}

.fastSearchItem {
    width: 206px;
    height: 50px;
    line-height: 48px;
    /* border: 1px solid #cccccc; */
    font-size: 24px;
    color: #b3b3b3;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;
}

.list {
    flex: 1;
}

.column {
    width: 750px;
    margin-bottom: 20px;
    padding-top: 30px;
    padding-right: 36px;
    padding-left: 36px;
    padding-bottom: 10px;
    background-color: #ffffff;
}

.columnName {
    font-size: 28px;
    line-height: 36px;
    color: #4d4d4d;
}

.columnList {
    width: 678px;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: row;
    flex-wrap: wrap;
}
.columnItem {
    width: 130px;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
}
.img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
}
.teamName {
    font-size: 24px;
    color: #808080;
    margin-top: 10px;
}
</style>
