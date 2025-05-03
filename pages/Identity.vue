<template>
  <main class="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed" 
        style="background-image: url('/images/identity.jpg');">
    <div class="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-40">
      
      <div class="flex flex-col items-center justify-center bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-4xl mx-4 my-10">
        <h1 class="text-6xl font-bold text-amber-500 mb-6">Identity</h1>
        <p class="text-xl text-white text-center">Who we are, what we believe, and how we grow together</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-4 mb-10">
        
        <div class="flex flex-col bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-xl p-6">
          <h2 class="text-2xl font-bold text-white mb-4">Our Values</h2>
          <p class="text-white">
            At Bumblebee Academy, we cultivate integrity, inclusivity, and intellectual curiosity. These values form the bedrock of our identity as an international educational community.
          </p>
        </div>

        <div class="flex flex-col bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-xl p-6">
          <h2 class="text-2xl font-bold text-white mb-4">Cultural Connection</h2>
          <p class="text-white">
            Our identity is shaped by a global outlook. With students and mentors from across the world, we embrace cultural exchange as an essential part of learning and personal growth.
          </p>
        </div>

        <div class="flex flex-col bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-xl p-6">
          <h2 class="text-2xl font-bold text-white mb-4">The Bumblebee Way</h2>
          <p class="text-white">
            We believe in collaborative achievement, small acts of kindness, and the pursuit of excellence without ego. Bumblebees may be small — but together, they soar.
          </p>
        </div>

        <div class="flex flex-col bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-xl p-6">
          <h2 class="text-2xl font-bold text-white mb-4">Student Stories</h2>
          <p class="text-white">
            Every learner brings a unique thread to our fabric. From first-generation scholars to aspiring scientists, Bumblebee students redefine what’s possible with heart and hope.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-2xl mb-10">
        <h2 class="text-3xl font-bold text-white mb-4">Discover Who You Are</h2>
        <p class="text-white text-center mb-4">
          Identity is not fixed — it is formed, nurtured, and expressed. At Bumblebee Academy, we guide students to define themselves with confidence and compassion.
        </p>
        <main class="flex flex-col">
          <h1 class="mx-auto text-white">The Mirror of Your Soul</h1>
          <div class="relative mx-20p">
            <Detection />
          </div>
        </main>
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