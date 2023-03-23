<script setup lang="ts">
const props = withDefaults(defineProps<{
  id: number,
  agentName: string,
  agentType: string,
  agentOrigin: string,
}>(), {
  id: 0,
  agentName: '',
  agentType: '',
  agentOrigin: '',
})
</script>

<template>
  <div class="item-table">
    <div class="item-table__value">{{ props.id }}</div>
    <div class="item-table__value">{{ props.agentName }}</div>
    <div class="item-table__value">{{ props.agentType }}</div>
    <div class="item-table__value">{{ props.agentOrigin }}</div>
  </div>
</template>


<style scoped>
.item-table {
  display: grid;
  grid-template-columns: 60px repeat(3, 1fr);
  grid-template-rows: 45px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--primary);
  cursor: pointer;
}

.item-table:hover {
  background: var(--body-table-bg-hover);
}

.item-table__value {
  padding: 0 .8rem;
  height: 100%;
  display: inherit;
  align-items: center;
  color: var(--text-primary);
  border-right: 1px solid var(--primary);
}

.item-table__value:last-child {
  border: 0;
}
</style>