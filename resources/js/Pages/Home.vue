<template>
    <h1>this is home view</h1>
    <pre>
      {{ post }}
    </pre>
</template>

<script setup>
import axios from '../axios.js'
import { ref, onMounted } from 'vue';

const loading = ref(false);
const post = ref([]);
const error = ref('');

const fetchPosts = async () => {
    loading.value = true
    try {
      const response = await axios.get('/api/posts');
      post.value = response.data.data
    } catch (err) {
      error.value = 'Failed to fetch posts. Try again in a moment!'
      loading.value = false
    } finally {
      loading.value = false
    }
  }

onMounted(() => {
    fetchPosts();
})

</script>