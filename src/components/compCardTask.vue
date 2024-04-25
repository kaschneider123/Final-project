<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { storeToRefs } from 'pinia'
import { ref, computed, onMounted } from 'vue'
import CompEditTask from '@/components/compEditTask.vue'
import SelectionBar from '@/components/SelectionBar.vue'

const title = ref('')
const description = ref('')

const tasksStore = useTasksStore()
const { tasks } = storeToRefs(tasksStore)

const _addTask = async () => {
  await tasksStore.createNewTask(title.value, description.value)
  title.value = ''
  description.value = ''
}

const filter = ref('all')

const filteredTasks = computed(() => {
  switch (filter.value) {
    case 'completed':
      return tasks.value.filter((task) => task.is_complete)
    case 'pending':
      return tasks.value.filter((task) => !task.is_complete)
    case 'all':
    default:
      return tasks.value
  }
})

const numTasks = computed(() => filteredTasks.value.length)

function filterTasks(selectedFilter) {
  filter.value = selectedFilter
}

onMounted(() => {
  tasksStore.fetchTasks()
})
</script>

<template>
  <img class="hero-image" src="../assets/2.jpg" alt="" />
  <section class="background-color">
    <div class="container-principal">
      <!-- Contenedor Add -->
      <div class="container-card">
        <!--  <h1>Welcome {{  }}</h1> -->
        <h2>Add a new task</h2>
        <span>Minimum 3 characters</span>
        <label for="title"
          ><input v-model="title" type="text" placeholder="Title" id="title"
        /></label>
        <label class="label-description" for="description">
          <textarea v-model="description" type="text" placeholder="Description" id="description" />
        </label>
        <SelectionBar @filter="filterTasks" />
        <button @click="_addTask" class="btn-add">Add</button>
      </div>
      <div class="container-list">
        <p>List of tasks</p>
        <span> You have {{ numTasks }} tasks:</span>
        <div class="input-list">
          <ul class="list-task">
            <li
              v-for="(task, index) in filteredTasks"
              :key="task.id"
              :class="{ 'color-par': index % 2 === 0 }"
            >
              <CompEditTask :task="task" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-card span {
  font-size: 12px;
}
.list-task {
  padding-left: 20px;
}
h4 {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(0, 0, 129);
}
.input-list:last-child {
  padding-bottom: 50px;
}
.container-card h3 {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 20px;
}
.container-card textarea {
  width: 200px;
  /* min-height: 70px; */
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  padding-top: 10px;
}
.background-color {
  background-color: white;
  width: 100%;
}
.hero-image {
  position: absolute;
  width: 100%;
  height: 1000px;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 40%;
  background-repeat: repeat;
}
.input-list {
  width: 450px;
  height: 100%;
}
.container-card {
  display: flex;
  flex-direction: column;
}
.check-box {
  display: flex;
  flex-direction: row;
  background-color: transparent;
}
.list-task {
  list-style-type: none;
}
.list-task input[type='text'] {
  border: none;
}
.color-par {
  overflow: visible;
  box-sizing: border-box;
  height: auto;
}
.input-list {
  display: flex;
  flex-direction: column;
  max-height: 450px;
  overflow-x: hidden;
  margin-left: 0px;
  margin-right: 2rem;
  width: 100%;
  height: 100%;
  max-width: 450px;
}
.list-task .color-par {
  background-color: #abb3ff2e;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  width: 350px;
}
/* Estilos para los párrafos y spans dentro de .list-task */
.container-list p {
  font-size: 18px;
  color: rgb(0, 0, 129);
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 20px;
}
.container-list span {
  padding-left: 20px;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}
.list-task {
  max-width: 400px;
  height: 100%;
  font-size: 12px;
}
.list-task input {
  background-color: transparent;
}
/* Estilos para los container  Card*/
.container-principal {
  margin-top: 100px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  width: 700px;
}
.container-card ::placeholder {
  padding-left: 10px;
  font-size: 12px;
  align-content: top;
}
.container-card input {
  width: 200px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 30px;
  height: 32px;
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
  border-radius: 10px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: bold;
  margin-top: 160px;
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

/* Medias query ************************** */
@media only screen and (max-width: 768px) {
  .container-principal {
    max-width: 700px;
    width: 100%;
    padding: 25px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
  }
  .input-list {
    margin-right: 0.5rem;
  }
  .container-card {
    max-width: 550px;
    width: 100%;
    flex-direction: column;
    text-align: left;
    height: 100%;
    background-color: #edf0ff80;
    display: flex;
    padding: 10px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
    padding-left: 30px;
    padding-bottom: 20px;
    align-items: center;
  }
  .container-card input {
    width: 200px;
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 32px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  }
  .btn-add {
    background-color: #0052cc;
    border: none;
    height: 35px;
    width: 200px;
    border-radius: 5px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
    color: white;
    font-weight: bold;
    margin-top: 10px;
  }
  .container-card h3 {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .container-card textarea {
    width: 200px;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  }
  .input-list {
    display: flex;
    flex-direction: column;
    max-height: 450px;
    overflow-x: hidden;
  }
  .container-list p {
    padding-top: 30px;
    padding-left: 30px;
  }
  .container-list span {
    padding-left: 30px;
  }
  .input-list:last-child {
    padding-bottom: 50px;
  }
}
@media only screen and (max-width: 510px) {
  .list-task {
    padding: 8px;
  }
  .container-principal {
    max-width: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .container-card {
    max-width: 350px;
    width: 100%;
    flex-direction: column;
    height: 100%;
    display: flex;
    padding-left: 0px;
  }
  .container-card input {
    max-width: 180px;
    display: flex;
    height: 32px;
    /* width: 100%; */
  }
  .btn-add {
    background-color: #0052cc;
    border: none;
    height: 35px;
    max-width: 180px;
    width: 100%;
  }
  .container-card h3 {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .container-card textarea {
    max-width: 180px;
    font-size: 12px;
    /* width: 100%; */
  }
  .input-list {
    display: flex;
    flex-direction: column;
    max-height: 450px;
    overflow-x: hidden;
  }
  .container-list p {
    padding-top: 10px;
    padding-left: 5px;
  }
  .container-list span {
    padding-left: 5px;
  }
  .list-task {
    max-width: 280px;
    width: 100%;
    height: 100%;
    font-size: 12px;
    align-items: center;
    justify-content: center;
  }
  .input-list {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    margin-left: 0px;
    margin-right: 1rem;
  }
  .list-task .color-par {
    width: 100%;
  }
  .input-list:last-child {
    padding-bottom: 50px;
  }
}
</style>
