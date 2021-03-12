<template>
  <div id="getWrapper">
    <ul v-if="posts && posts.length">
      <li v-for="post of posts" :key="post.index">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors" :key="error.index">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style lang="scss">
  #getWrapper {
    max-width: 50em;
    margin: 0 auto;

    p {
      text-align: left;
      margin: 0;

      &:nth-child(even) {
        margin-bottom: 1em;
      }
    }
  }
</style>