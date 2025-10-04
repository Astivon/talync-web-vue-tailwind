<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AuthSidebar from '@/components/AuthSidebar.vue'

const router = useRouter()
const route = useRoute()

// Get account type from route params
const accountType = ref(route.query.accountType || 'recruiter')

// Reactive state
const formData = ref({
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  cardHolder: '',
  amount: '',
})

// Methods
const handleSubmit = () => {
  console.log('Payment method submitted:', formData.value)
  console.log('Account type:', accountType.value)
  // Add your payment setup logic here
  // Could navigate to dashboard or success page
  alert('Payment method setup completed!')
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
            <h2 class="text-2xl font-bold">Payment Setup</h2>
            <div class="text-xs">Please provide your card information below to fund payments</div>
          </div>

          <div class="space-y-3">
            <!-- Card Number -->
            <div>
              <label for="cardNumber">Card Number</label>
              <input 
                id="cardNumber" 
                v-model="formData.cardNumber"
                type="text" 
                placeholder="1234 1234 1234 1234" 
              />
            </div>

            <div class="flex gap-2">
              <!-- Expiry Date -->
              <div class="flex-1">
                <label for="expiryDate">Expiry Date</label>
                <input 
                  id="expiryDate" 
                  v-model="formData.expiryDate"
                  type="text" 
                  placeholder="01/26" 
                />
              </div>

              <!-- CVV -->
              <div class="flex-1">
                <label for="cvv">CVV</label>
                <input 
                  id="cvv" 
                  v-model="formData.cvv"
                  type="text" 
                  placeholder="123" 
                />
              </div>
            </div>

            <!-- Card Holder -->
            <div>
              <label for="cardHolder">Card Holder</label>
              <input 
                id="cardHolder" 
                v-model="formData.cardHolder"
                type="text" 
                placeholder="John Doe" 
              />
            </div>

            <!-- Amount -->
            <div>
              <label for="amount">Amount</label>
              <input 
                id="amount" 
                v-model="formData.amount"
                type="number" 
                placeholder="0.00" 
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