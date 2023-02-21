export default defineEventHandler(async (event) => {
    const { rawgApiKey } = useRuntimeConfig()
    const { slug } = event.context.params

    const data = await $fetch(`https://api.rawg.io/api/games/${slug}`, {
        query: {
            key: rawgApiKey,
        },
    })

    return { data }
})
