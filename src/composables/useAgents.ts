import { ref, computed, onMounted, watch } from 'vue'
import type { Agent } from '@/interfaces/AgentInterface'
import { getAgents } from '@/services/agents.service'

const agents = ref<Agent[]>([])
const isLoading = ref(true)

const useAgents = () => {

  onMounted(() => {
    getAgentsList()
  })

  const getAgentsList = async () => {
    try {
      isLoading.value = true
      const data = await getAgents()
      agents.value = data
      isLoading.value = false
    } catch (error) {
      return error
    }
  }

  watch(agents, (nV, oV) => {
    if (!nV) {
      getAgentsList()
    }
  })

  return {
    //State
    agents,
    isLoading,
    // Methods

    // Getters
    countAgents: computed(() => agents.value.length)
  }
}

export default useAgents