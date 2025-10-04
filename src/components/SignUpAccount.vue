<script setup>
import { ref } from 'vue'

// Define emits
const emit = defineEmits(['continue'])

// Reactive state
const selectedAccountType = ref('freelancer')

// Methods
const handleContinue = () => {
  if (selectedAccountType.value) {
    console.log('Selected account type:', selectedAccountType.value)
    // Emit continue event with the selected account type
    emit('continue', selectedAccountType.value)
  }
}
</script>

<template>
    <!-- Header -->
    <div class="max-w-2xl mx-auto mt-6 w-full">
      <h1 class="text-2xl font-bold mb-2 leading-tight">
        Which account type would you like to create?
      </h1>
      <p class="">
        Select an account type that best meets your needs
      </p>
    </div>

    <!-- Account Type Options -->
    <div class="space-y-3 my-6">
        <!-- Freelancer Option -->
        <div @click="selectedAccountType = 'freelancer'" :class="[
          'border rounded-2xl p-3 cursor-pointer transition-all duration-200',
          selectedAccountType === 'freelancer'
            ? 'border-(--color-primary)'
            : 'border-(--color-border) bg-(--color-surface-background) hover:border-gray-300'
        ]">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-start gap-2">
              <div class="min-w-10 min-h-10 p-2 bg-[#0973FF1A] rounded-full flex items-center justify-center">
                <img src="@/components/icons/briefcase_filled.svg">
              </div>

              <div>
                <span class="text-sm font-semibold">Freelancer</span>
                <p class="opacity-50">Sign up as a freelancer and get hired and paid</p>
              </div>
            </div>
            <div :class="[
              'p-[4px] rounded-full border flex items-center justify-center',
              selectedAccountType === 'freelancer'
                ? 'border-(--color-primary) '
                : 'border-(--color-border)'
            ]">
              <div :class="[
                'size-2 rounded-full',
                selectedAccountType === 'freelancer'
                  ? 'bg-(--color-primary) '
                  : 'bg-transparent border-(--color-border)'
              ]"></div>
            </div>
          </div>
        </div>

        <!-- Recruiter Option -->
        <div @click="selectedAccountType = 'recruiter'" :class="[
          'border rounded-2xl p-3 cursor-pointer transition-all duration-200',
          selectedAccountType === 'recruiter'
            ? 'border-(--color-primary)'
            : 'border-(--color-border) bg-(--color-surface-background) hover:border-gray-300'
        ]">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-start gap-2">
              <div class="bg-[#0973FF1A] min-w-10 min-h-10 p-2 flex items-center justify-center p-3 rounded-full">
                <img src="@/components/icons/job_search.svg">
              </div>

              <div>
                <span class="text-sm font-semibold">Recruiter</span>
                <p class="opacity-50">Sign up as a recruiter and hire freelance creatives</p>
              </div>
            </div>
            <div :class="[
              'p-[4px] rounded-full border flex items-center justify-center',
              selectedAccountType === 'recruiter'
                ? 'border-(--color-primary) '
                : 'border-(--color-border)'
            ]">
              <div :class="[
                'size-2 rounded-full',
                selectedAccountType === 'recruiter'
                  ? 'bg-(--color-primary) '
                  : 'bg-transparent border-(--color-border)'
              ]"></div>
            </div>
          </div>
        </div>

        <!-- Tutor Option -->
        <div @click="selectedAccountType = 'tutor'" :class="[
          'border rounded-2xl p-3 cursor-pointer transition-all duration-200',
          selectedAccountType === 'tutor'
            ? 'border-(--color-primary)'
            : 'border-(--color-border) bg-(--color-surface-background) hover:border-gray-300'
        ]">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-start gap-2">
              <div class="bg-[#0973FF1A] min-w-10 min-h-10 p-2 flex items-center justify-center p-3 rounded-full">
                <img src="@/components/icons/tutor_filled.svg">
              </div>

              <div>
                <span class="text-sm font-semibold">Tutor</span>
                <p class="opacity-50">Sign up as a tutor to upload courses on skill-link</p>
              </div>
            </div>
            <div :class="[
              'p-[4px] rounded-full border flex items-center justify-center',
              selectedAccountType === 'tutor'
                ? 'border-(--color-primary) '
                : 'border-(--color-border)'
            ]">
              <div :class="[
                'size-2 rounded-full',
                selectedAccountType === 'tutor'
                  ? 'bg-(--color-primary) '
                  : 'bg-transparent border-(--color-border)'
              ]"></div>
            </div>
          </div>
        </div>

        <!-- Learner Option -->
        <div @click="selectedAccountType = 'learner'" :class="[
          'border rounded-2xl p-3 cursor-pointer transition-all duration-200',
          selectedAccountType === 'learner'
            ? 'border-(--color-primary)'
            : 'border-(--color-border) bg-(--color-surface-background) hover:border-gray-300'
        ]">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-start gap-2">
              <div class="bg-[#0973FF1A] min-w-10 min-h-10 p-2 flex items-center justify-center p-3 rounded-full">
                <img src="@/components/icons/student_filled.svg">
              </div>

              <div>
                <span class="text-sm font-semibold">Learner</span>
                <p class="opacity-50">Sign up as a learner to purchase and watch coursesk</p>
              </div>
            </div>
            <div :class="[
              'p-[4px] rounded-full border flex items-center justify-center',
              selectedAccountType === 'learner'
                ? 'border-(--color-primary) '
                : 'border-(--color-border)'
            ]">
              <div :class="[
                'size-2 rounded-full',
                selectedAccountType === 'learner'
                  ? 'bg-(--color-primary) '
                  : 'bg-transparent border-(--color-border)'
              ]"></div>
            </div>
          </div>
        </div>
      </div>

    <!-- Continue Button -->
    <button @click="handleContinue" :disabled="!selectedAccountType" class="w-full mt-6">Continue</button>
</template>