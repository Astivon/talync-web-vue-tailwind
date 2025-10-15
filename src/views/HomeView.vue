<script setup>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import DashboardCards from '@/components/DashboardCards.vue'
import { ref } from 'vue'

// Reactive state
const walletBalance = ref('₦2,000,000')
const lastMonthRevenue = ref('3,500,000')
const gigsAccepted = ref('+12')
const revenueGrowth = ref('+2.5%')

// Chart data for the mini bar chart
const chartData = ref([
  { value: 60 },
  { value: 80 },
  { value: 45 },
  { value: 90 },
  { value: 100 },
  { value: 70 },
  { value: 85 }
])

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
  <DashboardCards/>
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