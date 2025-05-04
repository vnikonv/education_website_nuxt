<template>
  <section class="body-font bg-cover bg-fixed bg-center bg-no-repeat" style="background-image: url('/images/university_bg.jpg');">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-md h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="/public/images/students.png">
        </div>
        
        <div class="flex flex-col sm:flex-row mt-10">
          
          <div class="sm:w-1/3 text-center sm:pr-20 sm:py-8 whitespace-nowrap px-5">
            <div class="w-30 h-30 rounded-full inline-flex items-center justify-center bg-white bg-opacity-30 text-white">
              <img class="rounded-3xl" src="/public/images/finn.png">
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-2 text-white text-lg pb-3">Finn Honey</h2>
              <p class="text-base font-medium text-white bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 px-3 py-3 rounded-full mb-3">Founder of the Bumblebee Academy</p>
              <div class=" bg-black bg-opacity-90 rounded-xl mr-3 py-3 pr-2 pl-2 transform transition duration-500 hover:scale-125">
              <blockquote class="italic text-white">
                "At Bumblebee Academy, we do<br>not simply teach. We lift wings across<br>continents. True education knows<br>no borders, only bridges."
              </blockquote>
              </div>
              <br>
            </div>
            <div v-if="showText" class="w-full max-w-6xl mb-16">
            <h2 class="text-4xl font-bold text-white bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 mt-6 text-center rounded-full px-3 py-3">Faculties</h2>
            <div class="flex flex-col items-center gap-6 p-8 max-w-3xl mx-auto">
              <div class="flex flex-col flex-wrap justify-center gap-4">
                <button
                  v-for="item in engStore.eng"
                  :key="item.id"
                  @click="selected = item.name"
                  :class="[
                    'w-24 h-24 flex items-center justify-center text-center p-2 transition-all hexagon',
                    selected === item.name 
                      ? 'bg-yellow-400 text-white font-bold shadow-lg scale-110' 
                      : 'bg-white bg-opacity-30 text-white border-white border-opacity-30 hover:bg-opacity-50'
                  ]"
                >
                  {{ item.name }}
                </button>
              </div>

        </div>
      </div>
          </div>

          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <h1 class="text-4xl font-extrabold bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 bg-opacity-90 mb-4 tracking-tight rounded-2xl px-10 py-3">
              <span class="text-white">Scholarship in the USA</span>
            </h1>
            <p class="leading-relaxed text-lg mb-4 text-white bg-yellow-400 bg-opacity-70 rounded-xl px-3 py-3">
              Looking for international education opportunities?<br><span class="font-medium">We are here to help!</span><br>
              Founded in 2012, Bumblebee Academy began as a mission to connect driven students with world-class academic opportunities abroad.
              Through strategic partnerships, scholarships, and mentoring, we help you lift off towards your academic dreams.
            </p>
            <div class="pt-3 space-y-3">
              <NuxtLink to="/Apply" class="text-white text-2xl font-bold bg-black inline-flex items-center cursor-pointer rounded-full hover:bg-amber-400 px-6 py-6 transition">
              Apply!
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                   stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
            <br>
            <bottom @click="showText = !showText" class="text-white text-2xl w-full font-bold bg-black justify-center inline-flex items-center cursor-pointer rounded-full mx-0 hover:bg-amber-400 px-0 py-6 transition">
              About Us
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12l7 7 7-7"></path>
              </svg>
            </bottom>
            <div v-if="showText" class="text-white bg-yellow-400 bg-opacity-70 p-6 rounded-xl space-y-4">
              <p class="text-lg">
                From our earliest partnerships with U.S. universities to our first scholarship cohort, our mission has remained
                constant: to provide outstanding academic support and unlock doors to world-class education for every determined
                learner. Today, Bumblebee Academy continues to champion international access, shaping bright minds and bolder
                futures.
              </p>
              <p class="text-lg">
                In the years following its founding, Bumblebee Academy flourished into a vibrant nexus of intercultural dialogue
                and academic excellence. With each passing term, it welcomed learners from all corners of the globe, weaving a
                rich tapestry of languages, traditions, and perspectives. Through tailored mentorship programmes, overseas
                immersion experiences, and strategic alliances with leading institutions, the Academy has consistently empowered
                its pupils to navigate global challenges with intellect and empathy. Its legacy is not merely in diplomas
                granted, but in the lifelong connections and enduring curiosity it inspires.
              </p>
            </div>
            </div>

            <div
                v-if="filteredSport && showText"
                class="mt-4 ml-4 flex flex-col sm:flex-row gap-6 items-center bg-amber-500 bg-opacity-90 backdrop-blur-md p-6 rounded-full shadow-lg border border-white border-opacity-30 max-w-xl text-center sm:text-left"
              >
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
    </div>
  </section>
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

const showText = ref(false)

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