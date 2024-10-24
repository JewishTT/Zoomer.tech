<template>
  <div class="article-entity">
    <h2>{{ article.title }}</h2>
    <p style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">{{ article.body }}</p>
    <div class="article-metadata">
      <span>Просмотры: {{ article.views }}</span>
      <span>Дата выпуска: {{ article.date }}</span>
      <button class="article__btns"
              type="button"
              @click="openArticle"
      >
        Открыть
      </button>
      <button class="del_btns"
              @click="$emit('remove', article)"
      >
        Удалить
      </button>
      <RateArticle/>
    </div>
  </div>
</template>

<script>
import RateArticle from "../RateArticle/RateArticle.vue";
export default {
  components: {RateArticle},
  props: {
    article: {
      type: Object,
      required: true,
    }
  },
  methods: {
    openArticle() {
      this.$router.push(`/Articles/${this.article.id}`);
    }
  }
}
</script>

<style scoped>
.article-entity {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #eaecef;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
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
  overflow: hidden;
  line-clamp: 1;
  text-overflow: ellipsis;
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

.article__btns{
  background-color: #0084ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.del_btns {
  background-color: #ff0048;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
