<script setup>
import { ref } from 'vue'

// Navigation items
const navigationItems = ref([
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard_lined', // Using available icon
    active: true
  },
  {
    id: 'work',
    label: 'Work',
    icon: 'briefcase_lined', // Using available icon
    active: false
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'project_lined', // Using available icon
    active: false
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: 'message_lined', // Using available icon
    active: false,
    badge: 5
  },
  {
    id: 'community',
    label: 'Community',
    icon: 'community_lined', // Using available icon
    active: false
  }
])

// Bottom navigation items
const bottomItems = ref([
  {
    id: 'support',
    label: 'Support',
    icon: 'support', // Will use a fallback if not available
    active: false
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings', // Will use a fallback if not available
    active: false
  }
])

// Methods
const handleNavClick = (itemId) => {
  // Update active state
  navigationItems.value.forEach(item => {
    item.active = item.id === itemId
  })
  
  bottomItems.value.forEach(item => {
    item.active = item.id === itemId
  })
  
  console.log('Navigation clicked:', itemId)
  // Add your navigation logic here
}
</script>

<template>
  <div class="w-[250px] h-full bg-[#191919] flex flex-col rounded-2xl gap-6">
    <!-- Logo Section -->
    <div class="p-6">
      <div class="flex items-center gap-3">
        <!-- Logo Icon -->
        <img src="../assets/logo_text_neutral.svg" alt="Logo with text" class="w-26">
      </div>
    </div>

    <!-- Navigation Section -->
    <nav class="flex-1 px-4">
      <ul class="space-y-1">
        <li v-for="item in navigationItems" :key="item.id">
          <div
            @click="handleNavClick(item.id)"
            :class="[
              'w-full flex items-center gap-1.5 px-3 py-3 rounded-lg text-left transition-colors',
              item.active 
                ? 'bg-[#404040] text-white' 
                : 'text-gray-300 hover:bg-[#404040] hover:text-white'
            ]"
          >
            <!-- Icon -->
            <div class="size-4 flex items-center justify-center">
              <!-- Dashboard Icon -->
              <svg v-if="item.icon === 'dashboard_lined'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke-width="1.5"/>
                <rect x="14" y="3" width="7" height="7" rx="1" stroke-width="1.5"/>
                <rect x="14" y="14" width="7" height="7" rx="1" stroke-width="1.5"/>
                <rect x="3" y="14" width="7" height="7" rx="1" stroke-width="1.5"/>
              </svg>
              
              <!-- Work/Briefcase Icon -->
              <img v-else-if="item.icon === 'briefcase_lined'" src="@/components/icons/briefcase_lined.svg" >
              
              <!-- Projects/Folder Icon -->
               <img v-else-if="item.icon === 'project_lined'" src="@/components/icons/project_lined.svg" >
              
              <!-- Messages Icon -->
               <img v-else-if="item.icon === 'message_lined'" src="@/components/icons/message_lined.svg" >
              
              <!-- Community Icon -->
               <img v-else-if="item.icon === 'community_lined'" src="@/components/icons/community_lined.svg" >
              
              <!-- Fallback Icon -->
              <div v-else class="w-4 h-4 bg-current rounded"></div>
            </div>
            
            <!-- Label -->
            <span class="font-medium text-xs">{{ item.label }}</span>
            
            <!-- Badge -->
            <div 
              v-if="item.badge" 
              class="ml-auto bg-[#007AFF] text-white text-xs font-semibold px-2 py-1 rounded-full min-w-[20px] text-center"
            >
              {{ item.badge }}
            </div>
        </div>
        </li>
      </ul>
    </nav>

    <!-- Bottom Section -->
    <div class="p-4 flex flex-col">
      <hr class="flex flex-1 pb-3 border-[#404040]">
      <ul class="space-y-1">
        <li v-for="item in bottomItems" :key="item.id">
          <div
            @click="handleNavClick(item.id)"
            :class="[
              'w-full flex items-center gap-1.5 px-3 py-3 rounded-lg text-left transition-colors',
              item.active 
                ? 'bg-[#404040] text-white' 
                : 'text-gray-300 hover:bg-[#404040] hover:text-white'
            ]"
          >
            <!-- Icon -->
            <div class="w-5 h-5 flex items-center justify-center">
              <!-- Support Icon -->
              <svg v-if="item.icon === 'support'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              
              <!-- Settings Icon -->
              <svg v-else-if="item.icon === 'settings'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              
              <!-- Fallback Icon -->
              <div v-else class="w-4 h-4 bg-current rounded"></div>
            </div>
            
            <!-- Label -->
            <span class="font-medium text-xs">{{ item.label }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>