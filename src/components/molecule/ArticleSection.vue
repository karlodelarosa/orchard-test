<template>
    <section class="h-screen flex items-center">
            <div class="grid grid-cols-6 gap-[30px]">
                <!-- Images -->
                <div class="col-span-4">
                    <div class="grid grid-rows-1 grid-flow-col gap-4 gallery">
                        <img 
                            v-for="(src, key) in articleData.images" 
                            :key="key" 
                            :src="src" 
                            :class="{ 'row-span-2': key === 0 }" 
                            alt="Orchard Images"
                        >
                    </div>
                </div>

                <!-- Description -->
                <div class="col-span-2">
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
import { articleData } from '@/js/mock/ArticleData'

export default {
    name: 'ArticleSection',
    setup() {
        return {
            articleData
        }
    }
}
</script>
<style lang="">
    
</style>