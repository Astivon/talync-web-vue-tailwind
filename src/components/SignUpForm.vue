<script setup>
import { ref, computed } from 'vue'

// Define emits
const emit = defineEmits(['continue'])

// Reactive state
const showPassword = ref(false)
const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

// Methods
const handleSubmit = () => {
  console.log('Signup form submitted with:', formData.value)
  // Add validation logic here if needed
  emit('continue')
}

const loginWithFacebook = () => {
  console.log('Facebook login')
  // Add Facebook OAuth logic
}

const loginWithGoogle = () => {
  console.log('Google login')
  // Add Google OAuth logic
}
</script>
<template>
  <form @submit.prevent="handleSubmit" class="space-y-6 mt-6">
      <div class="flex flex-col gap-1">
        <h2 class="text-2xl font-bold">Sign Up</h2>
        <div class="text-xs">Please provide the information below to create a account</div>
      </div>

      <div class="space-y-3">
        <!-- Full Name -->
        <div>
          <label for="name" class="block">Name</label>
          <input id="name" v-model="formData.name" type="text" placeholder="John Doe" autocomplete="name" />
        </div>

        <!-- Email Address -->
        <div>
          <label for="email" class="block">Email Address</label>
          <input id="email" v-model="formData.email" type="email" placeholder="johndoe@gmail.com" autocomplete="email" />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block">Password</label>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" v-model="formData.password" placeholder="**********" />
            <div @click="showPassword = !showPassword" class="absolute w-5 h-5 top-4 right-2.5">
              <img v-if="showPassword" class="size-4" src="@/components/icons/eye_closed.svg">
              <img v-else class="size-4" src="@/components/icons/eye.svg">

            </div>

          </div>

        </div>

        <!-- Confirm Password -->
        <div>
          <label for="confirmPassword" class="block">Confirm Password</label>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" v-model="formData.confirmPassword" placeholder="**********" />
            <div @click="showPassword = !showPassword" class="absolute w-5 h-5 top-4 right-2.5">
              <img v-if="showPassword" class="size-4" src="@/components/icons/eye_closed.svg">
              <img v-else class="size-4" src="@/components/icons/eye.svg">

            </div>

          </div>

        </div>



        <!-- Submit Button -->
        <button type="submit" class="w-full mt-6">
          Continue
        </button>
      </div>

    </form>

    <div class="flex items-center gap-4 mt-4">
      <hr class="flex-1 border-gray-300">
      <span class="text-xs text-gray-500">or</span>
      <hr class="flex-1 border-gray-300">
    </div>

    <div class="flex mt-4 gap-4 w-full">
      <div
        @click="loginWithFacebook"
        class="flex flex-1 border border-gray-300 py-2 rounded-md justify-center items-center cursor-pointer hover:bg-gray-50">
        <img src="@/components/icons/facebook_logo.svg" alt="Facebook logo" class="w-5 h-5">
      </div>
      <div
        @click="loginWithGoogle"
        class="flex flex-1 border border-gray-300 py-2 rounded-md justify-center items-center cursor-pointer hover:bg-gray-50">
        <img src="@/components/icons/google_logo.svg" alt="Google logo" class="w-5 h-5">
      </div>
    </div>
</template>