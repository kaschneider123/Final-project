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

// selection bar - FILTER TASK FUNCTION
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
        <h2>Add a new task</h2>
        <label for="title"
          ><input v-model="title" type="text" placeholder="Title" id="title"
        /></label>

        <label class="label-description" for="description">
          <textarea v-model="description" type="text" placeholder="Description" id="description" />
        </label>

        <h4>Filters</h4>
        <SelectionBar @filter="filterTasks" />
        <button @click="_addTask" class="btn-add">Add</button>
      </div>

      <!-- Contenedor list Tasks -->
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

h4 {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif; 
  color: rgb(0, 0, 129); 
  
}
.container-principal {
  width: 750px;
}

.li:last-child {
  padding-bottom: 50px;
}
.container-card h3 {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 20px;
}

.container-card textarea {
  width: 200px;
  min-height: 70px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  padding-top: 10px;
}

/*Fondo blanco card*/
.background-color {
  background-color: white;
  width: 100%;
}
/*Imagen de fondo*/
.hero-image {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 40%;
  background-repeat: repeat;
}

/*Lista de tareas*/
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
  max-width: 500px;
  height: 100%;
  font-size: 12px;
  margin-top: 20px;
}

.list-task input {
  background-color: transparent;
}

/* Estilos para los container  Card*/
.container-principal {
  margin-top: 70px;
  padding: 15px;
  display: flex;
  flex-direction: row;
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
  text-align: left;
  height: 500px;
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
  width: 750px;
}
  .container-principal {   
    margin-top: 100px;
    display: flex;
    flex-direction: column;
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
  .container-card {
    max-width: 400px;
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
}
@media only screen and (max-width: 514px) {
  .background-color {
    background-color: white;
    max-width: 350px;   
  }
  .container-principal {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }

  .container-card {
    flex-direction: column;
    text-align: left;
    height: 100%;
    background-color: #edf0ff80;
    display: flex;
    padding: 10px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
    padding-left: 20px;
    padding-bottom: 10px;
    align-items: center;
    max-width: 320px;
  }

  .container-list {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    overflow-x: hidden;
  }
  .list-task {
    max-width: 300px;
    height: 100%;
    font-size: 12px;
    margin-top: 20px;
  }
  .container-card input {
    display: flex;
    margin-top: 10px;
    margin-bottom: 30px;
    height: 32px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  }
  .container-list p {
    font-size: 16px;
  }
  .container-list span {
    font-size: 16px;
  }
  .list-task .color-par {
    width: 290px;
  }
  .container-general {
    /*  background-color: #8995fc2e; */
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
    width: 250px;
  }
  .list-task .color-par {
    width: 250px;
  }
}
</style>
