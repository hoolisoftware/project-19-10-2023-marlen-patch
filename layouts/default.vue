<template>
  <div class="page">
    <TheHeader/>
    <main>
      <Slider/>
      <slot/>
      <About/>
    </main>
    <TheFooter/>
  </div>
</template>

<style scoped>
</style>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import TheFooter from "../components/common/TheFooter.vue";
import About from "../components/common/About.vue";
import Slider from "../components/common/Slider.vue";

export default {
  components: {Slider, About, TheFooter, TheHeader}
}
</script>