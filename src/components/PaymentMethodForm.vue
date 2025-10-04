<script setup>
import { ref, computed } from 'vue'

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
  
}
</script>
<template>
  <form @submit.prevent="" class="space-y-6">
      <div class="flex flex-col gap-1">
        <h2 class="text-2xl font-bold">Payment Setup</h2>
        <div class="text-xs">Please provide your card information below to fund payments</div>
      </div>

      <div class="space-y-3">
        <!-- Account Number -->
        <div>
          <label for="cardNumber">Card Number</label>
          <input id="cardNumber" type="cardNumber" placeholder="1234 1234 1234 1234" />
        </div>

        
        <div class="flex gap-2">
            <!-- Expiry Date -->
          <div class="flex-1">
          <label for="expiryDate">Expiry Date</label>
          <input id="expiryDate" type="expiryDate" placeholder="01/26" />
        </div>

        <!-- CVV -->
        <div class="flex-1">
          <label for="cvv">CVV</label>
          <input id="cvv" type="cvv" placeholder="" />
        </div>
        </div>

        <!-- Card Holder -->
        <div>
          <label for="cardHolder">Card Holder</label>
          <input id="cardHolder" type="cardHolder" placeholder="John Doe" />
        </div>

        <!-- Amount -->
        <div>
          <label for="amount">Amount</label>
          <input id="amount" type="amount" placeholder="" />
        </div>



        <!-- Submit Button -->
        <button type="submit" class="w-full">
          Add
        </button>
      </div>

    </form>
</template>