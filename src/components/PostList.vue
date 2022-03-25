<template>
  <div v-if="posts.length > 0">
    <h3>
      Post list
    </h3>
    <post-item
      class="post" v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else style="color: red">No items</h2>
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
