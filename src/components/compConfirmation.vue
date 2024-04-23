<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  isVisible: Boolean
})

const emit = defineEmits(['confirm', 'cancel'])
const confirmDelete = () => {
  emit('confirm')
}
const cancelDelete = () => {
  emit('cancel')
}
</script>

<template>
  <div v-if="isVisible" class="confirmation-dialog">
    <p>Are you sure you want to delete this task?</p>
    <button @click="confirmDelete" class="btn-yes">Yes, delete</button>
    <button @click="cancelDelete" class="btn-no">No, go back</button>
  </div>
</template>

<style scoped>
.confirmation-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(236, 237, 255);
  border: 1px solid #6f6fff76;
  padding: 20px;
  z-index: 1000;
  text-align: center;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}

button {
  margin: 15px;
  justify-content: flex-end;
  width: 85px;
  height: 25px;
  font-size: 12px;
  border-radius: 5px;
  border: none;
  background-color: rgba(32, 95, 242, 0.371);
  color: rgb(20, 20, 20);
  font-family: Arial, Helvetica, sans-serif;
}

.btn-no:hover {
  background-color: rgba(94, 139, 244, 0.371);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}

.btn-yes:hover {
  background-color: rgba(94, 139, 244, 0.371);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}

.confirmation-dialog p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}

@media only screen and (max-width: 418px) {
  .confirmation-dialog p {
    font-size: 12px;
  }
  button {
    margin: 10px;
    justify-content: flex-end;
    width: 75px;
    height: 22px;
    font-size: 10px;
  }
  .confirmation-dialog {
    padding: 10px;
    border-radius: 12px;
  }
}
</style>
