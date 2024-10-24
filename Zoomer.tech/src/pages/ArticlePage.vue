<template>
  <div class="container">
    <div v-if="loading" class="loading">Загрузка...</div>
    <div v-else-if="error" class="error">Ошибка: {{ error }}</div>
    <div v-else-if="article" class="article">
      <h1 class="article-title">{{ article.title }}</h1>
      <p class="article-body">{{ article.body }}</p>
      <div class="meta">
        <span>Просмотры: {{ article.views }}</span>
        <span>Дата выпуска: {{ article.date }}</span>
      </div>
    </div>
  </div>
  <AddComment @create="createComment"/>
  <CommentList :comments="comments"/>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AddComment from "../features/addComment/addComment.vue";
import CommentList from "../features/addComment/CommentList.vue";
import axios from 'axios';

export default {
  components: {
    AddComment,
    CommentList
  },
  setup() {
    const article = ref(null);
    const comments = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const route = useRoute();

    const fetchArticle = async () => {
      try {
        const articleId = route.params.id;
        const response = await axios.get(`http://localhost:3000/articles/${articleId}`);
        article.value = response.data;
        await fetchComments(articleId);
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    const fetchComments = async (articleId) => {
      try {
        const response = await axios.get(`http://localhost:3000/comments?articleId=${articleId}`);
        comments.value = response.data;
      } catch (err) {
        error.value = err.message;
      }
    };

    const createComment = async (comment) => {
      try {
        const articleId = route.params.id;
        const response = await axios.post('http://localhost:3000/comments', { ...comment, articleId }, {
          headers: { 'Content-Type': 'application/json' }
        });
        comments.value.push(response.data);
      } catch (err) {
        error.value = err.message;
      }
    };

    onMounted(() => {
      fetchArticle();
    });

    return {
      article,
      comments,
      createComment,
      loading,
      error
    };
  }
};
</script>

<style scoped>
.article {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}
.article-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
}
.article-body {
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 30px;
  text-indent: 2em;
}
.meta {
  font-size: 16px;
  color: #777;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
}
.meta span {
  margin-right: 0;
}
</style>