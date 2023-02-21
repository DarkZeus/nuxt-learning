import { ViewMode } from '~~/types'

interface IViewMode {
    mode: ViewMode
}

export const useViewmode = defineStore('viewmode', {
    state: (): IViewMode => ({
        mode: 'grid',
    }),

    actions: {
        setViewMode(viewMode: ViewMode) {
            this.mode = viewMode
        },
    },

    persist: true,
})
