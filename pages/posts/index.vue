<template>
    <div>
        <p>Posts Index</p>
        <PostIndex :posts="posts" />
    </div>
</template>

<script setup>
const { data: posts } = await useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
)
</script>

<style lang="scss" scoped></style>
