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
  'Details',
])
</script>

<template>
  <div class="characters">
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
  justify-content: center;
  height: 100vh;
  padding: 0 2rem;
}
</style>