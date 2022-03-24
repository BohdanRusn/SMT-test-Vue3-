<template>
  <div>
    <h3>
      User list
    </h3>
    <post-item
      class="post" v-for="(post, idx) in posts"
      :key="idx"
      :post="post"
    />
  </div>

</template>

<script>
import PostItem from '@/components/PostItem'
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
