<template>
    <div>
        <!-- Fit IphoneX -->
        <status-bar></status-bar>

        <!-- login -->
        <login></login>

        <!-- circle -->
        <circle></circle>

        <!-- activity -->
        <activity></activity>

    </div>
</template>

<script>
import statusBar from '../components/statusBar';
import login from './components/login'
import circle from './components/circle'
import activity from './components/activity'

export default {
    components: {
        statusBar,
        login,
        circle,
        activity
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>

</style>
