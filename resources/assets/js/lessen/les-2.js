import Vue from 'vue';

window.Event = new Vue();

Vue.component('couponcode', {

    props: ['code'],

    template: `

        <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">

    `,

    data() {

        return {

            invalids: ['ALLFREE', 'SOMETHINGELSE']
        }
    },

    methods: {

        updateCode(code) {

            if (this.invalids.includes(code)) {

                alert('This coupon is no longer valid. Sorry');

                this.$refs.input.value = code = '';
            }

            this.$emit('input', code);
        }
    }
});

Vue.component('progress-view', {

    data() {

        return { completionRate: 50 };
    }
});

Vue.component('modal-card', {

    template: `

        <div class="modal is-active">
          <div class="modal-background"></div>

          <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">

                    <slot name="header"></slot>

                </p>
                <button class="delete" aria-label="close" @click="$emit('close')"></button>
            </header>

            <section class="modal-card-body">

                <slot>

                    Default content here.

                </slot>

            </section>

            <footer class="modal-card-foot">

                <slot name="footer">

                    <a class="button is-primary">Okay</a>

                </slot>

            </footer>

          </div>
        </div>

    `
});

Vue.component('coupon', {

    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

    methods: {

        onCouponApplied() {

            Event.$emit('applied');
        }
    }
});

Vue.component('tabs', {

    template: `

        <div>

            <div class="tabs">
              <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">

                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>

                </li>
              </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>

        </div>
    `,

    data() {

        return { tabs: [] }
    },

    created() {

        this.tabs = this.$children;
    },

    methods: {

        selectTab(selectedTab) {

            this.tabs.forEach(tab => {

                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {

    template: `

        <div v-show="isActive"><slot></slot></div>

    `,

    props: {
        name: { required: true },

        selected: { default: false }
    },

    data() {

        return {

            isActive: false
        }
    },

    computed: {

        href() {

            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {

        this.isActive = this.selected;
    }

});

Vue.component('modal', {

    template: `

        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box">
                <p>
                    <slot></slot>
                </p>
            </div>
          </div>

          <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>

    `
});

Vue.component('message', {

    props: ['title', 'body'],

    data() {
        return {
            isVisible: true
        };
    },

    template: `

        <article class="message" v-show="isVisible">
          <div class="message-header">
            {{ title }}

            <button type="button" @click="hideModal">x</button>
          </div>
          <div class="message-body">
            {{ body }}
          </div>
        </article>

    `,

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

window.app = new Vue({
    el: '#les-2',
    data() {
        return {
            message: 'Hello World',
            showModal: false,
            showModalcard: false,
            couponApplied: false,
            coupon: 'ALLFREE'
        }
    },
    computed: {
        incompleteTasks() {
            return this.tasks.filter(task => ! task.completed);
        }
    },
    created() {

        Event.$on('applied', () => alert('Handling it!'));
    }
});