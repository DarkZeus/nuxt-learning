<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Game } from '~~/types'
const { games } = defineProps<{
    games: Game[]
}>()

const viewmodeStore = useViewmode()
const { mode } = storeToRefs(viewmodeStore)
</script>

<template>
    <div>
        <div class="mb-5">
            <ChangeView />
        </div>
        <div
            v-if="mode === 'grid'"
            class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
        >
            <NuxtLink
                v-for="game in games"
                :key="game.id"
                :to="`/games/${game.slug}`"
                class="w-full"
            >
                <div class="rounded overflow-hidden shadow-lg">
                    <img
                        class="w-full"
                        :src="
                            game.background_image ||
                            `https://via.placeholder.com/150x90.png?text=${game.name}`
                        "
                        :alt="game.name"
                    />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            {{ game.name }}
                        </div>
                        <p class="text-gray-700 text-base">
                            {{ game.description_raw }}
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            v-for="genre in game.genres"
                            >#{{ genre.name }}</span
                        >
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div v-else class="flex flex-col gap-y-5">
            <NuxtLink
                v-for="game in games"
                :key="game.id"
                :to="`/games/${game.slug}`"
                class="flex shadow rounded border hover:border-black"
            >
                <div class="h-full w-2/12">
                    <img
                        :src="
                            game.background_image ||
                            `https://via.placeholder.com/150x90.png?text=${game.name}`
                        "
                        :alt="game.name"
                    />
                </div>
                <div class="w-10/12 p-6 flex items-center">
                    <span class="text-xl font-bold"
                        >{{ game.id }}: {{ game.name }}</span
                    >
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped></style>
