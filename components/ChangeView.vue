<script setup lang="ts">
const viewmodeStore = useViewmode()
const { setViewMode } = viewmodeStore
</script>
<template>
    <div class="inline-flex justify-start border rounded shadow divide-x-2">
        <button
            class="flex place-items-center px-3 py-2"
            @click="setViewMode('grid')"
        >
            <Icon name="bi:grid" />
        </button>
        <button
            class="flex place-items-center px-3 py-2"
            @click="setViewMode('list')"
        >
            <Icon name="bi:list" />
        </button>
    </div>
</template>

<style scoped></style>
