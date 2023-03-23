import valorantApi from "@/api/valorantApi"
import type { Agent, ResponseAgents, ResponseAgent } from '@/interfaces/AgentInterface'

export const getAgents = async ():Promise<Agent[]> => {
  const params = {
    isPlayableCharacter: true,
  }
  const { data: { data } } = await valorantApi.get<ResponseAgents>('/agents', { params })
  return data
}

export const getAgentById = async (uuid:string):Promise<Agent> => {
  const { data: { data } } = await valorantApi.get<ResponseAgent>(`/agents/${uuid}`)
  return data
}