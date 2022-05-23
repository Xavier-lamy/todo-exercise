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
    <button @click="showNewTodoInput" class="btn">Add new element</button>
    <ul class=" max-w-xs w-full " role="list">
        <form v-if="isAddingNewTodo" @submit.prevent="addTodo">
            <input  type="text" v-model="newTodo" placeholder="Add a new item here" class="border-none focus:outline-none my-3 p-2 w-full">
        </form>
        <li v-for="todo in todos" v-bind:key="todo.id" class="flex items-center justify-between hover:cursor-pointer">
            <span v-bind:class="{ done: todo.done }" v-on:click="toggleDone(todo)">
                {{ todo.content }}
            </span>
            <button v-on:click="removeTodo(todo)" class="m-2 w-6 h-6 align-middle bg-red-800 text-white rounded-full">X</button>
        </li>
    </ul>
</template>

<style>

</style>