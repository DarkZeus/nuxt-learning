<template>
    <div
        class="shadow rounded border max-w-sm mx-auto mt-12 p-10 flex flex-col items-center gap-3"
    >
        <p class="text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="text-xl">{{ error.message }}</p>
        <button
            type="button"
            class="bg-red-500 text-white px-3 py-2 rounded-md text-sm"
            @click="handleError"
        >
            Go Home
        </button>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped></style>
