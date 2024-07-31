<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Vamos desbravar o Rio Grande do Sul? </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <img src="~assets/logo.png" alt="Quasar Logo" class="img-logo" />
        <q-item-label header> Tchê, o que fazer ? </q-item-label>
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <q-page class="q-pa-md">
        <ImageCarousel />
      </q-page>
    </q-page-container>
  </q-layout>

  >
</template>

<script setup>
import { ref } from "vue";
import { linksList } from "/src/utils/linksList.js";
import EssentialLink from "components/EssentialLink.vue";
import ImageCarousel from "/src/components/ImageCarousel/ImageCarousel.vue";
import MainLayout from "/src/layouts/MainLayout.css";

defineOptions({
  name: "MainLayout",
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
