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
  height: 100%;
  max-width: 850px;
  max-height: 600px;
  overflow: auto;
}

.table-body {
  background: var(--body-table-bg);
}
</style>
