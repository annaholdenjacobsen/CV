<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header class="flex m-12 w-full flex-col items-center">
    <div class="flex w-3/5 items-center gap-8 justify-between">
      <img
        src="/meg.jpg"
        alt="Bilde av Anna Jacobsen"
        class="rounded-full w-80"
      />
      <div class="flex flex-col gap-4">
        <h1 class="text-4xl font-abril font-bold text-[#E3DCD2]">Hei!</h1>
        <h1
          class="text-4xl leading-relaxed font-abril font-bold text-[#E3DCD2]"
        >
          Jeg heter Anna Johanne Holden Jacobsen
        </h1>
      </div>
    </div>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
