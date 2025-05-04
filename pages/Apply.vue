<template>
  <main class="min-h-screen bg-no-repeat bg-cover bg-fixed bg-center" style="background-image: url('/images/admission.jpg');">
    <div class="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      
      
      <div class="flex flex-col items-center justify-center rounded-3xl p-8 w-full max-w-5xl mb-12">
        <h1 class="text-6xl font-extrabold text-white mb-6 text-center tracking-tight">
          <span class="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 mb-6 p-3 rounded-2xl">So you want to apply...</span>
        </h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mb-12">
        <div class="p-8 bg-yellow-400 bg-opacity-70 rounded-xl px-3 py-3 hover:scale-105 duration-500 transition">
        <h2 class="text-3xl font-bold text-white mb-6 pb-2">Your Advantages as Our Student</h2>
        <p class="text-white mb-4">
      At Bumblebee Academy, you gain access to a global network of mentors, tailored academic support, and immersive cultural programmes.
      Our students benefit from small class sizes, dedicated tutors, and partnerships with top institutions across the world.
        </p>
        <p class="text-white">
      Whether you aim to study abroad, improve your language proficiency, or deepen your academic focus, our holistic approach ensures you are empowered to succeed.
        </p>
        </div>
        <div class="p-8 bg-yellow-400 bg-opacity-70 rounded-xl px-3 py-3 hover:scale-105 duration-500 transition">
        <h2 class="text-3xl font-bold text-white mb-6 pb-2">Admission Requirements</h2>
        <ul class="text-white space-y-3 list-disc pl-5">
          <li><span class="font-semibold">Academic Records:</span> Strong performance in core subjects, especially English and Mathematics</li>
          <li><span class="font-semibold">Language Proficiency:</span> TOEFL, IELTS, or equivalent for non-native English speakers</li>
          <li><span class="font-semibold">Motivation Letter:</span> A brief essay expressing your goals and interest in international study</li>
          <li><span class="font-semibold">Recommendation:</span> One or more letters from teachers or mentors familiar with your academic progress</li>
          <li><span class="font-semibold">Interview:</span> A short conversation to assess alignment with our values and goals</li>
        </ul>
        </div>
      </div>

      
      <div class="overflow-y-auto flex flex-col items-center rounded-2xl p-8 w-[1200px] max-w-[90vw]">
        <h2 class="text-3xl font-bold text-white mb-6 text-center bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 p-3 rounded-2xl">ENROLL INTO <span class="text-black">The Bumblebee Academy</span></h2>
        <h2 class="text-2xl font-bold text-white mb-6 text-center"><span class="bg-amber-500 rounded-2xl p-3">California's most esteemed institution</span></h2>
        
        <form class="flex flex-col gap-4 w-full max-w-2xl" @submit.prevent="postData">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-white font-medium">Name:</label>
              <input class="border-2 border-gray-400 rounded-lg p-2 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400" 
                     name="name" type="text" placeholder="Student Name" v-model="postname" required />
            </div>
            <div class="flex flex-col gap-2">
              <label for="Course" class="text-white font-medium">Course:</label>
              <input class="border-2 border-gray-400 rounded-lg p-2 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400" 
                     name="Course" type="text" placeholder="Course" v-model="postcourse" required />
            </div>
            <div class="flex flex-col gap-2">
              <label for="Scholarship" class="text-white font-medium">Id:</label>
              <input class="border-2 border-gray-400 rounded-lg p-2 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400" 
                     name="Scholarship" type="number" placeholder="Id" v-model="postid" required />
            </div>
            <div class="flex flex-col gap-2">
              <label for="games" class="text-white font-medium">Age:</label>
              <input class="border-2 border-gray-400 rounded-lg p-2 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400" 
                     name="games" type="number" placeholder="Age" v-model="postage" required />
            </div>
            <div class="flex flex-col gap-2">
              <label for="home" class="text-white font-medium">Rating:</label>
              <input class="border-2 border-gray-400 rounded-lg p-2 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400" 
                     name="home" type="number" placeholder="Rating" v-model="postrating">
            </div>
            <div class="flex flex-col gap-2">
              <label for="bat" class="text-white font-medium">Scholarship:</label>
              <input class="h-5 w-5 text-black border-gray-300 rounded focus:ring-yellow-400" 
                     name="bat" type="checkbox" v-model="postscholarship">
            </div>
          </div>
          <button class="w-full md:w-[200px] bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded-lg mx-auto mt-4 transition duration-300" 
                  type="submit">LEAVE REQUEST</button>
        </form>

        
        <form class="flex flex-col gap-4 w-full max-w-2xl mt-8" @submit.prevent="fetchData">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-white font-medium">Search Students:</label>
            <div class="flex gap-2">
              <input class="border-2 border-gray-400 rounded-lg p-2 flex-grow focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400" 
                     name="name" type="text" placeholder="Search by name" v-model="getname" />
              <button class="w-[100px] bg-yellow-400 hover:scale-105 text-white font-medium rounded-lg transition duration-300" 
                      type="submit">SEARCH</button>
            </div>
          </div>
        </form>
      
        
        <div class="w-full overflow-x-auto mt-8">
          <table class="w-full rounded-lg overflow-hidden bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300">
            <thead class="bg-gradient-to-r bg-black">
              <tr class="bg-gradient-to-r bg-black text-white">
                <th class="px-4 py-3 text-left bg-black">ID</th>
                <th class="px-4 py-3 text-left bg-black">Name</th>
                <th class="px-4 py-3 text-left bg-black">Age</th>
                <th class="px-4 py-3 text-left bg-black">Course</th>
                <th class="px-4 py-3 text-left bg-black">Rating</th>
                <th class="px-4 py-3 text-left bg-black">Scholarship</th>
                <th class="px-4 py-3 text-left bg-black">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in data" :key="student.id" class="border-t transition duration-200">
                <td class="px-4 py-3 text-white">{{ student.id }}</td>
                <td class="px-4 py-3 text-white">{{ student.name }}</td>
                <td class="px-4 py-3 text-white">{{ student.age }}</td>
                <td class="px-4 py-3 text-white">{{ student.course }}</td>
                <td class="px-4 py-3 text-white">{{ student.rating }}</td>
                <td class="px-4 py-3 text-white">{{ student.scholarship }}</td>
                <td class="px-4 py-3">
                  <div class="flex gap-2">
                    <button @click="updateData(student.id)"
                      class="bg-black hover:scale-105 text-white font-medium py-1 px-3 rounded-lg transition duration-200">Edit</button>
                    <button @click="deleteData(student.id)"
                      class="bg-white hover:scale-105 text-black font-medium py-1 px-3 rounded-lg transition duration-200">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      
        
        <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" v-show="modal">
          <form @submit.prevent="putData" class="flex flex-col gap-4 p-6 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-lg w-[500px] max-w-[90vw] border-2 border-white border-opacity-30">
            <h3 class="text-2xl font-bold text-white mb-4">Update student</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-2">
                <label class="text-white font-medium">Name</label>
                <input class="border-2 border-gray-600 rounded-lg p-2 bg-gray-700 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400" 
                       type="text" placeholder="Student Name" v-model="putname" required />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-white font-medium">Course</label>
                <input class="border-2 border-gray-600 rounded-lg p-2 bg-gray-700 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400" 
                       type="text" placeholder="Course" v-model="putcourse" required />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-white font-medium">Scholarship</label>
                <input class="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-yellow-400" 
                       type="checkbox" placeholder="Scholarship" v-model="putscholarship">
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-white font-medium">Age</label>
                <input class="border-2 border-gray-600 rounded-lg p-2 bg-gray-700 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400" 
                       type="number" placeholder="Age" v-model="putage" required />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-white font-medium">Rating</label>
                <input class="border-2 border-gray-600 rounded-lg p-2 bg-gray-700 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400" 
                       type="number" placeholder="Rating" v-model="putrating" required />
              </div>
            </div>
            <div class="flex gap-4 justify-end mt-4">
              <button @click="modal = false" 
                      class="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300" 
                      type="button">CANCEL</button>
              <button class="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300" 
                      type="submit">UPDATE</button>
            </div>
          </form>
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
import { ref } from 'vue';

