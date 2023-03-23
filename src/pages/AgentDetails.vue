<script setup lang="ts">
import { RouterLink } from "vue-router";
import useCharacterById from "@/composables/useCharacterById";
import { useRoute } from "vue-router";

const route = useRoute();
const params = route.params as { uuid: string };

const { agent, isLoading } = useCharacterById(params.uuid);
</script>

<template>
  <div class="agent-details" v-if="agent">
    <RouterLink to="/agent/list">Regresar</RouterLink>
    <div v-if="isLoading" class="agent-details__loader">Loading agent information...</div>
    <div v-else class="agent-details__information">
      <div>
        <h2>{{ agent.displayName }}</h2>
        <p>{{ agent.description }}</p>
      </div>
      <img :src="agent.bustPortrait" :alt="agent.displayName" />
    </div>
  </div>
</template>

<style scoped>
.agent-details {
  position: relative;
}

.agent-details a {
  color: var(--text-primary);
  font-size: 1.5rem;
  text-decoration: underline;
}

.agent-details__loader {
  font-size: 3.5rem;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.agent-details__information {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
}

.agent-details__information div:first-child {
  position: absolute;
  left: -3rem;
  bottom: 0;
  background: rgba(8, 16, 23, 0.6);
  width: 600px;
  padding: 1rem 2rem;
  border-radius: 5px;
}

.agent-details h2 {
  color: var(--text-primary);
  font-size: 8rem;
  font-weight: 700;
}

.agent-details p {
  color: var(--text-primary);
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 30px;
}

.agent-details img {
  display: block;
  margin: 0 auto;
  height: calc(100vh - 8rem);
}
</style>
