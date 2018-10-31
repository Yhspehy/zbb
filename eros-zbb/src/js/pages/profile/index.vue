<template>
    <div>
        <!-- Fit IphoneX -->
        <status-bar bg="#ffffff"></status-bar>

        <!-- login -->
        <login></login>

        <!-- circle -->
        <circle></circle>

        <!-- activity -->
        <activity></activity>

        <!-- game -->
        <game></game>

    </div>
</template>

<script>
import statusBar from '../components/statusBar';
import login from './components/login'
import circle from './components/circle'
import activity from './components/activity'
import game from './components/game'

export default {
    components: {
        statusBar,
        login,
        circle,
        activity,
        game
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
</style>
