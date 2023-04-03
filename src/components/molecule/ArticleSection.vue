<template>
    <section class="xl:min-h-screen flex md:items-center">
        <div class="grid grid-cols-1 xl:grid-cols-6 gap-[30px]">
            <!-- Images -->
            <div class="md:col-span-4">
                <div class="grid md:grid-rows-1 md:grid-flow-col gap-4 gallery    ">
                        <img 
                            v-for="(src, key) in articleData.images" 
                            :key="key" 
                            :src="src" 
                            :class="{ 'row-span-2': key === 0 }" 
                            @click="openModal(src)"
                            width="640" height="360" 
                            loading="lazy"
                            class="w-full"
                            alt="Orchard Images"
                        >
                </div>
            </div>

            <!-- Description -->
            <div class="md:col-span-2">
                <article class="description">
                    <h1>{{ articleData.title }}</h1>
                    <p>{{ articleData.content }}</p>
                </article>

                <article class="quote">
                    <h2>{{ articleData.warning.title }}</h2>
                    <p>{{ articleData.warning.content }}</p>
                </article>
            </div>
        </div>
    </section>
</template>
<script>
import { useStore } from 'vuex'
import { articleData } from '@/js/mock/ArticleData'

export default {
    name: 'ArticleSection',
    setup() {
        const store = useStore()
        const openModal = (src) => {
            store.dispatch('modal/openModal', {
                source: src
            })
        }

        return {
            articleData,
            openModal
        }
    }
}
</script>
<style lang="">
    
</style>