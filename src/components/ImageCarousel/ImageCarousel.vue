<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      ref="carousel"
    >
      <q-carousel-slide
        v-for="slideData in slides"
        :key="slideData.name"
        :name="slideData.name"
        :img-src="slideData.imgSrc"
      />

      <template v-slot:control>
        <div class="custom-arrows">
          <q-btn
            push
            round
            dense
            class="arrow-btn arrow-left"
            icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push
            round
            dense
            class="arrow-btn arrow-right"
            icon="arrow_right"
            @click="$refs.carousel.next()"
          />
        </div>
      </template>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { slides } from "/src/utils/slides.js";
import ImageCarousel from "/src/components/ImageCarousel/ImageCarousel.css";

const slide = ref(1);
</script>
