<template>
  <q-dialog v-model="visible" persistent>
    <q-card>
      <q-card-section>
        <div class="q-mb-md text-center">
          <q-spinner-dots color="red" size="60px" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});

const visible = ref(props.visible);

watch(
  () => props.visible,
  (newVal) => {
    visible.value = newVal;
  }
);
</script>

<style scoped>
.q-dialog {
  background-color: rgba(0, 0, 0, 0.7); /* Fundo escuro */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
