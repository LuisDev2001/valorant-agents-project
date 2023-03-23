<script setup lang="ts">

const props = withDefaults(defineProps<{
  headers: string[],
}>(), {
  headers: () => []
})
</script>

<template>
  <div class="header-table">
    <div class="header-table__item" v-for="header in props.headers" :key="header">
      {{ header }}
    </div>
  </div>
</template>

<style scoped>
.header-table {
  display: inherit;
  grid-template-columns: 60px repeat(3, 1fr);
  grid-template-rows: 45px;
  align-items: center;
  background: var(--header-table-bg);
}

.header-table__item {
  padding: 0 .8rem;
  font-weight: 600;
  height: 100%;
  display: inherit;
  align-items: center;
  color: var(--text-primary);
}

.header-table__item:last-child {
  border: 0;
}
</style>