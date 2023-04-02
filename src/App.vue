<template>
  <main class="wrapper">
    <Article/>
    <Blog/>
  </main>
</template>

<script>
import Article from './components/molecule/ArticleSection.vue'
import Blog from './components/organism/BlogSection.vue'

export default {
  name: 'App',
  components: {
    Article,
    Blog
  }
}
</script>

<style>

</style>