const getname = ref<string>("")
const data = ref<any[]>([])

const postname = ref<string>("")
const postcourse = ref<string>("")
const postid = ref<number>()
const postage = ref<number>()
const postrating = ref<number>()
const postscholarship = ref<boolean>(false)

const fetchData = async () => {
  const response = await $fetch('/api/students', {
    params: { 
      name: getname.value,
    },
  });
  data.value = response.getus || response;
};

const postData = async () => {
  try {
    if (!postname.value || !postcourse.value || !postid.value || !postage.value || !postrating.value) {
      alert('Please fill in all required fields')
      return
    }

    await $fetch('/api/students', {
      method: "POST",
      body: {
        name: postname.value,
        course: postcourse.value,
        id: postid.value,
        age: postage.value,
        rating: postrating.value,
        scholarship: postscholarship.value,
      }
    })
    await fetchData()
  } catch (error) {
    console.error('Error posting data:', error);
  }
}

const putid = ref<number | null>(null)
const putname = ref<string>("")
const putcourse = ref<string>("")
const putscholarship = ref<boolean>(false)
const putage = ref<number>()
const putrating = ref<number>()
const modal = ref<boolean>(false)

const updateData = (id: number) => {
  const student = data.value.find(p => p.id === id)
  if (!student) return

  putid.value = student.id
  putname.value = student.name
  putcourse.value = student.course
  putscholarship.value = student.scholarship
  putage.value = student.age
  putrating.value = student.rating

  modal.value = true
}

const putData = async () => {
  try {
    if (putid.value === null) return

    await $fetch('/api/students', {
      method: "PUT",
      body: {
        id: putid.value,
        name: putname.value,
        course: putcourse.value,
        scholarship: putscholarship.value,
        age: putage.value,
        rating: putrating.value,
      }
    })

    modal.value = false
    await fetchData()
  } catch (error) {
    console.error('Error updating data:', error);
  }
}

const deleteData = async (id: number) => {
  try {
    if (confirm('Are you sure you want to delete this student?')) {
      await $fetch("/api/students", {
        method: "DELETE",
        body: {
          id: id
        }
      })
      await fetchData()
    }
  } catch (error) {
    console.error('Error deleting data:', error);
  }
}

fetchData()
</script>

<style scoped>
main {
  animation: fadeIn 1.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}


table {
  border-collapse: separate;
  border-spacing: 0;
}

th {
  background-color: rgba(55, 65, 81, 0.9);
}

tr:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}


input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}


button {
  transition: all 0.2s ease-in-out;
}


.fixed {
  backdrop-filter: blur(5px);
}


::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}
</style>