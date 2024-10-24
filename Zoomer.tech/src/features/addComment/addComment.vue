<template>
  <form class="comment-form" @submit.prevent="postComment">
    <textarea
        class="comment-input"
        v-model="comment.body"
        rows="3"
        placeholder="Добавить комментарий"
    ></textarea>
    <button class="comment-button" type="submit">Отправить</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props, { emit }) {
    const comment = ref({ body: '' });
    const postComment = () => {
      if (comment.value.body) {
        const newComment = {
          ...comment.value,
          id: Date.now(),
        };
        emit('create', newComment);
        comment.value.body = '';
      } else {
        alert('Пожалуйста, заполните все поля.');
      }
    };
    return { comment, postComment };
  }
}
</script>

<style scoped>
.comment-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.comment-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
}

.comment-input:focus {
  border-color: #007bff;
  outline: none;
}

.comment-button {
  align-self: flex-end;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.comment-button:hover {
  background-color: #0056b3;
}

.comment-button:disabled {
  background-color: #c0c0c0;
  cursor: not-allowed;
}
</style>
