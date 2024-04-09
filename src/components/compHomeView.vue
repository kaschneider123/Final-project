<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToTaskView = () => {
  router.push('/Tasks')
}
</script>

<template>
  <div class="container">
    <div class="container-list">
      <h1>To-Do List</h1>
      <ul>
        <li><p>Prioritize tasks for focus.</p></li>
        <li><p>Check off completed tasks to stay motivated.</p></li>
        <li><p>Avoid forgetting by jotting everything down.</p></li>
        <li><p>Plan projects in manageable steps.</p></li>
        <li><p>Adjust as needed, staying flexible.</p></li>
      </ul>
    </div>
    <video
      class="video_background"
      src="../assets/videoToDo.mp4"
      alt=""
      autoplay
      loop
      muted
    ></video>
    <a @click="goToTaskView">Begin Tasks</a>
  </div>
</template>

<style scoped>
.container-list p {
  font-size: 18px;
}
.container-list {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: rgb(61, 61, 61);
}

h1 {
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
  color: rgb(0, 0, 129);
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 23px;
}

.video_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: fill;
  opacity: 40%;
  z-index: -1;
}

a {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 38px;
  width: 180px;
  background-color:#0052cc;
  text-align: center;
  color: white;
  font-family: Arial, sans-serif;
  line-height: 34px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  z-index: 1;
  font-weight: bold;
}

a:hover {
  background-color: rgb(42, 42, 176);
}

/* Medias Queries******************************************************************/

@media only screen and (max-width: 1000px) {
  .container-list {
    font-size: 15px;
    margin-top: 100px;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 24px;
  }

  ul {
    font-size: 16px;
  }

  .container-list p {
    font-size: 15px;
  }

  .container a {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 28px;
    width: 150px;
    background-color: blue;
    text-align: center;
    color: white;
    font-family: Arial, sans-serif;
    line-height: 22px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
    z-index: 1;
    font-weight: bold;
    font-size: 13px;
  }

  .video_background {
    height: 70vh;
    object-fit: fill;
  }
}

@media only screen and (max-width: 480px) {
  .container-list {
    font-size: 16px;
  }

  h1 {
    font-size: 20px;
  }

  li p {
    font-size: 12px;
  }
  ul {
    font-size: 14px;
  }

  .container a {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 35px;
    width: 180px;
    background-color: blue;
    text-align: center;
    color: white;
    font-family: Arial, sans-serif;
    line-height: 28px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
    z-index: 1;
    font-size: 13px;
  }

  .video_background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
}
</style>
