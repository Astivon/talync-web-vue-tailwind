<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AuthSidebar from '@/components/AuthSidebar.vue'

const router = useRouter()
const route = useRoute()

// Get account type from route params
const accountType = ref(route.query.accountType || 'freelancer')

// Reactive state
const formData = ref({
  accountNumber: '',
  bank: '',
  accountHolder: ''
})

// Methods
const handleSubmit = () => {
  console.log('Payout method submitted:', formData.value)
  console.log('Account type:', accountType.value)
  // Add your payout setup logic here
  // Could navigate to dashboard or success page
  alert('Payout method setup completed!')
}

const goBack = () => {
  router.push({
    name: 'create-account',
    query: { accountType: accountType.value }
  })
}
</script>

<template>
  <div class="flex h-full">
    <div class="flex flex-col pt-6 px-24 w-2/5 justify-center">

      <div class="pb-16 px-[1px] overflow-y-auto no-scrollbar">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="flex flex-col gap-1">
            <h2 class="text-2xl font-bold">Payout Setup</h2>
            <div class="text-xs">Please provide your banking information below to receive payments</div>
          </div>

          <div class="space-y-3">
            <!-- Account Number -->
            <div>
              <label for="accountNumber">Account Number</label>
              <input 
                id="accountNumber" 
                v-model="formData.accountNumber"
                type="text" 
                placeholder="0123456789" 
              />
            </div>

            <!-- Bank -->
            <div>
              <label for="bank">Bank</label>
              <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                <select v-model="formData.bank" class="col-start-1 row-start-1 appearance-none">
                  <option value="">Select a bank</option>
                  <option value="first-bank">First Bank</option>
                  <option value="gtbank">GTBank</option>
                  <option value="access-bank">Access Bank</option>
                  <option value="zenith-bank">Zenith Bank</option>
                  <option value="uba">UBA</option>
                  <option value="fidelity-bank">Fidelity Bank</option>
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

            <!-- Account Holder -->
            <div>
              <label for="accountHolder">Account Holder</label>
              <input 
                id="accountHolder" 
                v-model="formData.accountHolder"
                type="text" 
                placeholder="John Doe" 
              />
            </div>

            <!-- Submit Button -->
            <button type="submit" class="w-full">
              Complete Setup
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="flex-1">
      <AuthSidebar :current-step="4" :selected-account-type="accountType" />
    </div>
  </div>
</template>