<script setup>
import { ref } from 'vue'

// Leaderboard data
const leaderboard = ref([
  {
    id: 1,
    rank: 1,
    name: 'Darrell Steward',
    jobsCompleted: '10000+ jobs done',
    tier: 'Legendary',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    isCurrentUser: false
  },
  {
    id: 2,
    rank: 2,
    name: 'Arlene McCoy',
    jobsCompleted: '1000+ jobs done',
    tier: 'Elite',
    arrow: 'up',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b68d5b59?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    isCurrentUser: false
  },
  {
    id: 3,
    rank: 3,
    name: 'Jenny Wilson',
    jobsCompleted: '100+ jobs done',
    tier: 'Pro',
    arrow: 'down',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    isCurrentUser: false
  },
  {
    id: 4,
    rank: 786,
    name: 'You',
    jobsCompleted: '50+ jobs done',
    tier: 'Regular',
    arrow: 'up',
    avatar: null,
    isCurrentUser: true
  }
])

// Latest clients data
const latestClients = ref([
  {
    id: 1,
    company: 'Abstergo Ltd.',
    project: 'Digital Marketing',
    status: 'In Progress',
    statusColor: '#D97706',
    statusBg: '#FEF3C7',
    iconBg: '#DC2626'
  },
  {
    id: 2,
    company: 'Big Kahuna Burger Ltd.',
    project: 'Video Editing',
    status: 'Awaiting Payment',
    statusColor: '#D97706',
    statusBg: '#FEF3C7',
    iconBg: '#A855F7'
  },
  {
    id: 3,
    company: 'Biffco Enterprises Ltd.',
    project: 'Web Design',
    status: 'Done',
    statusColor: '#059669',
    statusBg: '#D1FAE5',
    iconBg: '#06B6D4'
  },
  {
    id: 4,
    company: 'Binford Ltd.',
    project: 'Graphics Design',
    status: 'Done',
    statusColor: '#059669',
    statusBg: '#D1FAE5',
    iconBg: '#000000'
  }
])

// Methods
const handleChat = (clientId) => {
  console.log('Chat with client:', clientId)
}
</script>

<template>
  <div class="flex gap-6 mt-6">
    <!-- Leaderboard Section -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1">
      <div class="space-y-6">
        <!-- Header -->
        <h3 class="text-xl px-6 pt-6 font-bold text-black">Leaderboard</h3>

        <!-- Leaderboard List -->
        <div class="space-y-2">
          <div 
            v-for="user in leaderboard" 
            :key="user.id"
            class="flex items-center justify-between py-3 px-8"
            :class="{ 'bg-(--color-surface-background)': user.isCurrentUser }"
          >
            <!-- Left Side - Rank, Avatar, Name -->
            <div class="flex items-center gap-2">

              <div class="relative">

                <!-- Rank Number -->
                <span class="absolute size-6 flex bg-(--color-surface-background) rounded-full justify-center items-center border border-(--color-primary-highlight)
                -mt -ml font-medium text-[10px]">{{ user.rank }}</span>
              
              
              <!-- Avatar -->
              <div class="size-[52px] rounded-full overflow-hidden">
                <img 
                  v-if="user.avatar"
                  :src="user.avatar" 
                  :alt="user.name"
                  class="w-full h-full object-cover"
                />
                <!-- Blue circle avatar for "You" -->
                <div 
                  v-else
                  class="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg rounded-full"
                >
                  {{ user.rank }}
                </div>
              </div>
              </div>
              
              
              <!-- Name and Jobs -->
              <div>
                <div class="font-semibold text-gray-900 text-base">{{ user.name }}</div>
                <div class="text-sm text-gray-500">{{ user.jobsCompleted }}</div>
              </div>
            </div>

            <!-- Right Side - Tier and Arrow -->
            <div class="flex items-center gap-2">
              <span class="text-blue-600 text-base font-medium">
                {{ user.tier }}
              </span>
              
              <!-- Tier Arrow -->
              <svg 
                v-if="user.arrow"
                class="w-4 h-4"
                :class="{
                  'text-green-500': user.arrow === 'up',
                  'text-red-500': user.arrow === 'down'
                }"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  v-if="user.arrow === 'up'"
                  d="M7 14l5-5 5 5z"
                />
                <path 
                  v-else
                  d="M7 10l5 5 5-5z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Latest Clients Section -->
    <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex-1">
      <div class="space-y-6">
        <!-- Header -->
        <h3 class="text-xl font-bold text-black">Latest Clients</h3>

        <!-- Clients List -->
        <div class="space-y-5">
          <div 
            v-for="client in latestClients" 
            :key="client.id"
            class="flex items-center justify-between"
          >
            <!-- Left Side - Icon and Company Info -->
            <div class="flex items-center gap-4">
              <!-- Company Icon -->
              <div 
                class="w-12 h-12 rounded-xl flex items-center justify-center"
                :style="{ backgroundColor: client.iconBg }"
              >
                <!-- Peace Sign Icon for Abstergo -->
                <svg 
                  v-if="client.id === 1"
                  class="w-6 h-6 text-white" 
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2v20"/>
                  <path d="M12 12l-7 7"/>
                  <path d="M12 12l7 7"/>
                </svg>
                
                <!-- Curved/Fan Icon for Big Kahuna -->
                <svg 
                  v-else-if="client.id === 2"
                  class="w-6 h-6 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c3 1.5 3 4 0 6 3 0 4.5 3 0 6 3-1.5 3-4 0-6 0 3-3 4.5-6 0-1.5 3-4 3-6 0 1.5-3 4-3 6 0 0-3 3-4.5 0-6-3 1.5-3 4 0 6z"/>
                </svg>
                
                <!-- Lock Icon for Biffco -->
                <svg 
                  v-else-if="client.id === 3"
                  class="w-6 h-6 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/>
                </svg>
                
                <!-- Square Icon for Binford -->
                <div 
                  v-else-if="client.id === 4"
                  class="w-6 h-6 bg-white rounded-sm"
                ></div>
              </div>
              
              <!-- Company and Project Details -->
              <div>
                <div class="font-semibold text-gray-900 text-base">{{ client.company }}</div>
                <div class="text-sm text-gray-500">{{ client.project }}</div>
              </div>
            </div>

            <!-- Right Side - Status and Chat Button -->
            <div class="flex items-center gap-3">
              <!-- Status Badge -->
              <span 
                class="px-3 py-1 rounded-full text-xs font-medium"
                :style="{ 
                  color: client.statusColor,
                  backgroundColor: client.statusBg
                }"
              >
                {{ client.status }}
              </span>
              
              <!-- Chat Button -->
              <button 
                @click="handleChat(client.id)"
                class="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
              >
                Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom button styling */
button {
  background: transparent !important;
  color: #2563EB !important;
  border: 1px solid #2563EB !important;
  padding: 0.5rem 1.5rem !important;
  border-radius: 0.5rem !important;
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  transition: all 0.2s !important;
}

button:hover {
  background-color: #EFF6FF !important;
  color: #2563EB !important;
}
</style>