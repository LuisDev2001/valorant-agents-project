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
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 45px;
  align-items: center;
}

.header-table__item {
  padding: 0 .8rem;
}
</style>