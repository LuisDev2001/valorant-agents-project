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
    <div class="item-table__value">
      <button>Details</button>
    </div>
  </div>
</template>


<style scoped>
.item-table {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 30px;
  align-items: center;
  justify-content: center;
}

.item-table__value {
  padding: 0 .8rem;
}
</style>