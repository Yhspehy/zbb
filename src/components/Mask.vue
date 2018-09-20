<template>
    <div class="cMask"></div>
</template>

<script>
export default {
    name: 'c_Mask'
};
</script>

<style scoped lang="scss">
.cMask {
    position: fixed;
    z-index: 101;
    top: -200px;
    left: 0;
    right: 0;
    bottom: -200px;
    background: rgba(0, 0, 0, 0.4);
}
</style>
