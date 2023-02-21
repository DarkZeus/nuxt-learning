export default defineEventHandler(async (event) => {
    const { rawgApiKey } = useRuntimeConfig()
    const { search } = getQuery(event)

    const data = await $fetch(`https://api.rawg.io/api/games`, {
        query: {
            key: rawgApiKey,
            search,
        },
    })

    return { data }
})
