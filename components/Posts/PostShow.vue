<template>
    <div class="flex flex-col gap-y-5">
        <div class="shadow rounded p-6 border">
            <span class="font-bold text-xl">{{ post.title }}</span>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script setup>
const { post } = defineProps(['post'])
</script>

<style scoped></style>
