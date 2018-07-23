<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div data-v-fae5bece class="red">222</div>
        <iframe height=208 width=510 src='http://player.youku.com/embed/XMzcyMTE3MDkwNA' frameborder=0 allowfullscreen></iframe>
        <!-- <embed src='http://player.youku.com/player.php/sid/XMzU5NjExMjAzNg==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed> -->
        <embed src='http://player.youku.com/player.php/sid/XMzU5NjExMjAzNg==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>
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
