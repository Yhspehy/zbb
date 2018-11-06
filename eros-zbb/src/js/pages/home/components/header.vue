<template>
    <scroller class="header-scroller" scroll-direction="horizontal" show-scrollbar="false">
        <div v-for="bar in headerBar" :key="bar.name" class="header-bar" @click="goRoute(bar.route)">
            <div>
                <text :class="['text', bar.route === chosenRoute ? 'chosen' : '']">{{bar.name}}</text>
            </div>
            <div class="line" v-if="bar.route === chosenRoute"></div>
        </div>
    </scroller>
</template>

<script>
// import routes from 'Config/routes';
// var navigator = weex.requireModule('navigator');
// var router = weex.requireModule('bmRouter')
var modal = weex.requireModule('modal')

export default {
    data () {
        return {
            headerBar: [
                {
                    name: '推荐',
                    route: 'home.recommend'
                },
                {
                    name: '集锦',
                    route: 'home.highlights'
                },
                {
                    name: '直播',
                    route: 'home'
                }
            ],
            chosenRoute: 'home.recommend'
        }
    },
    created () {
        this.$storage.get('homeHeader').then(res => {
            if (!res) {
                this.$storage.setSync('homeHeader', 'home.recommend')
                this.chosenRoute = home.recommend
            } else {
                this.chosenRoute = res
            }
        })
    },
    methods: {
        goRoute (route) {
            this.$storage.set('homeHeader', route).then(
                res => {
                    this.$router.open({
                        name: route
                    })
                    // navigator.push({
                    //     url: 'http://192.168.1.7:8889/dist/js' + routes['' + route].url,
                    //     animated: 'false'
                    // });
                },
                error => {
                    modal.alert({
                        message: error.errorMsg
                    })
                }
            )
        }
    },
    eros: {
        // beforeAppear(params, options) {
        //     this.$navigator.setNavigationInfo({
        //         navShow: false
        //     });
        // },
        // beforeBackAppear() {
        //     this.$navigator.setNavigationInfo({
        //         navShow: false
        //     });
        // }
    }
}
</script>

<style scoped>
.header-scroller {
    width: 750px;
    height: 100px;
    padding: 25px;
    font-size: 60px;
    text-align: center;
    font-weight: bold;
    background-color: #ffffff;
    border-bottom-width: 1px;
    border-bottom-color: #808080;
    border-bottom-style: solid;
}

.header-bar {
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.text {
    width: 100px;
    margin-left: 30px;
    font-size: 30px;
    text-align: center;
}

.chosen {
    color: #0099ff;
    font-size: 36px;
    font-weight: bold;
}

.line {
    background-color: #0099ff;
    width: 36px;
    height: 4px;
    margin-top: 6px;
    left: 16px;
}
</style>
