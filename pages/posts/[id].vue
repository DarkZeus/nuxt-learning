<template>
    <PostShow :post="post" />
</template>

<script setup>
const { id } = useRoute().params

const { data: post } = await useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
)

if (!post.value)
    throw createError({
        statusCode: 404,
        statusMessage: 'Post not found',
        fatal: true,
    })

definePageMeta({
    layout: 'products',
})
</script>

<style lang="scss" scoped></style>
