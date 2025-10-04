<script setup>
import { ref } from 'vue'

// Revenue data
const revenueAmount = ref('₦650,000')
const selectedPeriod = ref('This Year')
const showDropdown = ref(false)

const periods = ['This Year', 'This Month', 'This Quarter', 'Last Year']

// Monthly revenue data - heights as percentages
const monthlyData = ref([
  { month: 'Jan', value: 70 },
  { month: 'Feb', value: 45 },
  { month: 'Mar', value: 50 },
  { month: 'Apr', value: 100 },
  { month: 'May', value: 85 },
  { month: 'Jun', value: 20 },
  { month: 'Jul', value: 0 },
  { month: 'Aug', value: 0 },
  { month: 'Sep', value: 0 },
  { month: 'Oct', value: 0 },
  { month: 'Nov', value: 0 },
  { month: 'Dec', value: 0 }
])

// Active projects data
const activeProjects = ref([
  {
    id: 1,
    company: 'Abstergo Ltd.',
    project: 'Logo Design',
    progress: 70,
    progressColor: '#10B981', // green
    iconBg: '#FED7AA', // orange background
    iconColor: '#F97316' // orange icon
  },
  {
    id: 2,
    company: 'Acme Co.',
    project: 'Photography',
    progress: 50,
    progressColor: '#F59E0B', // orange
    iconBg: '#10B981', // green background
    iconColor: '#FFFFFF' // white icon
  },
  {
    id: 3,
    company: 'Barone LLC.',
    project: 'Social Media Management',
    progress: 30,
    progressColor: '#EF4444', // red
    iconBg: '#1F2937', // dark background
    iconColor: '#FFFFFF' // white icon
  }
])

// Methods
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const selectPeriod = (period) => {
  selectedPeriod.value = period
  showDropdown.value = false
}

const viewAllProjects = () => {
  console.log('View all projects clicked')
}
</script>

<template>
  <div class="flex gap-6 mt-6">
    <!-- Revenue Section -->
    <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex-1">
      <div class="space-y-6 grow">
        <!-- Header -->
        <div class="flex items-center justify-between">
          <div>
            <h3 class="opacity-50 text-xs font-medium">Revenue</h3>
            <div class="text-xl font-bold text-black">{{ revenueAmount }}</div>
          </div>
          
          <!-- Period Dropdown -->
          <div class="relative">
            <div 
              @click="toggleDropdown"
              class="flex items-center gap-1 rounded-full p-2 bg-(--color-surface-background) hover:bg-gray-50 cursor-pointer"
            >
              {{ selectedPeriod }}
              <svg class="size-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
            
            <!-- Dropdown Menu -->
            <div 
              v-if="showDropdown"
              class="absolute right-0 top-full px-3 py-2 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
            >
              <button
                v-for="period in periods"
                :key="period"
                @click="selectPeriod(period)"
                class="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                :class="{ 'bg-blue-50 text-blue-600': period === selectedPeriod }"
              >
                {{ period }}
              </button>
            </div>
          </div>
        </div>

        <!-- Bar Chart -->
        <div class="space-y-4">
          <div class="flex items-end justify-between h-32 gap-3">
            <div 
              v-for="data in monthlyData" 
              :key="data.month"
              class="flex flex-col items-center flex-1"
            >
              <!-- Bar Container -->
              <div class="bg-[#F4F4F4] h-24 rounded-full w-5 flex items-end">
                <div 
                  v-if="data.value > 0"
                  :style="{ 
                    height: `${data.value}%`,
                    background: `linear-gradient(to bottom, var(--color-primary), #799AFF)`
                  }" 
                  :title="`${data.month}: ${data.value}%`"
                  class="w-full rounded-full transition-all duration-500"
                ></div>
              </div>
              
              <!-- Month Label -->
              <span class="text-xs text-gray-500 mt-2">{{ data.month }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Active Projects Section -->
    <div class="bg-white rounded-2xl p-6 border border-(--color-border) shadow-sm flex-1">
      <div class="space-y-6">
        <!-- Header -->
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-black">Active Projects</h3>
          <button 
            @click="viewAllProjects"
            class="text-(--color-primary) font-medium hover:text-blue-700"
          >
            View All
          </button>
        </div>

        <!-- Projects List -->
         <div>
            <div 
            v-for="project in activeProjects" 
            :key="project.id"
          >
          <div class="flex items-center justify-between">
            <!-- Left Side - Icon and Text -->
            <div class="flex items-center gap-3">
              <!-- Project Icon -->
              <div 
                class="size-10 rounded-xl flex items-center justify-center"
                :style="{ backgroundColor: project.iconBg }"
              >
                <!-- Settings/Gear Icon for Logo Design -->
                <svg 
                  v-if="project.project === 'Logo Design'"
                  class="w-6 h-6" 
                  :style="{ color: project.iconColor }"
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
                </svg>
                
                <!-- Zero/O Icon for Photography -->
                <span 
                  v-else-if="project.project === 'Photography'"
                  class="text-2xl font-bold"
                  :style="{ color: project.iconColor }"
                >
                  O
                </span>
                
                <!-- X Icon for Social Media Management -->
                <svg 
                  v-else-if="project.project === 'Social Media Management'"
                  class="w-6 h-6" 
                  :style="{ color: project.iconColor }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </div>
              
              <!-- Project Details -->
              <div>
                <div class="text-xs">{{ project.company }}</div>
                <div class="text-sm font-medium">{{ project.project }}</div>
              </div>
            </div>

            <!-- Right Side - Progress Circle -->
            <div class="relative w-12 h-12">
              <!-- Background Circle -->
              <svg class="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="#E5E7EB"
                  stroke-width="4"
                />
                <!-- Progress Circle -->
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  :stroke="project.progressColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  :stroke-dasharray="`${2 * Math.PI * 20}`"
                  :stroke-dashoffset="`${2 * Math.PI * 20 * (1 - project.progress / 100)}`"
                  class="transition-all duration-500"
                />
              </svg>
              
              <!-- Percentage Text -->
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-xs font-semibold" :style="{ color: project.progressColor }">
                  {{ project.progress }}%
                </span>
              </div>
            </div>
          </div>
            <hr class="flex-1 my-1 border-gray-300">
        </div>
         </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Remove default button styles */
button {
  background: transparent !important;
  color: inherit !important;
  border: none !important;
  font-weight: inherit !important;
  padding: 0 !important;
}

button:hover {
  background: transparent !important;
  color: inherit !important;
  outline: none !important;
}

/* Specific button styles */
.border {
  border: 1px solid #E5E7EB !important;
}

.hover\:bg-gray-50:hover {
  background-color: #F9FAFB !important;
}

.bg-blue-50 {
  background-color: #EFF6FF !important;
}

.text-blue-600 {
  color: #2563EB !important;
}

.hover\:text-blue-700:hover {
  color: #1D4ED8 !important;
}
</style>