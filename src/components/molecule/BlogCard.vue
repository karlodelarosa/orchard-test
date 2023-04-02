<template>
    <div class="blog-container w-full grid grid-cols-3 gap-5">
        <div class="card" v-for="(data, key) in blogs" :key="key">
            {{ publicPath }}
            <div class="image">
                <img @click="redirect(data.url)" :src="data.image.web" class="w-full" alt="Lobster dish with sparkling water">
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
            console.info(url)
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