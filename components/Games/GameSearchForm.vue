<script setup lang="ts">
const search = ref<String | null>(null)
</script>
<template>
    <div>
        <form
            class="flex gap-3"
            @submit.prevent="$emit('handleSearch', search)"
        >
            <input
                class="border shadow rounded py-2 px-4 shrink w-11/12"
                type="search"
                v-model="search"
                placeholder="Search..."
            />
            <button class="border rounded shadow w-1/12" type="submit">
                🔍 Search
            </button>
        </form>
    </div>
</template>
