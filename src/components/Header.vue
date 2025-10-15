<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Reactive state
const showProfileDropdown = ref(false)

// Methods
const handleSearch = () => {
  console.log('Search clicked')
  // Add your search logic here
}

const handleNotifications = () => {
  console.log('Notifications clicked')
  // Add your notifications logic here
}

const toggleProfileDropdown = () => {
  showProfileDropdown.value = !showProfileDropdown.value
}

const handleProfileAction = (action) => {
  console.log('Profile action:', action)
  showProfileDropdown.value = false
  // Add your profile action logic here
}

const currentPage = (routePath) => {
  return route.path === routePath
}
</script>

<template>
  <header class="flex items-center justify-between ">
    <!-- Left Section - Welcome Text -->
    <div v-if="currentPage('/')" class="flex flex-col">
      <span class="text-xs font-medium">Welcome back</span>
      <span class="text-lg font-bold">Design Genius</span>
      
    </div>
    <div v-else class="hidden lg:flex items-center border rounded-[8px] border(--color-border)
         px-[12px] w-72">
         <img src="@/components/icons/search_lined.svg" alt="Search" class="size-[20px]">
          <input v-model="searchQuery" @keyup.enter="" type="text" placeholder="Search"
            class="bg-transparent! border-none! outline-none! flex-grow text-sm" />
          
        </div>

    <!-- Right Section - Icons and Profile -->
    <div class="flex items-center gap-2">
      <!-- Search Icon -->
      <div 
        @click="handleSearch"
        class="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <img src="@/components/icons/search_lined.svg" class="w-4">
    </div>

      <!-- Notification Bell -->
      <div 
        @click="handleNotifications"
        class="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
      >
        <img src="@/components/icons/bell_lined.svg" class="w-4">
    </div>

      <!-- Profile Section -->
      <div class="relative">
        <div 
          @click="toggleProfileDropdown"
          class="flex items-center gap-1 hover:bg-gray-100 rounded-full p-1 transition-colors"
        >
          <!-- Profile Picture -->
          <div class="size-8 rounded-full overflow-hidden bg-gray-300">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Profile" 
              class="w-full h-full object-cover"
            />
          </div>
          
          <!-- Dropdown Arrow -->
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>

        <!-- Dropdown Menu (optional - you can remove if not needed) -->
        <ul 
          v-if="showProfileDropdown"
          class="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
        >
          <li 
            @click="handleProfileAction('profile')"
            class="w-full text-left  px-4 py-2 hover:bg-gray-100 text-sm"
          >
            View Profile
      </li>
          <li 
            @click="handleProfileAction('settings')"
            class="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
          >
            Settings
    </li>
          <hr class="my-2 border-gray-200">
          <li 
            @click="handleProfileAction('logout')"
            class="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
          >
            Sign Out
  </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Ensure dropdown appears above other elements */
.relative {
  position: relative;
}
</style>