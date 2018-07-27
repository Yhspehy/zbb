<template>
    <div class="about">
        <h1 @click="aa">This is an about page</h1>
        <div data-v-fae5bece class="red">33</div>
        <!-- <embed class="ww" src='http://player.youku.com/player.php/sid/XMzc0MTE4MDY2NA==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash' flashvars="isAutoPlay=true"></embed> -->
        <!-- <div class="aa" @click="aa" :style="{'display': isHide?'none':'block'}"></div> -->

        <!-- <iframe src="http://kbs.sports.qq.com/kbsweb/game.htm?mid=100002:20187255" frameborder="0"></iframe> -->
        <div>{{pp}}</div>
    </div>
</template>

<script>
import cookie from 'js-cookie';
export default {
    name: 'about',
    data() {
        return {
            isHide: false,
            a: 11
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
            return this.$store.getters.pp;
        }
    },
    methods: {
        aa() {
            this.isHide = true;
            this.$store.commit('user/SET_USERNAME', this.a);
            this.a += 11;
            console.log(this.$store.getters.pp);
            console.log(cookie.get('pp'));
            // this.$store.dispatch('league/EditSubLeagueList', {{{sublist:} league_id: 13, league_name: '英超' }});
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
