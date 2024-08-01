<template>
  <div>
    <q-item @click="handleClick" clickable>
      <q-item-section v-if="props.icon" avatar>
        <q-icon :name="props.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ props.title }}</q-item-label>
        <q-item-label caption>{{ props.caption }}</q-item-label>
      </q-item-section>
    </q-item>

    <!-- <LoadingOverlay :visible="loading" /> -->
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
// import LoadingOverlay from "./LoadingOverlay/LoadingOverlay.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "#",
  },
  icon: {
    type: String,
    default: "",
  },
});

const router = useRouter();
const loading = ref(false);

// Handle click event
function handleClick() {
  if (props.title === "Sair") {
    router.push("/");
  }
}
</script>
