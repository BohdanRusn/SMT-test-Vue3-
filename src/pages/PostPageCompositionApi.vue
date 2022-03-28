<template>
  <div>
    <h1>Page with posts</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Find..."
      v-focus
    />
    <div class="app__btns">
      <my-button
      >
        Create post
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
      />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      v-if="!isPostsLoading"
    />
    <div v-else>Post are loading...</div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import MyDialog from '@/components/UI/MyDialog'
import MySelect from '@/components/UI/MySelect'
import {ref} from 'vue'
import axios from 'axios'
import { usePosts } from '@/hooks/usePosts'
import useSortedPosts from '@/hooks/useSortedPosts'
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'
export default {
  components: {
    MyDialog,
    PostForm,
    PostList,
    MySelect
  },

  data () {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'By name' },
        { value: 'body', name: 'By description' }
      ]
    }
  },
  setup(props) {
    const {posts, isPostsLoading, totalPages} = usePosts(10)
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
    return {
      posts,
      isPostsLoading,
      totalPages,
      sortedPosts, selectedSort,
      searchQuery, sortedAndSearchedPosts
    }
  }
}
</script>

<style>

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
  margin-right: 10px;
}
.page:last-child{
  margin-right: 0;
}
.current-page {
  border: 2px solid teal;
}
.observer{
  height: 30px;
  background: olivedrab;
  margin-top: 15px;
}
</style>
