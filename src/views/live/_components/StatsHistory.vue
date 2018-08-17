<template>
    <div class="statsHistory">
         <table>
            <thead>
                <tr>
                    <td class="border-bottom-1px" v-for="hItem in head.row" :key="hItem">{{hItem}}</td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="tItem in stats" :key="tItem.player_id">
                    <td v-for="(item, idx) in tItem.row" :key="idx">
                        {{item}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'live_statsHistory',
    props: {
        data: {
            type: Array,
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
    }
};
</script>

<style scoped lang="scss">
.statsHistory {
    padding: 0 30px;
    table {
        width: 100%;
        color: $font-color-grey;
        font-size: 24px;
        padding: 20px 0;
        text-align: center;
        border-collapse: collapse;
        thead tr td {
            padding: 10px 0;
            @include border-bottom-1px;
        }
        tbody tr td {
            padding: 10px 0;
        }
    }
}
</style>
