<template>
  <div class="table">
    <slot name="header"></slot>
    <div class="table-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>


<style scoped>
.table {
  display: grid;
  width: 100%;
  max-width: 850px;
}

.table-body {
  background: var(--body-table-bg);
}
</style>