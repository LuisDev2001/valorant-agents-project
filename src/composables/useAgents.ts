import { ref, computed, onMounted } from 'vue'
import type { Agent } from '@/interfaces/AgentInterface'
import valorantApi from '@/api/valorantApi';

const agents = ref<Agent[]>([])
const isLoading = ref(true)
const hasError = ref(false)
const errorMessage = ref()

const useAgents = () => {

  onMounted(() => {
    getAgents()
  })

  const getAgents = async () => {
    try {
      const { data: { data } } = await valorantApi.get('/agents', {
        params: {
          isPlayableCharacter: true,
        }
      })
      agents.value = data
    } catch (error) {
      return error
    }
  }
  

  return {
    agents,
    // Methods

    // Getters
    countAgents: computed(() => agents.value.length)
  }
}

export default useAgents