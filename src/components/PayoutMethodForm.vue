<script setup>
import { ref, computed } from 'vue'

// Reactive state
const formData = ref({
  accountNumber: '',
  bank: '',
  accountHolder: ''
})

// Methods
const handleSubmit = () => {
  
}
</script>
<template>
  <form @submit.prevent="" class="space-y-6">
      <div class="flex flex-col gap-1">
        <h2 class="text-2xl font-bold">Payout Setup</h2>
        <div class="text-xs">Please provide your banking information below to receive payments</div>
      </div>

      <div class="space-y-3">
        <!-- Account Number -->
        <div>
          <label for="accountNumber">Account Number</label>
          <input id="accountNumber" type="accountNumber" placeholder="0123456789" />
        </div>

        <!-- Bank -->
        <div>
          <label for="account">Bank</label>
          <div class="grid shrink-0 grid-cols-1 focus-within:relative">
            <select v-model="formData.bank" class="col-start-1 row-start-1 appearance-none">
              <option value="">Select a bank</option>
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
          <input id="accountHolder" type="accountHolder" placeholder="John Doe" />
        </div>



        <!-- Submit Button -->
        <button type="submit" class="w-full mt-6">
          Add
        </button>
      </div>

    </form>
</template>