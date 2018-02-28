import Vue from 'vue';

Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.task }}</task>
        </div>
    `,

    data() {
        return {
            tasks: [
                { task: 'Go to the store', complete: true },
                { task: 'Finish screencast', complete: false },
                { task: 'Make donation', complete: false },
                { task: 'Clear inbox', complete: false },
                { task: 'Make dinner', complete: false },
                { task: 'Clean room', complete: true }
            ]
        };
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

window.app = new Vue({
    el: '#les-1',
    data() {
        return {
            newName: '',
            names: ['Joe', 'Mary', 'Jane', 'Jack'],
            isDisabled: true,
            message: 'Hello World',
            tasks: [
                { description: 'Go to the store', completed: true },
                { description: 'Finish screencast', completed: false },
                { description: 'Make donation', completed: false },
                { description: 'Clear inbox', completed: false },
                { description: 'Make dinner', completed: false },
                { description: 'Clean room', completed: true }
            ]
        }
    },
    methods: {
        addName() {
            this.names.push(this.newName);
            this.newName = '';
        }
    },
    computed: {
        incompleteTasks() {
            return this.tasks.filter(task => ! task.completed);
        },
        allNames() {
            let names = '';
            for (let i = 0; i < this.names.length; i++){
                names = names + "," + this.names[i];
            }

            console.log(names);

            return names;
        }
    }
});