<template>
    <div class="statsPlayer" :id="id">
        <table>
            <thead>
                <tr>
                    <td class="border-bottom-1px" v-for="hItem in head.row" :key="hItem">{{hItem}}</td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="tItem in stats" :key="tItem.player_id">
                    <td v-for="(item, idx) in tItem.row" :key="idx">
                        <div class="tdDiv"  :class="{'width-100': idx === 6 || idx === 7 || idx === 8}">{{item}}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name: 'live_statsPlayer',
    components: { BScroll },
    props: {
        data: {
            type: Array,
            require: true
        },
        id: {
            type: String,
            require: true
        }
    },
    computed: {
        head() {
            return this.data[0];
        },
        stats() {
            return this.data.slice(1);
        }
    },
    mounted() {
        this.$nextTick(() => {
            let scroll = new BScroll(`#${this.id}`, {
                scrollX: true,
                eventPassthrough: 'vertical'
            });
            console.log(scroll);
        });
    }
};
</script>

<style scoped lang="scss">
.statsPlayer {
    margin: 0 30px;
    overflow: hidden;
    table {
        text-align: center;
        font-size: 28px;
        border-collapse: collapse;
        color: $grey;
        thead tr td {
            font-size: 24px;
            padding: 10px 0;
            @include border-bottom-1px;
        }
        tr td:first-child {
            text-align: left;
        }

        tbody tr {
            .tdDiv {
                padding: 10px 0;
                width: 80px;
            }
            .width-100 {
                width: 100px;
            }
            & > td:first-child {
                .tdDiv {
                    width: 200px;
                    @include text-ellipsis;
                }
            }
        }
    }
}
</style>
