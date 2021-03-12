<template>
  <div>
    <input
      type="text"
      id="postBody"
      v-model="postBody"
      @blur="postPost()"
      @keyup.enter="postPost()"
      placeholder="Enter your post text here"
    />
    <ul v-if="errors && errors.length">
      <li v-for="error in errors" :key="error.index">
        {{ error.message }}
      </li>
    </ul>
    <p>Check the Console or Network tab in Dev Tools for response info</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      postBody: '',
      errors: []
    }
  },
  methods: {
    postPost() {
      axios.post('http://jsonplaceholder.typicode.com/posts', {
        body: this.postBody
      })
      .then(response => {
        console.log(response);
        document.getElementById('postBody').value = '';
      })
      .catch(err => {
        this.errors.push(err)
      })
    }
  }
}
</script>