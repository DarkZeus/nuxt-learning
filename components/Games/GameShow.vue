<script setup lang="ts">
import { Game } from '~~/types'
import { useFavorites } from '~~/stores/favoritesStore'

const { game } = defineProps<{
    game: Game
}>()
</script>

<template>
    <div class="flex flex-col gap-y-5">
        <div class="shadow rounded p-6 border">
            <header class="flex justify-between mb-5">
                <h1 class="font-bold text-4xl">
                    {{ game.name }}
                    <small class="opacity-60 font-bold uppercase text-base">{{
                        game.id
                    }}</small>
                </h1>
                <GameAddToFavorites :game="game" />
            </header>
            <p>{{ game.description_raw }}</p>
        </div>
        <div
            class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
        ></div>
    </div>
</template>

<style scoped></style>
