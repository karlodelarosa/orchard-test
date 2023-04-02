<template>
    <section class="h-screen flex items-center">
            <div class="blog-section">
                <h2>{{ text }}</h2>

                <BlogCard/>
            </div>
        </section>
</template>
<script>
import { toRefs } from 'vue'
import BlogCard from '../molecule/BlogCard.vue'

export default {
    name: 'BlogSection',
    components: {
        BlogCard
    },
    props: {
        blogSectionText: {
            type: String,
            default: 'ALL THE LATEST FROM AEG'
        }
    },
    setup(props) {
        const { blogSectionText } = toRefs(props)

        return {
            text: blogSectionText
        }
    }
}
</script>
<style lang="">
    
</style>