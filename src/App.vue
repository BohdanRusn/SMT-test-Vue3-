<template>
  <div class="app">
    <h1>Page with posts</h1>
    <my-button
      @click="showDialog"
      style="margin: 15px 0"
    >
      Create post
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPost"
      />
    </my-dialog>
    <post-list
      :posts="posts"
      @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import MyDialog from '@/components/UI/MyDialog'
export default {
  components: {
    MyDialog,
    PostForm,
    PostList
  },

  data () {
    return {
      posts: [
        {
          id: 1,
          title: 'JS 1',
          body: 'Description 1'
        },
        {
          id: 2,
          title: 'JS 2',
          body: 'Description 2'
        },
        {
          id: 3,
          title: 'JS 3',
          body: 'Description 3'
        },
        {
          id: 4,
          title: 'JS 4',
          body: 'Description 4'
        }
      ],
      dialogVisible: false
    }
  },
  methods: {
    createPost (post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost (post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog () {
      this.dialogVisible = true
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}

</style>
