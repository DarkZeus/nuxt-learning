<template>
    <div class="flex flex-col gap-y-5">
        <NuxtLink
            v-for="post in posts"
            key="post.id"
            :to="`/posts/${post.id}`"
            class="shadow rounded p-6 border hover:border-black"
            ><span>{{ post.id }}: {{ post.title }}</span></NuxtLink
        >
    </div>
</template>

<script setup>
const { posts } = defineProps(['posts'])
</script>

<style scoped></style>
