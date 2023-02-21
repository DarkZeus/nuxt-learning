<template>
    <GameShow :game="game.data" />
</template>

<script setup>
const { slug } = useRoute().params

const { data: game } = await useFetch(`/api/games/${slug}`)

if (!game.value)
    throw createError({
        statusCode: 404,
        statusMessage: 'Game not found',
        fatal: true,
    })
</script>

<style lang="scss" scoped></style>
