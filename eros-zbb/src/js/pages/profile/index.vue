<template>
    <div class="profile">
        <!-- Fit IphoneX -->
        <status-bar></status-bar>


        <scroller class="scroller">
            <!-- login -->
            <login></login>

            <!-- circle -->
            <circle></circle>

            <!-- activity -->
            <activity></activity>

            <!-- game -->
            <game></game>
        </scroller>
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
.profile {
    height: 1334px;
}

.scroller {
    padding-bottom: 170px;
}
</style>
