<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['filter'])

const emitFilter = (filter) => {
  emit('filter', filter)
}
</script>

<template>
  <div class="selection-bar">
    <button @click="emitFilter('all')" class="all-tasks">All Tasks</button>
    <button @click="emitFilter('completed')" class="completed-tasks">Completed</button>
    <button @click="emitFilter('pending')" class="pending-tasks">Pending</button>
  </div>
</template>

<style scoped>
.selection-bar {
  display: flex;
  justify-content: space-around;
  gap: 8px;
  padding-top: 20px;
}
.all-tasks {
  justify-content: flex-end;
  width: 55px;
  height: 25px;
  font-size: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(32, 95, 242, 0.371);
  color: rgb(33, 33, 33);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
  font-weight: 500;
}

.completed-tasks {
  justify-content: flex-end;
  width: 65px;
  height: 25px;
  font-size: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(32, 95, 242, 0.371);
  color: rgb(33, 33, 33);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
}
.pending-tasks {
  justify-content: flex-end;
  width: 55px;
  height: 25px;
  font-size: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(32, 95, 242, 0.371);
  color: rgb(33, 33, 33);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
}
.all-tasks:hover {
  background-color: rgba(94, 139, 244, 0.371);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}
.completed-tasks:hover {
  background-color: rgba(94, 139, 244, 0.371);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}
.pending-tasks:hover {
  background-color: rgba(94, 139, 244, 0.371);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}
</style>
