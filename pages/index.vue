<template>
  <div class="container">
    <ul class="nav-list">
      <li class="nav-elem">
        <NuxtLink href="/lottery" class="nav-link">
          Лотерея
        </NuxtLink>
      </li>
      <li class="nav-elem">
        <NuxtLink href="/auction" class="nav-link">
          Аукцион
        </NuxtLink>
      </li>
      <li class="nav-elem">
        <NuxtLink href="/alchemy" class="nav-link">
          Алхимия
        </NuxtLink>
      </li>
      <li class="nav-elem">
        <NuxtLink href="/results" class="nav-link">
          Результаты
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-list {
  width: 100%;
  text-align: center;
  font-size: 30px;
}

.nav-elem {
  margin-bottom: 10px;
}

.nav-link {
}
</style>

<script>
definePageMeta({
  layout: "list",
});
</script>