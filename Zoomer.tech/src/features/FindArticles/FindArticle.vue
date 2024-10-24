<template>
  <div class="search_bar">
    <form @submit.prevent="emitSearch" class="search_form">
      <AInput
          v-model="searchQuery"
          placeholder="Поиск..."
          class="search_input"
      />
      <button class="search_button">Найти</button>
    </form>
  </div>
</template>

<script>

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

.search_button {
  background-color: #0054a4;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search_button:hover {
  background-color: #218838;
}
</style>