<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AuthSidebar from '@/components/AuthSidebar.vue';
import LoginForm from '@/components/LoginForm.vue'
import SignUpAccount from '@/components/SignUpAccount.vue'
import SignUpForm from '@/components/SignUpForm.vue';

const route = useRoute()
const router = useRouter()

// Local state for signup flow
const signupStep = ref(1) // 1 = account selection, 2 = form
const selectedAccountType = ref('') // Store the selected account type
const showVerificationNotification = ref(false) // Control verification popup

// Computed property to determine active tab from current route
const activeTab = computed(() => {
  return route.name === 'login' ? 'login' : 'signup'
})

// Methods
const setActiveTab = (tab) => {
  if (tab === 'login') {
    router.push('/login')
  } else {
    router.push('/signup')
    signupStep.value = 1 // Reset to first step when clicking signup tab
    selectedAccountType.value = '' // Reset account type
    showVerificationNotification.value = false // Reset verification notification
  }
}

const handleAccountTypeSelected = (accountType) => {
  selectedAccountType.value = accountType
  signupStep.value = 2
}

const goToCreateAccountForm = () => {
  // Show verification notification instead of navigating immediately
  showVerificationNotification.value = true
  
  // Optional: Auto-navigate after a delay (uncomment if desired)
  // setTimeout(() => {
  //   router.push({
  //     name: 'create-account',
  //     query: { accountType: selectedAccountType.value }
  //   })
  // }, 3000)
}

const proceedToCreateAccount = () => {
  // Called when user clicks continue from verification notification
  showVerificationNotification.value = false
  router.push({
    name: 'create-account',
    query: { accountType: selectedAccountType.value }
  })
}

const resendVerification = () => {
  // Handle resend verification logic
  console.log('Resending verification email...')
  // Add your resend logic here
}

const goToPaymentSetup = () => {
  // Navigate to appropriate payment setup route based on account type
  if (selectedAccountType.value === 'recruiter' || selectedAccountType.value === 'learner') {
    router.push({
      name: 'payment-setup',
      query: { accountType: selectedAccountType.value }
    })
  } else if (selectedAccountType.value === 'freelancer' || selectedAccountType.value === 'tutor') {
    router.push({
      name: 'payout-setup',
      query: { accountType: selectedAccountType.value }
    })
  }
}

// Determine which payment form to show based on account type
const showPaymentForm = computed(() => {
  return selectedAccountType.value === 'recruiter' || selectedAccountType.value === 'learner'
})

const showPayoutForm = computed(() => {
  return selectedAccountType.value === 'freelancer' || selectedAccountType.value === 'tutor'
})
</script>

<template>
    <div class="flex h-full">
        <div class=" flex flex-col pt-6 px-24 w-2/5 justify-center">
            <div class="space-y-4">
                <img src="@/assets/logo_text_coloured.svg" alt="Coloured logo with text" class="w-[120px] justify-self-center">
                <div class="flex gap-2 w-full">
                    <div
                        @click="setActiveTab('signup')"
                        :class="[
                            'flex-1 py-2 rounded-md text-center font-medium cursor-pointer transition-colors',
                            activeTab === 'signup'
                                ? 'bg-[#013DF5] text-white hover:bg-blue-600' 
                                : 'border border-[#013DF5] text-[#013DF5] hover:bg-blue-50'
                        ]">
                        Sign Up
                    </div>
                    <div
                        @click="setActiveTab('login')"
                        :class="[
                            'flex-1 py-2 rounded-md text-center font-medium cursor-pointer transition-colors',
                            activeTab === 'login' 
                                ? 'bg-[#013DF5] text-white hover:bg-blue-600' 
                                : 'border border-[#013DF5] text-[#013DF5] hover:bg-blue-50'
                        ]">
                        Log In
                    </div>
                </div>
            </div>

            <div class=" pb-16 px-[1px] overflow-y-auto no-scrollbar">
                <!-- Step 1: Account Type Selection -->
                <SignUpAccount 
                    v-if="activeTab === 'signup' && signupStep === 1" 
                    @continue="handleAccountTypeSelected" 
                />
                
                <!-- Step 2: Basic Signup Form -->
                <SignUpForm 
                    v-else-if="activeTab === 'signup' && signupStep === 2" 
                    @continue="goToCreateAccountForm"
                />
                
                <!-- Login Form -->
                <LoginForm v-else-if="activeTab === 'login'" />
            </div>
        </div>

        <div class="flex-1">
            <AuthSidebar 
                :current-step="signupStep" 
                :selected-account-type="selectedAccountType" 
                :show-verification="showVerificationNotification"
                @proceed-to-create="proceedToCreateAccount"
                @resend-verification="resendVerification"
            />
        </div>
    </div>
</template>