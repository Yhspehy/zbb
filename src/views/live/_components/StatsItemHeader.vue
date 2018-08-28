<template>
    <div class="statsItemHeader border-bottom-1px">
        <div>{{name}}</div>

        <i  class="fas fa-angle-down"
            :class="{'rotate': IsExpand}"
            @click="emitClick">
        </i>
    </div>
</template>

<script>
export default {
    name: 'live_statsItemHeader',
    props: {
        name: {
            type: String,
            require: true
        },
        isExpand: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            IsExpand: this.isExpand
        };
    },
    methods: {
        emitClick() {
            this.IsExpand = !this.IsExpand;
            this.$emit('expand');
        }
    }
};
</script>

<style scoped lang="scss">
.statsItemHeader {
    display: flex;
    justify-content: space-between;
    padding: 30px 35px 20px;
    @include border-bottom-1px($bg-grey, 92%);

    .fa-angle-down {
        font-size: 30px;
        cursor: pointer;
        transition: transform 0.5s;
    }

    .rotate {
        transform: rotate(180deg);
    }
}
</style>
