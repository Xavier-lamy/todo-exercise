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
  <h2>{{ title }}</h2>
  <TodoList/>
</template>

<style>

</style>