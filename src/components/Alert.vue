<template>
    <transition name="slide-fade">
      <div v-show="show" class="alert">
        <header>
          {{user}}：
        </header>
        <section>
          {{content}}
        </section>
        <footer>
          <button @click="close">确定</button>
        </footer>
      </div>
    </transition>
</template>

<script>
/**
 *
 * 功能自行添加
 *
 */

export default {
    data() {
        return {
            user: '111',
            content: '',
            show: false
        };
    },
    created() {},
    methods: {
        close() {
            this.show = false;
        },
        open(content) {
            this.show = true;
            this.content = content;
        }
    }
};
</script>

<style scoped lang="scss">
.alert {
    position: fixed;
    z-index: 222222;
    left: 200px;
    top: 100px;
    width: 250px;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    font-size: 22px;
    padding: 10px;
}

header {
    text-align: left;
}

section {
    margin: 5px 15px;
    text-align: left;
}

footer {
    text-align: right;
    margin-top: 30px;
    button {
        padding: 4px 10px;
        border: 1px solid black;
        background-color: white;
        cursor: pointer;
        border-image: -webkit-linear-gradient(left, #4ac9a2 25%, #178cf6) 5 5;
    }
}
</style>
