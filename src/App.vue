<script>
import TodoList from "./components/TodoList.vue";
export default {
    data() {
        return {
            title: "Todo list"
        };
    },
    components: { TodoList }
}
</script>

<template>
    <main class="container mx-auto my-5">
        <h2 class="text-center font-bold text-green-primary">{{ title }}</h2>
        <div class="my-5 flex flex-col items-center">
            <TodoList/>
        </div>
    </main>
</template>

<style>

</style>