<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  currentStep: {
    type: Number,
    default: 1
  },
  selectedAccountType: {
    type: String,
    default: ''
  },
  showVerification: {
    type: Boolean,
    default: false
  }
})

// Define emits
const emit = defineEmits(['proceed-to-create', 'resend-verification'])

// Computed properties for step states
const step1Complete = computed(() => props.currentStep > 1)
const step1Active = computed(() => props.currentStep === 1)

const step2Complete = computed(() => props.currentStep > 2)
const step2Active = computed(() => props.currentStep === 2)

const step3Complete = computed(() => props.currentStep > 3)
const step3Active = computed(() => props.currentStep === 3)

const step4Active = computed(() => props.currentStep === 4)

// Determine the final step text based on account type
const finalStepText = computed(() => {
  if (props.selectedAccountType === 'recruiter' || props.selectedAccountType === 'learner') {
    return 'Setup your payment method'
  } else if (props.selectedAccountType === 'freelancer' || props.selectedAccountType === 'tutor') {
    return 'Setup your payout method'
  }
  return 'Setup your payment method'
})

// You can add methods for handling step navigation
const goToStep = (stepNumber) => {
  console.log(`Navigating to step ${stepNumber}`)
  // Add navigation logic here
}
</script>

<template>
    <div class="h-full pt-6 pr-6 pb-6">
        <div class="bg-[url(@/assets/auth_bg.jpg)] flex flex-col justify-end h-full text-white font-medium rounded-2xl p-6 bg-cover bg-bottom relative">
          <!-- Verification Notification with animation -->
          <transition name="notification-popup">
            <div v-if="showVerification" class="absolute top-6 left-6 right-6">
              <div class="w-2/5 p-4 bg-white text-black rounded-2xl shadow-lg border border-(--color-primary)">
                <div class="flex flex-col gap-1">
                  <span class="font-semibold text-base">Check your email</span>
                  <span class="text-xs">We've sent the verification link to your email address</span>

                  <div class="flex gap-2 mt-2">
                    <button 
                      @click="emit('resend-verification')"
                      class="flex justify-center items-center gap-2">
                      <img src="@/components/icons/counter_clockwise_arrows.svg" class="size-3">
                      Resend
                    </button>
                    
                    <button 
                      @click="emit('proceed-to-create')"
                      >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </transition>
            <h2 class="text-3xl">Start your journey</h2>
        <div class="text-sm">to the next level</div>

        <!-- Step Cards -->
      <div class="flex gap-6 mt-4">
        <!-- Step 1 -->
        <div :class="[
          'size-[150px] flex flex-col justify-between rounded-2xl p-4 transition-all duration-500 ease-in-out',
          step1Complete
            ? 'bg-white/15 border border-white/5 backdrop-blur-[14px] box-border'
            : step1Active
            ? 'bg-white text-black'
            : 'bg-white/15 border border-white/5 backdrop-blur-[14px] box-border'
        ]">
          <div :class="[
            'size-5 rounded-full flex items-center justify-center font-medium transition-all duration-300',
            step1Complete
              ? 'bg-(--color-primary) text-white'
              : step1Active
              ? 'bg-(--color-primary) text-white'
              : 'bg-white/15 border border-white/5 backdrop-blur-[14px] box-border text-white'
          ]">
            <transition name="check-mark" mode="out-in">
              <span v-if="!step1Complete" key="number">1</span>
              <img v-else key="check" src="@/components/icons/check.svg" class="size-2">
            </transition>
          </div>
          Select your account type
        </div>

        <!-- Step 2 -->
        <div :class="[
          'size-[150px] flex flex-col justify-between rounded-2xl p-4 transition-all duration-500 ease-in-out',
          step3Complete
            ? 'bg-white/15 border border-white/5 backdrop-blur-[14px] box-border'
            : step2Active || step3Active
            ? 'bg-white text-black'
            : 'bg-white/15 border border-white/5 backdrop-blur-[14px] box-border'
        ]">
          <div :class="[
            'size-5 rounded-full flex items-center justify-center font-medium transition-all duration-300',
            step3Complete
              ? 'bg-(--color-primary) text-white'
              : step2Active || step3Active
              ? 'bg-(--color-primary) text-white'
              : 'bg-white/15 border border-white/5 backdrop-blur-[14px] box-border text-white'
          ]">
            <transition name="check-mark" mode="out-in">
              <span v-if="!step3Complete" key="number">2</span>
              <img v-else key="check" src="@/components/icons/check.svg" class="size-2">
            </transition>
          </div>
          Provide some information
        </div>

        <!-- Step 3 -->
        <div :class="[
          'size-[150px] flex flex-col justify-between rounded-2xl p-4 transition-all duration-500 ease-in-out',
          step4Complete
            ? 'bg-white/15 border border-white/5 backdrop-blur-[14px] box-border'
            : step4Active
            ? 'bg-white text-black'
            : step4Active
            ? 'bg-white text-black'
            : 'bg-white/15 border border-white/5 backdrop-blur-[14px] box-border'
        ]">
          <div :class="[
            'size-5 rounded-full flex items-center justify-center font-medium transition-all duration-300',
            step4Complete
              ? 'bg-(--color-primary) text-white'
              : step4Active
              ? 'bg-(--color-primary) text-white'
              : 'bg-white/15 border border-white/5 backdrop-blur-[14px] box-border text-white'
          ]">
            <transition name="check-mark" mode="out-in">
              <span v-if="!step4Complete" key="number">3</span>
              <img v-else key="check" src="@/components/icons/check.svg" class="size-2">
            </transition>
          </div>
          <transition name="step-text" mode="out-in">
            <span :key="finalStepText">{{ finalStepText }}</span>
          </transition>
        </div>
      </div>
        </div>
        
    </div>
</template>

<style scoped>
/* Additional custom styling if needed */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Transition animations */
.check-mark-enter-active,
.check-mark-leave-active {
  transition: all 0.3s ease;
}

.check-mark-enter-from {
  opacity: 0;
  transform: scale(0.8) rotate(-90deg);
}

.check-mark-leave-to {
  opacity: 0;
  transform: scale(1.2) rotate(90deg);
}

.step-text-enter-active,
.step-text-leave-active {
  transition: all 0.4s ease;
}

.step-text-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.step-text-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Notification popup animations */
.notification-popup-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.notification-popup-leave-active {
  transition: all 0.3s ease-in;
}

.notification-popup-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.notification-popup-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}
</style>