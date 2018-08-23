<template>
    <div class="register">
        <v-header title="注册"></v-header>
        <div class="content">
            <component :is="currentStepComponent" @next="next" :mobile="mobile"></component>
        </div>
    </div>
</template>
<script>
import VHeader from './../_components/header';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
export default {
    name: 'register',
    data() {
        return {
            step: 1,
            mobile: ''
        };
    },
    computed: {
        currentStepComponent() {
            switch (this.step) {
                case 1:
                    return 'Step1';
                case 2:
                    return 'Step2';
                case 3:
                    return 'Step3';
            }
        }
    },
    methods: {
        next(val) {
            this.step = val[0];
            this.mobile = val[1];
        }
    },
    components: { VHeader, Step1, Step2, Step3 }
};
</script>
<style lang="scss">
.register {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
        padding: 70px 60px 0;
        width: 100%;
    }
}
</style>
