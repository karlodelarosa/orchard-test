const state = () => ({
    isOpen: false,
    selectedImage: ''
})

const actions = {
    openModal({ commit }, data) {
        commit('SET_MODAL_STATUS', true)
        commit('SET_SELECTED_IMAGE', data.source)
    },
    closeModal({ commit }) {
        commit('SET_MODAL_STATUS', false)
    }
}

const mutations = {
    SET_MODAL_STATUS(state, payload) {
        state.isOpen = payload
    },
    SET_SELECTED_IMAGE(state, payload) {
        state.selectedImage = payload
    }
}

const getters = {
    GET_modalStatus: (state) => state.isOpen,
    GET_images: (state) => state.selectedImage,
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}