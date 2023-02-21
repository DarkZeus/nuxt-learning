<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt Learning</NuxtLink>
                <div class="flex gap-x-3">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/posts">Posts</NuxtLink>
                    <NuxtLink to="/about">About</NuxtLink>
                    <NuxtLink to="/games">Games</NuxtLink>
                </div>
            </nav>
        </header>
    </div>

    <div class="container mx-auto py-4">
        <slot />
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: crimson;
    @apply font-bold;
}
</style>
