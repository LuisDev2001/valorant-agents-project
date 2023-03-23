<script setup lang="ts">
import { ref } from "vue";
import TableLayout from "@/layouts/TableLayout.vue";
import TheHeaderTable from "@/components/TheHeaderTable.vue";
import TheItemTable from "@/components/TheItemTable.vue";
import useAgents from "@/composables/useAgents";

const headers = ref(["Nro.", "Agent", "Role", "Abilities"]);

const { agents } = useAgents();
</script>

<template>
  <div class="characters">
    <h1>Valorant Agents</h1>
    <TableLayout>
      <template v-slot:header>
        <TheHeaderTable :headers="headers"></TheHeaderTable>
      </template>
      <template v-slot:body>
        <TheItemTable
          v-for="(agent, key) in agents"
          :correlative="key + 1"
          :key="agent.uuid"
          :agent-data="agent"
        />
      </template>
    </TableLayout>
  </div>
</template>

<style scoped>
.characters {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5rem;
  height: 100vh;
  padding: 4rem 2rem;
}

.characters h1 {
  font-size: 4rem;
  font-weight: 700;
  color: var(--text-primary);
}
</style>
