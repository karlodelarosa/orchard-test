<template>
  <main class="wrapper">
    <Article/>
    <Blog/>
    <ModalImage/>
  </main>
</template>

<script>
import Article from './components/molecule/ArticleSection.vue'
import Blog from './components/organism/BlogSection.vue'
import ModalImage from './components/organism/ModalImage.vue'

export default {
  name: 'App',
  components: {
    Article,
    Blog,
    ModalImage,
  }
}
</script>

<style>

</style>
