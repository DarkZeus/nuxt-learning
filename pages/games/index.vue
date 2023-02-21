<script setup lang="ts">
import { LocationQueryValueRaw } from 'vue-router'
import GameSearchForm from '~~/components/Games/GameSearchForm.vue'
import { Game, GameAPIBody } from '~~/types'

const games = ref<Game[] | null | undefined>(null)

onMounted(() => {
    const { search } = useRoute().query
    if (search) handleSearch(search.toString())
})

const handleSearch = async (searchValue: LocationQueryValueRaw) => {
    const { data } = await useFetch<GameAPIBody>('/api/games', {
        query: {
            search: searchValue,
        },
    })

    games.value = data.value?.data.results

    await navigateTo({
        path: '/games',
        query: {
            search: searchValue,
        },
    })
}
</script>

<template>
    <header class="flex justify-between mb-5">
        <h1 class="font-bold text-4xl">🎮 Games page</h1>
        <div class="flex gap-3">
            <NuxtLink
                to="/games/favorites"
                class="flex border rounded shadow px-4 py-2 items-center justify-center text-center"
                >😍 Favorites</NuxtLink
            >
        </div>
    </header>
    <div class="flex flex-col gap-y-5">
        <GameSearchForm @handleSearch="handleSearch" />
        <GameIndex v-if="games" :games="games" :mode="mode" />
        <p v-else class="font-bold text-center">
            There are no games to show currently. Try our 🔍 Search!
        </p>
    </div>
</template>
