import { onMounted, ref } from 'vue'
import valorantApi from "@/api/valorantApi"
import type { Agent } from '@/interfaces/AgentInterface'

const agent = ref<Agent>()
const isLoading = ref(true)
const useCharacterById = (uuid:string) => {

  onMounted(() => {
    getCharacterById(uuid)
  })
  
  const getCharacterById = async (uuid:string) => {
    try {
      isLoading.value = true
      const { data: { data } } = await valorantApi.get(`/agents/${uuid}`)
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
