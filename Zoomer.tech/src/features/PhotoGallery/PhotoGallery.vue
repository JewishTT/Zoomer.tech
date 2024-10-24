<template>
  <div class="photo-gallery">
    <div class="gallery-header">
      <h2>Галерея</h2>
      <label for="file-upload" class="load-photo-button">
        Загрузить фото
        <input id="file-upload" type="file" @change="onFileUpload" accept="image/*" />
      </label>
    </div>
    <div class="gallery-grid">
      <div v-for="(photo, index) in photos" :key="photo.id" class="gallery-item">
        <img :src="photo.url" alt="User Photo" class="gallery-image" />
        <button @click="removePhoto(photo.id)" class="remove-button">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const photos = ref([]);

const fetchPhotos = async () => {
  const response = await axios.get('http://localhost:3000/photos');
  photos.value = response.data;
};

const onFileUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const imageUrl = e.target.result;
      const response = await axios.post('http://localhost:3000/photos', { url: imageUrl });
      photos.value.push(response.data);
    };
    reader.readAsDataURL(file);
  }
};

const removePhoto = async (id) => {
  await axios.delete(`http://localhost:3000/photos/${id}`);
  photos.value = photos.value.filter(photo => photo.id !== id);
};

onMounted(fetchPhotos);
</script>


<style scoped>
.photo-gallery {
  margin: 20px auto;
  padding: 20px;
  max-width: 1000px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.gallery-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.gallery-header h2 {
  margin: 0;
  font-size: 1.5em;
  color: #343a40;
}

.load-photo-button {
  background-color: #025bc5;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.load-photo-button:hover {
  background-color: #0054a4;
}

.load-photo-button input[type="file"] {
  display: none;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Три колонки */
  gap: 15px; /* Расстояние между элементами */
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.gallery-image {
  width: 100%;
  height: 300px; /* Установите фиксированную высоту для всех фото */
  object-fit: cover; /* Сохраняет пропорции и обрезает изображение, если необходимо */
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
}

.remove-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #dc3545;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #c82333;
}
</style>