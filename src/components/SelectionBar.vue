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
  font-family: Arial, Helvetica, sans-serif;
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
  font-family: Arial, Helvetica, sans-serif;
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
  font-family: Arial, Helvetica, sans-serif;
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

@media only screen and (max-width: 510px) {
  .selection-bar {
    display: flex;
    justify-content: space-around;
    gap: 7px;
    padding-top: 20px;
  }
  .all-tasks {
    width: 50px;
    height: 25px;
    font-size: 9px;
  }

  .completed-tasks {
    width: 60px;
    height: 25px;
    font-size: 9px;
  }
  .pending-tasks {
    width: 50px;
    height: 25px;
    font-size: 9px;
  }
}
</style>
