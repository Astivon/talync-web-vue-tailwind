<script setup>
import { ref } from 'vue'
import RevenueAndProjects from './RevenueAndProjects.vue'
import LeaderboardAndClients from '@/components/LeaderboardAndClients.vue'

// Props for data input
const props = defineProps({
  walletBalance: {
    type: String,
    default: '₦2,000,000'
  },
  lastMonthRevenue: {
    type: String,
    default: '3,500,000'
  },
  revenueGrowth: {
    type: String,
    default: '+2.5%'
  },
  gigsAccepted: {
    type: String,
    default: '+12'
  },
  chartData: {
    type: Array,
    default: () => [
      { label: 'Jan', value: 65 },  // Direct percentage values
      { label: 'Feb', value: 80 },
      { label: 'Mar', value: 45 },
      { label: 'Apr', value: 90 },
      { label: 'May', value: 75 },
      { label: 'Jun', value: 60 }
    ]
  }
})

// Function to calculate bar height based on data
const getBarHeight = (value) => {
  if (!props.chartData.length) return 20

  const maxValue = Math.max(...props.chartData.map(item => item.value))
  const minPercentage = 0 // Minimum height as percentage
  const maxPercentage = 100 // Maximum height as percentage

  // Calculate proportional percentage
  const percentage = (value / maxValue) * (maxPercentage - minPercentage) + minPercentage
  return Math.round(percentage)
}

// Methods
const handleDeposit = () => {
  console.log('Deposit clicked')
  // Add your deposit logic here
}

const handleWithdraw = () => {
  console.log('Withdraw clicked')
  // Add your withdraw logic here
}
</script>

<template>
  <div class="overflow-y-auto">
    <div class="flex gap-3 mt-3">
    <!-- Wallet Balance Card -->
    <div class="bg-white rounded-2xl p-6 border border-(--color-primary-highlight) shadow-xs flex-1">
      <div class="flex flex-col justify-between h-full">
        <div>
          <h3 class="text-(--color-primary) text-sm font-medium">Wallet Balance</h3>
        <div class="text-2xl font-bold text-black">{{ props.walletBalance }}</div>
        </div>
        

        <!-- Action Buttons -->
        <div class="flex gap-3">
          <button @click="handleDeposit"
            class="bg-black text-white rounded-full! flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <img src="@/components/icons/deposit_lined.svg" class="size-5">
            Deposit
          </button>

          <button @click="handleWithdraw"
            class="bg-black text-white rounded-full! flex items-center gap-2 hover:bg-gray-800 transition-colors">
            <img src="@/components/icons/deposit_lined.svg" class="size-5">
            Withdraw
          </button>
        </div>
      </div>
    </div>

    <!-- Revenue Card -->
    <div class="bg-white rounded-2xl p-6 border border-(--color-primary-highlight) shadow-xs flex-1">
      <div class="flex items-start justify-between mb-4">
        <!-- Naira Icon -->
        <div class="size-10 bg-blue-100 rounded-full flex items-center justify-center">
          <span class="text-(--color-primary) font-bold text-xl">₦</span>
        </div>

        <!-- Growth Percentage -->
        <div class="text-green-500 font-semibold text-lg">{{ props.revenueGrowth }}</div>
      </div>

      <div class="">
        <div class="text-2xl font-bold">{{ props.lastMonthRevenue }}</div>
        <div class="opacity-60 text-xs">Last Month Revenue</div>
      </div>
    </div>

    <!-- Gigs Accepted Card -->
    <div class="bg-white rounded-2xl p-6 border border-(--color-primary-highlight) shadow-xs flex-1">
      <div class="flex justify-between items-end h-full">
        <!-- Left Side - Icon and Text -->
        <div class="flex flex-col justify-between h-full">
          <!-- Folder Icon -->
          <div class="size-10 bg-blue-100 rounded-full flex items-center justify-center">
            <img src="@/components/icons/project_lined_coloured.svg" class="size-4">

          </div>

          <!-- Text Content -->
          <div class="">
            <div class="text-2xl font-bold text-black">{{ props.gigsAccepted }}</div>
            <div class="opacity-60 text-xs">Gigs Accepted</div>
          </div>
        </div>

        <!-- Right Side - Dynamic Bar Chart -->
        <div class="flex items-end h-full gap-2 pr-4">
          <div v-for="(item, index) in props.chartData" :key="index"
            class="bg-[#F4F4F4] h-full rounded-full content-end w-3">
            <div 
            :style="{ height: `${item.value}%` }" 
            :title="`${item.label}: ${item.value}`"
            class="bg-linear-to-b from-(--color-primary) to-[#799AFF] rounded-full"
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RevenueAndProjects />
  <LeaderboardAndClients/>
  </div>
  
</template>

<style scoped>
/* Remove default button styles for black buttons */
button {
  background-color: black !important;
  color: white !important;
  border: none !important;
  font-weight: 500;
}

button:hover {
  background-color: #1f2937 !important;
  color: white !important;
  outline: none !important;
}
</style>