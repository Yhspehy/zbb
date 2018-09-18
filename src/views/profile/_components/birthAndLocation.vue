<template>
    <div class="birthAndLocation">
        <div class="container">
            <header>
                <div class="close">取消</div>
                <div class="save">保存</div>
            </header>
        </div>
    </div>
</template>

<script>
export default {
    name: 'profile_birthAndLocation',
    data() {
        return {};
    }
};
</script>

<style scoped lang="scss">
.birthAndLocation {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    .container {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        header {
            font-size: 28px;
            background: #eff0f3;
            padding: 20px 36px;
            @include flex-center-between;
            .close {
                color: $grey-light;
            }
            .save {
                color: $blue;
            }
        }
    }
}
</style>
