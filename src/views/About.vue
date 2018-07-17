<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<script>
export default {
    name: 'about',
    created() {
        const loginForm = {
            username: '11',
            password: 22
        };
        this.$store.dispatch('user/LoginByUsername', loginForm).then(res => {
            console.log(res);

            console.log(this.$store.getters.username);
        });
    }
};
</script>
