<template>
  <div>
    <div class="search_bar">
      <form class="search_form">
        <input
            v-model="searchQuery"
            placeholder="Поиск..."
            class="search_input"
        />
      </form>
    </div>
    <div>
    <PostArticle @create="createArticle" />
    <ArticleList :articles="sortedAndSearchedArticles" @remove="removeArticle" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import PostArticle from '../features/PostArticle/PostArticle.vue';
import ArticleList from '../features/PostArticle/ArticleList.vue';
import AInput from "../shared/ui/Input/Input.vue";

export default {
  components: {
    AInput,
    ArticleList,
    PostArticle
  },
  setup() {
    const articles = ref([]);
    const selectedSort = ref('');
    const searchQuery = ref('');

    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/articles');
        articles.value = response.data;
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    const createArticle = async (article) => {
      try {
        const response = await axios.post('http://localhost:3000/articles', article, {
          headers: { 'Content-Type': 'application/json' }
        });
        articles.value.push(response.data);
      } catch (error) {
        console.error('Error creating article:', error);
      }
    };

    const removeArticle = (article) => {
      articles.value = articles.value.filter(a => a.id !== article.id);
    };

    const sortedArticles = computed(() => {
      return [...articles.value].sort((article1, article2) =>
          article1[selectedSort.value]?.localeCompare(article2[selectedSort.value])
      );
    });

    const sortedAndSearchedArticles = computed(() => {
      return sortedArticles.value.filter(article =>
          article.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    onMounted(fetchArticles);

    return {
      articles,
      selectedSort,
      searchQuery,
      createArticle,
      removeArticle,
      sortedAndSearchedArticles
    };
  }
};
</script>

<style scoped>
.search_bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 100px;
}

form {
  display: flex;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 30px;
  padding: 5px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  max-width: 600px;
}

.search_input {
  border: none;
  outline: none;
  font-size: 16px;
  flex-grow: 1;
  padding: 10px;
  border-radius: 20px;
  transition: background-color 0.3s;
}

.search_input:focus {
  background-color: #f0f0f0;
}

</style>





