<template>
  <main class="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed" 
        style="background-image: url('/images/life.jpg');">
    <div class="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 px-4 py-10">
      
      <div class="flex flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-5xl mb-12 border-2 border-white border-opacity-20">
        <h1 class="text-6xl font-extrabold text-white mb-6 text-center tracking-tight">
          <span class="text-amber-500">Student Life</span>
        </h1>
        <p class="text-xl text-white text-center max-w-3xl">
          A vibrant daily rhythm of learning, laughter, and lasting friendships
        </p>
      </div>

      <div class="w-full max-w-4xl mb-16">
        <h2 class="text-4xl font-bold text-white mb-8 text-center">Student Spotlight</h2>
        
        <div class="flex flex-col items-center gap-6 p-8 bg-white bg-opacity-15 backdrop-blur-md rounded-2xl shadow-xl border border-white border-opacity-20">
          <div class="flex flex-wrap justify-center gap-4">
            <button
              v-for="student in students"
              :key="student.name"
              @click="selectedStudent = student.name"
              :class="[
                'px-6 py-3 flex items-center justify-center border text-center transition-all rounded-xl',
                selectedStudent === student.name 
                  ? 'bg-yellow-500 text-white shadow-lg scale-105 border-yellow-600' 
                  : 'bg-white bg-opacity-30 text-white border-white border-opacity-30 hover:bg-opacity-50'
              ]"
            >
              {{ student.name }}
            </button>
          </div>

          <div v-if="selectedVideo" class="w-full">
            <video 
              ref="videoPlayer" 
              controls 
              class="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl border-2 border-white border-opacity-30"
            >
              <source :src="selectedVideo" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mb-12">
        <div class="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white border-opacity-20">
          <h2 class="text-3xl font-bold text-white mb-6 pb-2">Campus Vibrancy</h2>
          <p class="text-white mb-4">
            Life at Bumblebee Academy is rich with opportunity. From morning classes in sunlit studios to late-night study sessions under string lights, the campus buzzes with energy and purpose.
          </p>
          <p class="text-white">
            Students lead clubs, build start-ups, share meals, and explore their passions across a beautiful, inclusive campus designed to foster both independence and collaboration.
          </p>
        </div>
        
        <div class="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white border-opacity-20">
          <h2 class="text-3xl font-bold text-white mb-6 pb-2">Community Traditions</h2>
          <p class="text-white">
            Bumblebee traditions are crafted by students, for students:
          </p>
          <ul class="text-white mt-3 space-y-2 list-disc pl-5">
            <li>Open Mic Nights & Film Clubs</li>
            <li>Annual Festival of Light</li>
            <li>Tea on the Lawn Fridays</li>
            <li>Peer Mentoring & House Competitions</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue'

interface Student {
  name: string,
  video: string
}

const students = reactive<Student[]>([
  { name: 'Sophie Elmore', video: '/videos/sophie.mp4' },
  { name: 'Gregory Sorokin', video: '/videos/greg.mp4' },
  { name: 'Katie Tolstoy', video: '/videos/katie.mp4' }
])

const selectedStudent = ref<string>('Sophie Elmore')
const videoPlayer = ref<HTMLVideoElement | null>(null)

const selectedVideo = computed(() => {
  return students.find(student => student.name === selectedStudent.value)?.video || ''
})

watch(selectedStudent, () => {
  if (videoPlayer.value) {
    videoPlayer.value.load()
    videoPlayer.value.play()
  }
})


</script>

<style scoped>

main {
  animation: fadeIn 1.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>