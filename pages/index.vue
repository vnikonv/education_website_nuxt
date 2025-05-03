<template>
  <main class="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed" 
        style="background-image: url('/images/university_bg.jpg');">
    <div class="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 px-4 py-10">
      
      <div class="flex flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg rounded-full shadow-2xl p-8 w-full max-w-5xl mb-12 border-2 border-white border-opacity-20">
        <h1 class="text-6xl font-extrabold text-white mb-6 text-center tracking-tight">
          <span class="text-amber-500">Scholarship in the USA</span>
        </h1>
        <p class="text-xl text-white text-center max-w-3xl">
          Looking for internation education opportunities? <span class="text-amber-500">We are here to help!</span>
        </p>
      </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mb-12">
  <div class="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white border-opacity-20">
    <h2 class="text-3xl font-bold text-amber-500 mb-6 pb-2">Our History</h2>
    <p class="text-white mb-4">
      Founded in the spirit of collaboration and curiosity, Bumblebee Academy began as a humble initiative to connect students from diverse backgrounds with opportunities that transcend borders.
      Established in 2012 by a coalition of educators and international mentors, the Academy quickly grew into a recognised hub for global learning.
    </p>
    <p class="text-white mb-4">
      From our earliest partnerships with U.S. universities to our first scholarship cohort, our mission has remained constant: to provide outstanding academic support and unlock doors to world-class education for every determined learner.
      Today, Bumblebee Academy continues to champion international access, shaping bright minds and bolder futures.
    </p>
    <p class="text-white">
      In the years following its founding, Bumblebee Academy flourished into a vibrant nexus of intercultural dialogue and academic excellence. With each passing term, it welcomed learners from all corners of the globe, weaving a rich tapestry of languages, traditions, and perspectives. Through tailored mentorship programmes, overseas immersion experiences, and strategic alliances with leading institutions, the Academy has consistently empowered its pupils to navigate global challenges with intellect and empathy.
      Its legacy is not merely in diplomas granted, but in the lifelong connections and enduring curiosity it inspires.
    </p>
  </div>

  <div class="flex-row grid gap-6">
    <div class="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl shadow-xl p-4 border border-white border-opacity-20">
      <img src="/public/images/students.png" class="w-full h-auto rounded-2xl object-cover" />
    </div>
    <div class="flex items-center gap-6 bg-white bg-opacity-15 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-white border-opacity-20">
      <img src="/public/images/finn.png" class="w-30 h-40 rounded-2xl object-cover" />
      <div  class="p-6 text-left">
      <blockquote class="text-xl italic text-white">
      "At Bumblebee Academy, we do not simply teach — we lift wings across continents. True education knows no borders, only bridges."
      </blockquote>
      <p class="text-white mt-4 font-semibold">— Finn Honey, the founder of the Bumblebee Academy</p>
      </div>
    </div>
  </div>
  </div>

      <div class="w-full max-w-6xl mb-16">
        <h2 class="text-4xl font-bold text-amber-500 mb-8 text-center">Faculties</h2>
        
        <div class="flex flex-col items-center gap-6 p-8 bg-white bg-opacity-15 backdrop-blur-md rounded-full shadow-xl border border-white border-opacity-20 max-w-3xl mx-auto">
          <div class="flex flex-wrap justify-center gap-4">
            <button
              v-for="item in engStore.eng"
              :key="item.id"
              @click="selected = item.name"
              :class="[
                'w-24 h-24 flex items-center justify-center border text-center p-2 transition-all rounded-full',
                selected === item.name 
                  ? 'bg-amber-500 text-white shadow-lg scale-110 border-amber-600' 
                  : 'bg-white bg-opacity-30 text-white border-white border-opacity-30 hover:bg-opacity-50'
              ]"
            >
              {{ item.name }}
            </button>
          </div>

          <div v-if="filteredSport" class="flex flex-col sm:flex-row gap-6 items-center bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-full shadow-lg border border-white border-opacity-30 max-w-xl text-center sm:text-left">
            <img :src="filteredSport.img" class="w-36 h-24 object-cover rounded-3xl border border-white border-opacity-20" />
            <div class="flex flex-col gap-1 text-white">
              <p class="font-bold text-xl">{{ filteredSport.name }}</p>
              <p>Year established: {{ filteredSport.year }}</p>
              <p>Head: {{ filteredSport.director }}</p>
              <p>Temperature at the Building: {{ getTemp(filteredSport.name) }} &deg;C</p>
              <p>Wind speed: {{ getWind(filteredSport.name) }} m/sec</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateAuthenticatedTo: '/Protected'
  },
})
const {data} = await useFetch('/api/me')

import { useEngStore } from '~/stores/eng'
import { ref, computed, onMounted } from 'vue'

const engStore = useEngStore()
const selected = ref('')

const filteredSport = computed(() => {
  return engStore.eng.find(sport => sport.name === selected.value)
})

const getTemp = (name: string): string => {
  if (name === 'American Football') return engStore.temp_S1
  if (name === 'Basketball') return engStore.temp_S2
  if (name === 'Baseball') return engStore.temp_S3
  if (name === 'Ice Hockey') return engStore.temp_GOD
  if (name === 'Soccer') return engStore.temp_INT
  return ''
}

const getWind = (name: string): string => {
  if (name === 'American Football') return engStore.wind_S1
  if (name === 'Basketball') return engStore.wind_S2
  if (name === 'Baseball') return engStore.wind_S3
  if (name === 'Ice Hockey') return engStore.wind_GOD
  if (name === 'Soccer') return engStore.wind_INT
  return ''
}

onMounted(() => {
  engStore.weather_S1()
  engStore.weather_S2()
  engStore.weather_S3()
  engStore.weather_GOD()
  engStore.weather_INT()

  setInterval(() => {
    engStore.weather_S1()
    engStore.weather_S2()
    engStore.weather_S3()
    engStore.weather_GOD()
    engStore.weather_INT()
  }, 5000)
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