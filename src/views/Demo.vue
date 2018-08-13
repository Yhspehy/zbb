<template>
    <div class="demo">
            <div class="btn-group d-flex justify-content-around">
                <button @click="toast">toast</button>
                <button @click="alert">alert</button>
                <button @click="confirm">confirm</button>
                <button @click="alertWithHtml">alertWithHtml</button>
                <!-- <router-link :to="{name:'subEdit'}">+</router-link> -->
            </div>
        <v-footer></v-footer>
        <v-picker></v-picker>
    </div>
     
</template>

<script>
import TheFooter from '@/components/TheFooter';
import Picker from '@/components/Picker';
export default {
    name: 'demo',
    components: {
        'v-footer': TheFooter,
        'v-picker': Picker
    },
    data() {
        return {
            test: 1
        };
    },
    methods: {
        toast() {
            this.$toast('message');
        },
        alert() {
            this.$dialog.alert('alert').then(() => {
                // This will be triggered when user clicks on ok
                console.log('ok');
            });
        },
        alertWithHtml() {
            this.$dialog.alert(`<p>当前版本:1.0.0</p></br><p>是否更新至最新版本:2.2.2</p>`, { html: true }).then(() => {
                // This will be triggered when user clicks on ok
                console.log('ok');
            });
        },
        confirm() {
            this.$dialog.confirm('confirm').then(
                () => {
                    // This will be triggered when user clicks on ok
                    console.log('ok');
                },
                () => {
                    // This will be triggered when user clicks on cancel
                    console.log('cancel');
                }
            );
        }
    }
};
</script>

<style scoped lang="scss">
.demo {
    button {
        border: 1px solid #e2e2e2;
        padding: 4px 8px;
    }
}
</style>
