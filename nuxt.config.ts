// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @TODO: dev only
    ssr: false,
    runtimeConfig: {
        rawgApiKey: '',
    },
    components: [{ path: '~/components', pathPrefix: false }],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        'nuxt-icon',
    ],
    app: {
        head: {
            title: 'Nuxt Learning',
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/layouts/assets/css/tailwind.css'],

    imports: {
        dirs: ['./stores'],
    },

    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },

    piniaPersistedstate: {
        cookieOptions: {
            sameSite: 'strict',
        },
        storage: 'localStorage',
    },
})
