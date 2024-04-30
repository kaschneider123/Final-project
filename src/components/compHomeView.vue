<script setup>
import { useRouter } from 'vue-router'
import { getFileFromBucket } from '@/api/storageApi'
import { onMounted, ref } from 'vue'

const router = useRouter()
const _videoURL = ref('')

const goToTaskView = () => {
  router.push('/Tasks')
}

onMounted(async () => {
  try {
    _videoURL.value = await getFileFromBucket('assets', 'videoToDo.mp4')
  } catch (err) {
    console.error(err)
  }
})
</script>

<template>
  <div class="container-planify">
    <h1>Organize your day with Planify</h1>
    <!-- <h1>Organize your day with</h1><img class="img-planify" src="../assets/planify2.svg" alt="Planify" /> -->
  </div>
  <div class="container">
    <div class="container-list">
      <ul>
        <li><p>Prioritize tasks for focus.</p></li>
        <li><p>Check off completed tasks to stay motivated.</p></li>
        <li><p>Avoid forgetting by jotting everything down.</p></li>
        <li><p>Plan projects in manageable steps.</p></li>
        <li><p>Adjust as needed, staying flexible.</p></li>
      </ul>
    </div>
    <div class="video-container">
      <video class="video_background" :src="_videoURL" alt="" autoplay loop muted></video>
    </div>
    <a @click="goToTaskView">Begin Tasks</a>
  </div>
</template>

<style scoped>
.container-planify {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
}

.container {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 25px;
  padding-left: 75px;
  padding-right: 75px;
  border-radius: 25px;
  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.5);
  width: 100%;
}
.video-container {
  width: 100%;
}
.container-list {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  color: rgb(61, 61, 61);
  width: 100%;
}
h1 {
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
  color: rgb(0, 0, 129);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 19px;
}
.video_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 40%;
  z-index: -1;
}
a {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 45px;
  width: 250px;
  background-color: #0052cc;
  text-align: center;
  color: white;
  font-family: Arial, sans-serif;
  line-height: 42px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
  z-index: 1;
  /* font-weight: bold; */
  font-size: 16px;
  align-content: center;
}
a:hover {
  background-color: rgb(42, 42, 176);
}

/* Medias Queries*******************************************************/
@media only screen and (max-width: 768px) {
  .container-planify {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  .container-list {
    font-size: 15px;
    align-items: center;
    justify-content: center;
  }
  .container-list p {
    font-size: 16px;
  }

  .container-planify h1 {
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 150px;
    color: rgb(0, 0, 129);
  }
  ul {
    margin-top: 0px;
  }
  a {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 45px;
    width: 180px;
    align-content: center;
  }
  .container {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media only screen and (max-width: 418px) {
  .container-planify {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  .container-planify h1 {
    font-size: 22px;
  }
  .container {
    /* margin-top: 100px; */
    width: 100%;
    height: 100%;
  }
  .container-list {
    font-size: 15px;
    align-items: center;
    justify-content: center;
  }
  .container-list p {
    font-size: 13px;
  }

  a {
    position: absolute;
    top: 75% !important;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40px;
    width: 180px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    align-content: center;
  }
}
</style>
