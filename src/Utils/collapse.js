/**
 *
 * 下拉插件
 *
 * 使用demo可查看live的stats.vue
 *
 * active用来代表是否下拉展示
 * tag  表示渲染的外层标签名
 *
 */

export default {
    name: 'c_collapse',

    props: {
        active: Boolean,
        duration: {
            type: Number,
            default: 500
        },
        tag: {
            type: String,
            default: 'div'
        }
    },

    data: () => ({
        scrollHeight: 0,
        isMounted: false
    }),

    watch: {
        active() {
            this.layout();
        }
    },

    render(h) {
        return h(
            this.tag,
            {
                style: this.style
            },
            this.$slots.default
        );
    },

    mounted() {
        const self = this;
        this.$nextTick(() => {
            this.isMounted = true;
            setTimeout(function() {
                self.layout();
            }, 100);
        });
    },

    computed: {
        style() {
            const heightSize = this.active ? this.scrollHeight : 0;

            return {
                overflow: 'hidden',
                'transition-property': 'height',
                height: this.isMounted ? heightSize + 'px' : 'auto',
                'transition-duration': this.duration + 'ms'
            };
        }
    },

    methods: {
        layout() {
            this.scrollHeight = this.$el.scrollHeight;
        }
    }
};
