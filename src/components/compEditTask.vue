<script setup>
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore()

const props = defineProps({
  task: Object
})

const _isEditing = ref(false)
const editTask = ref({ ...props.task })

const _deleteTask = async () => {
  await tasksStore.deleteTask(editTask.value.id)
}

const _handleEdit = () => {
  _isEditing.value = true
}

const _editTask = async () => {
  try {
    await tasksStore.updateTask(editTask.value)
    console.log('Tarea actualizada !!')
    _isEditing.value = false
  } catch (error) {
    console.error('Error al actualizar la tarea....', error)
  }
}
</script>
<template>
  <div class="container-general">
    <div class="btn">
      {{ editTask.title }}
      {{ editTask.description }}
      {{ editTask.is_complete ? 'Completed' : 'Incomplete' }}
      <button @click="_deleteTask" class="btn-delete">Delete</button>
      <button @click="_handleEdit" class="btn-edit">Edit</button>
    </div>
    <div class="container-input" v-show="_isEditing">
      <input type="text" v-model="editTask.title" />
      <input type="text" v-model="editTask.description" />
      <input type="checkbox" v-model="editTask.is_complete" />
      <button @click="_editTask" class="btn-save">Save</button>
    </div>
  </div>
</template>

<style scoped>
.btn {
  display: flex;
  padding-left: 10px;
  padding-top: 5px;
}

.container-input input {
  background-color: transparent;
  border: none;
  max-height: 100px;
  resize: none;
  max-width: 500px;
  max-height: 50px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
}
.container-input {
  padding-left: 10px;
  padding-top: 5px;
}

.btn-save {
  justify-content: flex-end;
  width: 35px;
  height: 15px;
  font-size: 11px;
  border-radius: 5px;
  border: none;
  background-color: rgba(32, 95, 242, 0.371);
  color: rgb(20, 20, 20);
}

.btn-delete {
  width: 40px;
  height: 15px;
  font-size: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(32, 95, 242, 0.371);
  color: rgb(33, 33, 33);
}

.btn-edit {
  width: 35px;
  height: 15px;
  font-size: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(32, 95, 242, 0.371);
  color: rgb(33, 33, 33);
  justify-content: right;
}

.btn-delete:hover {
  background-color: #fa4e4ed5;
  color: white;
}

.btn-edit:hover {
  background-color: #fff457;
  color: black;
}

.btn-save:hover {
  background-color: #29ea26;
  color: black;
}
</style>
