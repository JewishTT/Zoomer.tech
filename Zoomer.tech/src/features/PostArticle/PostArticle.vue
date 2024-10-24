<script>
import { ref } from 'vue';
import AInput from "../../shared/ui/Input/Input.vue";
export default {
  components: {AInput},
  setup(props, { emit })
  {
    const article = ref({ title: '', body: '' });
    const postArticle = () => { if (article.value.title && article.value.body)
    {
      const newPost = {
      ...article.value,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      views: 1
    };
      emit('create', newPost);
      article.value.title = '';
      article.value.body = ''; } else { alert('Пожалуйста, заполните все поля.');
    }
    };
    return { article, postArticle };
  }
}
</script>

<template>
  <div class="article-creation-container">
    <form @submit.prevent="postArticle">
     <h4>Создание статьи</h4>
    <input
        v-model="article.title"
        type="text"
        placeholder="Название"
        class="post-title-input"
    />
    <textarea
        v-model="article.body"
        type="text"
        placeholder="Описание"
        class="post-body-textarea"
    />
    <button
        type="submit"
        class="create-post-button"
    >
      Создать
    </button>
   </form>
  </div>
</template>

<style scoped>
.article-creation-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.post-title-input,
.post-body-textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-sizing: border-box;
}

.create-post-button {
  background-color: #0084ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.create-post-button:hover {
  background-color: #006ae1;
}
</style>