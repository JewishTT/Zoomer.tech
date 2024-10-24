<script lang="ts">
import { ref } from 'vue';

export default {
  name: "Settings",
  setup() {
    const theme = ref('light');
    const language = ref('en');
    const fontSize = ref('medium');

    const adjustFontSize = (size: string) => {
      fontSize.value = size;
      document.documentElement.style.fontSize = size;
    };

    return { theme, language, fontSize, adjustFontSize };
  }
}
</script>

<template>
  <div class="settings-container">
    <p class="settings-title">Настройки</p>

    <div class="setting-item">
      <label for="font-size-selector">Размер шрифта:</label>
      <select v-model="fontSize" @change="adjustFontSize(fontSize)">
        <option value="small">Маленький</option>
        <option value="medium">Средний</option>
        <option value="large">Большой</option>
      </select>
    </div>
  </div>
</template>

<style>
.settings-container {
  background: linear-gradient(135deg, #f5f7f9, #e4e7eb);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 30px auto;
  text-align: center;
  border: 1px solid #ddd;
}

.settings-title {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

.setting-item {
  margin-bottom: 15px;
  text-align: left;
}

.setting-item label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.setting-item button,
.setting-item select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.setting-item button:hover,
.setting-item select:hover {
  background-color: #f0f0f0;
}
</style>
