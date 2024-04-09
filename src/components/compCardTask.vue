<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import CompEditTask from '@/components/compEditTask.vue'

const title = ref('')
const description = ref('')

const tasksStore = useTasksStore()
const { tasks } = storeToRefs(tasksStore)

const _addTask = async () => {
  await tasksStore.createNewTask(title.value, description.value)
  title.value = ''
  description.value = ''
}
</script>

<template>
  <img class="hero-image" src="../assets/2.jpg" alt="" />
  <section class="background-color">
    <div class="container-principal">
      <div class="container-card">
        <h2>Add a new task</h2>
        <label for="title">Title:</label>
        <input v-model="title" type="text" placeholder="Title" id="title" />

        <label for="description">Description:</label>
        <input
          v-model="description"
          type="text"
          placeholder="Description"
          id="description"
          style="width: 200px; height: 120px"
        />
        <button @click="_addTask" class="btn-add">Add</button>
      </div>

      <div class="container-list">
        <ul class="list-task">
          <p>List of tasks</p>
          <span> You have {{ tasks.length }} tasks:</span>

          <li
            v-for="(task, index) in tasks"
            :key="task.id"
            :class="{ 'color-par': index % 2 === 0 }"
          >
            <CompEditTask :task="task" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.check-box {
  display: flex;
  flex-direction: row;
  background-color: transparent;
}
/* Estilos para los párrafos y spans dentro de .list-task */
.list-task p {
  font-size: 18px;
  color: rgb(0, 0, 129);
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.list-task span {
  font-size: 15px;
  color: rgb(0, 0, 129);
  font-family: Arial, Helvetica, sans-serif;
}
.list-task li {
  width: 500px;
  height: 60px;
  padding-left: 20px;
  font-size: 12px;
}
.list-task {
  list-style-type: none;
}
.list-task input[type='text'] {
  border: none;
}
.container-list {
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  max-height: 520px;
}
.list-task .color-par {
  background-color: #8995fc2e;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  padding-bottom: 15px;
}
.list-task input {
  background-color: transparent;
}
.color-par {
  overflow: visible;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  min-height: 50px;
}
.background-color {
  background-color: white;
}
.hero-image {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 80%;
  background-repeat: repeat;
}

/* Estilos para los container  */
.container-principal {
  margin-top: 70px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  width: 100%;
}
.container-card ::placeholder {
  padding-left: 10px;
  font-size: 12px;
  align-content: top;
}
.container-card input {
  display: flex;
  margin-top: 10px;
  margin-bottom: 30px;
  height: 25px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
}
.container-card h2 {
  font-size: 18px;
  color: rgb(0, 0, 129);
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.container-card {
  text-align: left;
  height: 450px;
  background-color: #edf0ff80;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
}

/* Estilos para los botones  */
.btn-add {
  background-color: #0052cc;
  border: none;
  height: 35px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: bold;
}
.btn-add:hover {
  background-color: rgb(42, 42, 176);
  color: white;
}

/* Estilos para la barra  */
::-webkit-scrollbar {
  background: #a2a2a23f;
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background: rgba(32, 95, 242, 0.371);
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(32, 95, 242, 0.646);
}
</style>
