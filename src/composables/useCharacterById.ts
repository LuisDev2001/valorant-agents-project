import { onMounted, ref } from 'vue'
import { getAgentById } from '@/services/agents.service'
import type { Agent } from '@/interfaces/AgentInterface'

const agent = ref<Agent>()
const isLoading = ref(true)
const useCharacterById = (uuid:string) => {

  onMounted(() => {
    getAgentDataById(uuid)
  })
  
  const getAgentDataById = async (uuid:string) => {
    try {
      isLoading.value = true
      const data = await getAgentById(uuid)
      agent.value = data
      isLoading.value = false
    } catch (error) {
      return error
    }
  }

  return {
    //State
    agent,
    isLoading
    //Getters

    // Methods
  }
}

export default useCharacterById
