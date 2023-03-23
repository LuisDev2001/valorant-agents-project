<script setup lang="ts">
import { computed } from "vue";
import type { Agent, Ability } from "@/interfaces/AgentInterface";
const props = defineProps<{
  correlative: number;
  agentData: Agent;
}>();

const getAbilitiesList = computed(() => {
  return (abilities: Ability[]) => {
    const abilitiesListName = abilities.map((ability) => ability.displayName);
    return abilitiesListName.join(", ");
  };
});
</script>

<template>
  <div class="item-table">
    <div class="item-table__value">{{ props.correlative }}</div>
    <div class="item-table__value">
      {{ props.agentData.displayName }}
    </div>
    <div class="item-table__value">{{ props.agentData.role.displayName }}</div>
    <div class="item-table__value">
      {{ getAbilitiesList(props.agentData.abilities) }}
    </div>
  </div>
</template>

<style scoped>
.item-table {
  display: grid;
  grid-template-columns: 60px repeat(3, 1fr);
  grid-template-rows: 70px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--primary);
  cursor: pointer;
}

.item-table:hover {
  background: var(--body-table-bg-hover);
}

.item-table__value {
  padding: 0.8rem;
  height: 100%;
  color: var(--text-primary);
  border-right: 1px solid var(--primary);
}

.item-table__value:last-child {
  border: 0;
}
</style>
