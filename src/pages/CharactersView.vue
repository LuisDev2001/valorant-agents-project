<script setup lang="ts">
import { ref } from 'vue'
import TableLayout from '@/layouts/TableLayout.vue'
import TheHeaderTable from '@/components/TheHeaderTable.vue'
import TheItemTable from '@/components/TheItemTable.vue'
const headers = ref([
  'Nro.',
  'Agent',
  'Type',
  'Origin',
])
</script>

<template>
  <div class="characters">
    <h1>Valorant Agents</h1>
    <TableLayout>
      <template v-slot:header>
        <TheHeaderTable :headers="headers"></TheHeaderTable>
      </template>
      <template v-slot:body>
        <TheItemTable :id="1" :agent-name="'Sage'" :agent-origin="'EEUU'" :agent-type="'Support'" />
        <TheItemTable :id="1" :agent-name="'Sage'" :agent-origin="'EEUU'" :agent-type="'Support'" />
        <TheItemTable :id="1" :agent-name="'Sage'" :agent-origin="'EEUU'" :agent-type="'Support'" />
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