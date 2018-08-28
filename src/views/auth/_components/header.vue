<template>
    <div class="header border-bottom-1px">
        <a class="go-back" @click="goBack">
            <i class="fa fa-angle-left"></i>
        </a>
        <div class="title">{{title}}</div>
    </div>
</template>
<script>
export default {
    name: 'auth-header',
    props: {
        title: {
            type: String,
            default: '注册'
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        }
    }
};
</script>
<style scoped lang="scss">
.header {
    width: 100%;
    padding: 30px 36px;
    display: flex;
    align-items: center;
    font-size: 40px;
    @include border-bottom-1px;
    .go-back {
        color: #7f7f7f;
    }
    .title {
        margin: 0 auto;
        font-size: 30px;
        color: $grey-dark;
    }
}
</style>
