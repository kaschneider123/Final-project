<script setup>
import { ref, defineProps } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'
import compConfirmation from '@/components/compConfirmation.vue'

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

const handleUpdateState = async () => {
  try {
    await _editTask()
  } catch (error) {
    console.error('Error al actualizar la tarea....', error)
  }
}

const isDialogVisible = ref(false)
</script>

<template>
  <div class="container-general">
    <div class="btn">
      <input @change="handleUpdateState" type="checkbox" v-model="editTask.is_complete" />
      {{ editTask.title }}
      <div class="div-btns">
        <button @click="isDialogVisible = true" class="btn-delete">Delete</button>
        <button @click="_handleEdit" class="btn-edit">Edit</button>
      </div>
    </div>

    <compConfirmation
      :isVisible="isDialogVisible"
      @confirm="_deleteTask"
      @cancel="() => (isDialogVisible = false)"
    />
  </div>

  <div class="container-input" v-show="_isEditing">
    <input type="text" v-model="editTask.title" />
    <input type="text" v-model="editTask.description" />
    <div class="check-btn-save">
      <button @click="_editTask" class="btn-save">Save</button>
    </div>
  </div>
</template>

<style scoped>
.check-btn-save {
  display: flex;
  gap: 15px;
}

.btn-save {
  margin-bottom: 10px;
  cursor: pointer;
}

.div-btns {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.btn {
  margin-top: 10px;
  padding: 8px;
}
.container-input {
  background-color: #f8f9ff80;
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  gap: 10px;
}
.container-general {
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  max-width: 350px;
  width: 100%;
}
.container-input input {
  background-color: white;
  border: none;
  resize: none;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}
.container-input {
  padding-left: 10px;
  padding-top: 5px;
}

.btn-save {
  justify-content: flex-end;
  width: 52px;
  height: 22px;
  font-size: 12px;
  border-radius: 5px;
  border: none;
  background-color: rgba(32, 95, 242, 0.371);
  color: rgb(20, 20, 20);
  cursor: pointer;
}

.btn-delete {
  width: 52px;
  height: 22px;
  font-size: 12px;
  border-radius: 5px;
  border: none;
  background-color: rgba(32, 95, 242, 0.371);
  color: rgb(33, 33, 33);
  cursor: pointer;
}

.btn-edit {
  width: 52px;
  height: 22px;
  font-size: 12px;
  border-radius: 5px;
  border: none;
  background-color: rgba(32, 95, 242, 0.371);
  color: rgb(33, 33, 33);
  justify-content: right;
  cursor: pointer;
}

.btn-delete:hover {
  background-color: rgba(94, 139, 244, 0.371);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}

.btn-edit:hover {
  background-color: rgba(94, 139, 244, 0.371);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}

.btn-save:hover {
  background-color: rgba(94, 139, 244, 0.371);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}
</style>
