import Vue from 'vue';

const clean = Vue.directive('clean', {
    componentUpdated: function(el) {
        let val = el.previousSibling;
        el.onclick = function() {
            val.value = '';
        };
    }
});

export default { clean };
