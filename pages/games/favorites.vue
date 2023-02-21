<script setup lang="ts">
const favoritesStore = useFavorites()
const { favorites } = favoritesStore
</script>
<template>
    <header class="flex justify-between mb-5">
        <h1 class="font-bold text-4xl">😍 Favorites</h1>
    </header>
    <GameIndex v-if="favorites" :games="favorites" />
</template>
