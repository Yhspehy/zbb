<template>
    <div class="mf-loading-container">
        <img src="./loading.gif">
    </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = 'loading';

export default {
    name: COMPONENT_NAME
};
</script>
<style lang="scss" scoped>
.mf-loading-container {
    @include flex-center;
    img {
        width: 24px;
        height: 24px;
        display: inline-block;
    }
}
</style>
