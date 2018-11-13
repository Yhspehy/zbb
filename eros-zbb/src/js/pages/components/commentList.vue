<template>
    <div class="commentlist">
        <text>{{commentlist}}</text>
        <comment-item :item="item" v-for="item in list" :key="item.comment_id"></comment-item>
    </div>
</template>

<script>
import commentItem from './commentItem'
export default {
    name: 'c_commentlist',
    components: { commentItem },
    props: {
        commentlist: {
            type: Array,
            require: true
        }
    },
    data () {
        return {
            nowDate: Date.parse(new Date()) / 1000
        }
    },
    computed: {
        list () {
            const self = this
            if (!this.commentlist) return []
            return this.commentlist.map(e => {
                e.create_time = self.tranTime(e.create_time)
                return e
            })
        }
    },
    methods: {
        tranTime (timestamp) {
            if (this.nowDate - this.$moment(timestamp).format('X') > 60 * 60 * 24) {
                return this.$moment(timestamp).format('MM月MM日 HH:mm')
            } else {
                return this.$moment(timestamp).fromNow()
            }
        }
    }
}
</script>

<style scoped>
</style>
