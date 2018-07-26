<template>
    <div class="about">
<<<<<<< Updated upstream
        <h1 @click="aa">This is an about page</h1>
        <div data-v-fae5bece class="red">33</div>
        <!-- <embed class="ww" src='http://player.youku.com/player.php/sid/XMzc0MTE4MDY2NA==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash' flashvars="isAutoPlay=true"></embed> -->
        <!-- <div class="aa" @click="aa" :style="{'display': isHide?'none':'block'}"></div> -->

        <!-- <iframe src="http://kbs.sports.qq.com/kbsweb/game.htm?mid=100002:20187255" frameborder="0"></iframe> -->
=======
        <h1>This is an about page</h1>
        <div data-v-fae5bece class="red">222</div>
>>>>>>> Stashed changes
    </div>
</template>

<script>
import cookie from 'js-cookie';
export default {
    name: 'about',
    data() {
        return {
            isHide: false
        };
    },
    created() {
        const loginForm = {
            username: '11',
            password: 22
        };
        this.$store.dispatch('user/LoginByUsername', loginForm).then(res => {
            console.log(res);
        });
        cookie.set('pp', '222');
    },
    computed: {
        pp() {
            return cookie.get('pp');
        }
    },
    methods: {
        aa() {
            this.isHide = true;
            console.log(this.$store.getters.pp);
            console.log(cookie.get('pp'));
        }
    }
};
</script>

<style scoped>
.hide {
    display: none;
}

.aa {
    width: 480px;
    height: 400px;
    position: absolute;
    z-index: 13;
    background: blue;
    left: 0;
}

.ww {
    position: absolute;
    z-index: 11;
    display: inline-block;
    vertical-align: top;
    left: 0;
}
</style>
