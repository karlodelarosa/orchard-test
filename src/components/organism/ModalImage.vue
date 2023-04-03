<template>
    <transition name="fade">
        <div v-if="isOpen" class="w-full h-screen bg-black/80 fixed top-0 left-0 flex items-center justify-center overflow-auto">
            <div class="modal">
                <div class="flex justify-between border-b border-gray-100 px-5 py-4">
                    <div class="flex flex-row items-center gap-1">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-accent">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                        </div>

                        <span class="font-bold text-gray-700 text-base">Preview Image</span>
                    </div>
                    <div>
                        <button class="transition-all hover:rotate-90" @click="closeModal()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="px-10 py-5 text-gray-600">
                    <img width="640" height="360" :src="src" alt="Orchard Image" class="mx-auto">
                </div>

                <div class="px-5 py-4 flex justify-end">
                    <button class="text-sm py-2 px-3 text-gray-500 hover:text-black transition-all duration-150" @click="closeModal()">Close</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'ModalImage',
    setup() {
        const store = useStore()

        const isOpen = computed(() => store.getters['modal/GET_modalStatus'])
        const src = computed(() => store.getters['modal/GET_images'])

        const closeModal = () => {
            store.dispatch('modal/closeModal')
        }

        return {
            isOpen: isOpen,
            src,
            closeModal,
        }
    }
}
</script>