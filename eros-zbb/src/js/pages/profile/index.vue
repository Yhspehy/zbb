<template>
    <div class="profile">
        <!-- Fit IphoneX -->
        <status-bar :bg="isAndroid?'#000000':'#ffffff'"></status-bar>

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
import { Utils } from 'weex-ui'

import statusBar from '../components/statusBar'
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
        return {
            isAndroid: false
        }
    },
    created() {
        this.isAndroid = Utils.env.isAndroid()
    }
}
</script>

<style scoped>
.scroller {
    padding-bottom: 50px;
}
</style>
