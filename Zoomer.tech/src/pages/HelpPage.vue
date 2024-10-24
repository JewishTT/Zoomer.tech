<template>
  <div class="container">
    <div class="support-form">
      <h2>Форма поддержки</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Имя:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Электронная почта:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Сообщение:</label>
          <textarea id="message" v-model="form.message" rows="4" required></textarea>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  alert(`Имя: ${form.value.name}\nЭлектронная почта: ${form.value.email}\nСообщение: ${form.value.message}`);
  form.value.name = '';
  form.value.email = '';
  form.value.message = '';
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.support-form {
  background-color: #f0f9ff;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.support-form h2 {
  color: #007acc;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #007acc;
  outline: none;
}

button {
  background-color: #007acc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #005f8d;
}
</style>
