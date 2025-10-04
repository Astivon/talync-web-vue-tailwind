<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AuthSidebar from '@/components/AuthSidebar.vue'

const router = useRouter()
const route = useRoute()

// Get account type from route params
const accountType = ref(route.query.accountType || 'freelancer')

// Form data
const formData = ref({
  jobTitle: '',
  location: '',
  skills: ['UX Researcher', 'UX designer', 'UI Designer'],
  salaryRange: '',
  bio: '',
  githubLink: ''
})

const newSkill = ref('')

// Methods
const addSkill = () => {
  if (newSkill.value.trim() && !formData.value.skills.includes(newSkill.value.trim())) {
    formData.value.skills.push(newSkill.value.trim())
    newSkill.value = ''
  }
}

const removeSkill = (index) => {
  formData.value.skills.splice(index, 1)
}

const handleSkillKeydown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    addSkill()
  } else if (event.key === 'Backspace' && newSkill.value === '' && formData.value.skills.length > 0) {
    event.preventDefault()
    formData.value.skills.pop()
  }
}

const handleSubmit = () => {
  console.log('Create account form submitted:', formData.value)
  console.log('Account type:', accountType.value)
  
  // Navigate to appropriate payment setup route based on account type
  if (accountType.value === 'recruiter' || accountType.value === 'learner') {
    router.push({
      name: 'payment-setup',
      query: { accountType: accountType.value }
    })
  } else if (accountType.value === 'freelancer' || accountType.value === 'tutor') {
    router.push({
      name: 'payout-setup',
      query: { accountType: accountType.value }
    })
  }
}

const goBack = () => {
  router.push('/signup')
}
</script>

<template>
  <div class="flex h-full">
    <div class="flex flex-col pt-6 px-24 w-2/5 justify-center">

      <div class="pb-16 px-[1px] overflow-y-auto no-scrollbar">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Header -->
          <div class="space-y-1">
            <h1 class="text-2xl font-bold">
              Create your Account
            </h1>
            <p class="text-xs">
              Please provide the information below to create an account
            </p>
          </div>

          <!-- Form -->
          <div class="space-y-3">
            <!-- Desired Job Title -->
            <div>
              <label>Desired Job Title</label>
              <input
                v-model="formData.jobTitle"
                type="text"
                placeholder="Job title"
              />
            </div>

            <!-- Location -->
            <div>
              <label>Location</label>
              <input
                v-model="formData.location"
                type="text"
                placeholder="20 maple street, benin city"
              />
            </div>

            <!-- Skills or Key Experiences -->
            <div>
              <label>Skills or Key Experiences</label>
              
              <!-- Tag Input Field -->
              <div 
                @click="$refs.skillInput.focus()"
                class="w-full p-[10px] bg-(--color-surface-background) border border-(--color-border) rounded-[6px] focus-within:ring-1 focus-within:ring-(--color-primary) flex flex-wrap items-center gap-2 cursor-text"
              >
                <!-- Existing Tags -->
                <div
                  v-for="(skill, index) in formData.skills"
                  :key="index"
                  class="inline-flex items-center bg-[#161719] text-white rounded-sm overflow-hidden"
                >
                  <span class="p-1 font-medium">{{ skill }}</span>
                </div>
                
                <!-- Input for new tags -->
                <input
                  ref="skillInput"
                  v-model="newSkill"
                  @keydown="handleSkillKeydown"
                  type="text"
                  placeholder=""
                  class="flex-1 bg-transparent border-0! outline-none! p-0!"
                />
              </div>
            </div>

            <!-- Salary Expectations -->
            <div>
              <label>Salary Expectations</label>
              <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select v-model="formData.salaryRange" class="col-start-1 row-start-1 appearance-none">
                    <option value="">Select a salary range</option>
                    <option value="range_1">₦30,000 - ₦100,000</option>
                    <option value="range_2">₦100,000 - ₦200,000</option>
                    <option value="range_3">₦200,000 - ₦500,000</option>
                    <option value="range_4">₦500,000 - ₦1,000,000</option>
                    <option value="range_5">₦1,000,000+</option>
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

            <!-- Bio -->
            <div>
              <label>Bio</label>
              <textarea
                v-model="formData.bio"
                rows="6"
                placeholder="Tell us about yourself"
              ></textarea>
            </div>

            <!-- Link to GitHub repositories -->
            <div>
              <label>Link to GitHub repositories</label>
              <input
                v-model="formData.githubLink"
                type="url"
                placeholder="https://www.github.com"
              />
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="flex-1">
      <AuthSidebar :current-step="3" :selected-account-type="accountType" />
    </div>
  </div>
</template>