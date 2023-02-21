<script setup lang="ts">
import { Game } from '~~/types'
import { useFavorites } from '~~/stores/favoritesStore'

const { game } = defineProps<{
    game: Game
}>()

const favoritesStore = useFavorites()

const handleFavorite = () =>
    favoritesStore.isFavorited(game.id)
        ? favoritesStore.removeFavorite(game.id)
        : favoritesStore.addFavorite(game)
</script>

<template>
    <button
        @click="handleFavorite"
        :class="{
            'border rounded shadow text-white px-4': true,
            'bg-green-500': !favoritesStore.isFavorited(game.id),
            'bg-red-500': favoritesStore.isFavorited(game.id),
        }"
    >
        {{
            favoritesStore.isFavorited(game.id)
                ? '➖ Remove from favorites'
                : '➕ Add to favorites'
        }}
    </button>
</template>
