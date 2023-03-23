import { ref, computed, onMounted } from 'vue'
import type { Agent } from '@/interfaces/AgentInterface'
import valorantApi from '@/api/valorantApi';

const agents = ref<Agent[]>([])
const isLoading = ref(true)

const useAgents = () => {

  onMounted(() => {
    setTimeout(() => {
      getAgents()
    }, 2000);
  })

  const getAgents = async () => {
    try {
      isLoading.value = true
      const { data: { data } } = await valorantApi.get('/agents', {
        params: {
          isPlayableCharacter: true,
        }
      })
      agents.value = data
      isLoading.value = false
    } catch (error) {
      return error
    }
  }

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