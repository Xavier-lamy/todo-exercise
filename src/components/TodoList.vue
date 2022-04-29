<script>
let id = 0

export default {
    data() {
        return {
            newTodo: '',
            todos: [
                {id: id++, content: 'Do something', done: false},
            ],
            isAddingNewTodo: false,
        }
    },
    methods: {
        showNewTodoInput() {
            this.isAddingNewTodo = true
        },
        addTodo() {
            this.todos.push({ id: id++, content: this.newTodo, done: false })
            this.newTodo = ''
            this.isAddingNewTodo = false
        },
        removeTodo(todo) {
            this.todos = this.todos.filter( t => t !== todo)
        },
        toggleDone(todo) {
            todo.done = !todo.done
        }
    }
}
</script>

<template>
    <button @click="showNewTodoInput">Add new element</button>
    <ul>
        <form v-if="isAddingNewTodo" @submit.prevent="addTodo">
            <input  type="text" v-model="newTodo" placeholder="Add a new item here">
        </form>
        <li v-for="todo in todos" v-bind:key="todo.id">
            <span v-bind:class="{ done: todo.done }" v-on:click="toggleDone(todo)">
                {{ todo.content }}
            </span>
            <button v-on:click="removeTodo(todo)">X</button>
        </li>
    </ul>
</template>

<style>
ul {
    list-style: none;
    padding-left: 0;
}
.done {
    text-decoration: line-through;
    text-decoration-color: #3c9336;
}
li:hover {
    cursor: pointer;
}
</style>