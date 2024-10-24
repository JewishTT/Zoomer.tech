<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Страница не найдена</p>
    <router-link to="/">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f8f8;
}

h1 {
  font-size: 10rem;
  margin: 0;
  color: #333;
}

p {
  font-size: 1.5rem;
  color: #666;
}

a {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
