<template>
  <div>
    <input type="file" @change="handleFileUpload" />
    <button @click="submitPhoto">Загрузить фото</button>
    <img v-if="imageUrl" :src="imageUrl" alt="Profile Photo" />
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'addPhoto',
  setup() {
    const selectedFile = ref(null);
    const imageUrl = ref('');

    const handleFileUpload = (event) => {
      selectedFile.value = event.target.files[0];
    };

    const submitPhoto = () => {
      const formData = new FormData();
      formData.append('file', selectedFile.value);

      axios.post('http://localhost:3000/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then(response => {
            console.log('Фото загружено', response);
            imageUrl.value = '/path/to/saved/image.jpg';
          })
          .catch(error => {
            console.error('Ошибка при загрузке фото', error);
          });
    };

    return {
      handleFileUpload,
      submitPhoto,
      imageUrl
    };
  }
}
</script>
