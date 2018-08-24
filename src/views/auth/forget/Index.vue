<template>
    <div class="forget">
        <v-header :title=title></v-header>
        <div class="content">
            <component :is="currentStepComponent" @next="next" :mobile="mobile"></component>
        </div>
    </div>
</template>
<script>
import VHeader from './../_components/header';
import Step1 from './Step1';
import Step2 from './Step2';
export default {
    name: 'forget',
    data() {
        return {
            step: 1,
            mobile: '',
            title: '忘记密码'
        };
    },
    computed: {
        currentStepComponent() {
            switch (this.step) {
                case 1:
                    return 'Step1';
                case 2:
                    return 'Step2';
            }
        }
    },
    methods: {
        next(val) {
            this.step = val[0];
            this.mobile = val[1];
            console.log(this.step);
            if (this.step === 1) {
                this.title = '忘记密码';
            } else {
                this.title = '重置密码';
            }
        }
    },
    components: { VHeader, Step1, Step2 }
};
</script>
<style lang="scss">
.forget {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
        padding: 0 60px 0;
        width: 100%;
    }
}
</style>
