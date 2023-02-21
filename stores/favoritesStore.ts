import { FavoritesState, Game } from '~~/types'

export const useFavorites = defineStore('favorites', {
    state: (): FavoritesState => ({
        favorites: [],
    }),

    getters: {
        all: (state) => state.favorites,

        isFavorited: (state) => (id: Number) =>
            state.favorites?.filter((favorite) => favorite.id === id).length >
            0,
    },

    actions: {
        addFavorite(game: Game) {
            this.favorites = [...this.favorites, game]
        },

        removeFavorite(id: Number) {
            this.favorites = [
                ...this.favorites.filter((favorite) => favorite.id !== id),
            ]
        },
    },

    persist: true,
})
