<template>
    <div class="blog-container w-full grid md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-5">
        <div class="card" v-for="(data, key) in blogs" :key="key">
            <div class="image">
                <img width="640" height="360" @click="redirect(data.url)" :src="data.image.web" class="w-full" alt="Orchard blog images">
            </div>
            <div class="content">
                <h3>{{ data.title }}</h3>
                <p>{{ data.content }}</p>
            </div>
            <a @click="redirect(data.url)">
                READ MORE
            </a>
        </div>
    </div>
</template>
<script>
import { blogData } from '@/js/mock/BlogData'

export default {
    name: 'BlogCard',
    setup() {
        const publicPath = process.env.BASE_URL

        const redirect = (url) => {
            console.log(url)
        }

        const parseImg = (imgName) => {
            return '@/assets/component-02/' + imgName
        }

        return {
            blogs: blogData,
            redirect,
            parseImg,
            publicPath,
        }
    }
}
</script>
<style lang="">
    
</style>