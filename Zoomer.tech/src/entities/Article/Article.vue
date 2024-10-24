<script> import { onMounted, ref } from 'vue';
  export default {
    name: 'Article',
    setup() { const article = ref({
      id: 'unique-article-id',
      title: 'Заголовок статьи',
      text: 'Текст статьи',
      author: 'Имя автора',
      views: parseInt(localStorage.getItem('articleViews-unique-article-id'), 10) || 0, date: '2024-05-11' });
      onMounted(() => { localStorage.setItem('articleViews-unique-article-id',
          (article.value.views + 1).toString()); article.value.views++; });
      return { article };
    }
  }
</script>

<template>
  <div class="article-entity">
    <h2>{{ article.title }}</h2>
    <p>{{ article.text }}</p>
    <div class="article-metadata">
      <span>Автор: {{ article.author }}</span>
      <span>Просмотры: {{ article.views }}</span>
      <span>Дата выпуска: {{ article.date }}</span>
    </div>
  </div>
</template>

<style scoped>
.article-entity {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #eaecef;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.article-entity h2 {
  margin-bottom: 10px;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.article-entity p {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
}

.article-metadata {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #eaecef;
  font-size: 14px;
}

.article-metadata span {
  color: #777;
  font-style: italic;
}

@media (max-width: 768px) {
  .article-entity {
    padding: 15px;
  }

  .article-metadata {
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>
