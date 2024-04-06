<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import CompEditTask from '@/components/compEditTask.vue';

const title = ref('')
const description = ref('')


const tasksStore = useTasksStore()
const { tasks } = storeToRefs(tasksStore)

const _addTask = async () => {
  await tasksStore.createNewTask(title.value)
  title.value = ''
}
</script>

<template>
  <h1>Tasks view</h1>
  <div class="container-principal">
    <div class="container-card">
      <h4>Add a new task</h4>
      <label for="title">Title:</label>
      <input v-model="title" type="text" placeholder="Title" id="title" />

      <label for="description">Description:</label>
      <input
        v-model="description"
        type="text"
        placeholder="Description"
        id="description"
        style="width: 200px; height: 50px"
      />
      <button @click="_addTask" class="btn-add">Add</button>
    </div>

    <div class="container-list">
      <ul class="list-task">
        <p>List of tasks</p>
        <span> You have {{ tasks.length }} tasks:</span>

        <li v-for="(task, index) in tasks" :key="task.id" :class="{ 'color-par': index % 2 === 0 }">
          <CompEditTask :task="task"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  border-radius: 8px;
}
input {
  color: rgb(83, 83, 83);
}
.container-card input {
  border-radius: 5px;
  border: solid 1px;
  box-shadow:
    0px 4px 6px rgba(0, 0, 0, 0.1),
    0px 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-add {
  margin-top: 20px;
  background-color: rgba(95, 95, 255, 0.523);
  border: none;
  height: 25px;
  border-radius: 10px;
  box-shadow:
    0px 4px 6px rgba(0, 0, 0, 0.1),
    0px 1px 3px rgba(0, 0, 0, 0.08);
}
.btn-add:hover {
  background-color: #0077ff;
  color: white;
}

.card {
  display: flex;
  flex-direction: column;
  max-width: 200px;
}

.list-task {
  list-style-type: none;
}

.list-task input[type='text'] {
  border: none;
}
.container-card {
  display: flex;
  flex-direction: column;
}

.container-principal {
  display: flex;
  flex-direction: row;
}

.list-task .color-par {
  background-color: #8995fc2e;
}

.list-task input {
  background-color: transparent;
}

.container-card {
  text-align: left;
  vertical-align: top;
}

/* li input {
    display: flex;
    flex-direction: row;
} */
</style>
