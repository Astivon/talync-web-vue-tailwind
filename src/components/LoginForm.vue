<script setup>
import { ref, computed } from 'vue'

// Reactive state
const showPassword = ref(false)
const formData = ref({
  accountType: '',
  email: '',
  password: ''
})

// Methods
const handleLogin = () => {
  console.log('Login attempted with:', formData.value)
  // Add your login logic here
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
  <form @submit.prevent="" class="space-y-6 mt-6">
      <div class="flex flex-col gap-1">
        <h2 class="text-2xl font-bold">Log In</h2>
        <div class="text-xs">Please provide the information below to log in</div>
      </div>

      <div class="space-y-3">
        <!-- Account Type -->
        <div>
          <label for="account" class="block">Account Type</label>
          <div class="grid shrink-0 grid-cols-1 focus-within:relative">
            <select v-model="formData.accountType" class="col-start-1 row-start-1 appearance-none">
              <option value="">Select an account type</option>
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>
            <svg
              class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fill-rule="evenodd"
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </div>

        <!-- Email Address -->
        <div>
          <label for="email" class="block">Email Address</label>
          <input id="email" type="email" placeholder="johndoe@gmail.com" autocomplete="email" />
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



        <!-- Submit Button -->
        <button type="submit" class="w-full mt-6">
          Submit
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
        class="flex flex-1 border border-gray-300 py-2 rounded-md justify-center items-center cursor-pointer hover:bg-gray-50">
        <img src="@/components/icons/facebook_logo.svg" alt="Facebook logo" class="w-5 h-5">
      </div>
      <div
        class="flex flex-1 border border-gray-300 py-2 rounded-md justify-center items-center cursor-pointer hover:bg-gray-50">
        <img src="@/components/icons/google_logo.svg" alt="Google logo" class="w-5 h-5">
      </div>
    </div>
</template>