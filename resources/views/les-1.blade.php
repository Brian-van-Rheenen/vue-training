<!DOCTYPE html>
<html>
<head>
    <title>Les 1</title>
</head>
<body>

    <div id="les-1" class="container">

        <ul>
            <li v-for="name in names" v-text="name"></li>
        </ul>

        <p>@{{ allNames }}</p>

        <input id="input" type="text" v-model="newName">

        <button @click="addName">Add Name</button>

        <button :disabled="isDisabled">Click Me</button>

        <h2>All Tasks</h2>

        <ul>
            <li v-for="task in tasks" v-text="task.description"></li>
        </ul>

        <h2>Incomplete Tasks</h2>

        <ul>
            <li v-for="task in incompleteTasks" v-text="task.description"></li>
        </ul>

        <task-list></task-list>

    </div>

    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ mix('js/les-1.js') }}"></script>
</body>
</html>