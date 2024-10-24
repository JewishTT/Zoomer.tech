<template>
  <div class="profile-container">
    <div class="profile-card">
      <img class="profile-image" :src="profile.photo || 'default-photo.jpg'" alt="Profile Photo">
      <input type="file" @change="onFileChange" v-if="editMode" />
      <div class="name-surname-container">
        <h1 class="name" v-if="!editMode">{{ profile.name }}</h1>
        <input v-else v-model="profile.name" type="text">
        <h1 class="surname" v-if="!editMode">{{ profile.surname }}</h1>
        <input v-else v-model="profile.surname" type="text">
      </div>
      <h1 class="age" v-if="!editMode">{{ profile.age + " Лет"}}</h1>
      <input v-else v-model="profile.age" type="number">
      <h1 class="gender" v-if="!editMode">{{ profile.gender }}</h1>
      <GenderSelect v-else v-model="profile.gender"/>
      <h1 class="bio" v-if="!editMode">{{ profile.bio }}</h1>
      <input v-else v-model="profile.bio" type="text">
      <button @click="toggleEditMode">{{ editMode ? 'Сохранить' : 'Редактировать' }}</button>
    </div>
  </div>
  <PhotoGallery/>
</template>


<script setup>
import { ref, reactive, onMounted, watch, provide } from 'vue';
import GenderSelect from "../entities/Gender/GenderSelect.vue";
import PhotoGallery from "../features/PhotoGallery/PhotoGallery.vue";

const editMode = ref(false);
const profile = reactive({
  name: 'Имя',
  surname: 'Фамилия',
  age: '18',
  gender: '',
  bio: 'без статуса',
  photo: ''
});

onMounted(() => {
  if (localStorage.getItem('profile')) {
    Object.assign(profile, JSON.parse(localStorage.getItem('profile')));
  }
});

watch(profile, (newProfile) => {
  localStorage.setItem('profile', JSON.stringify(newProfile));
}, { deep: true });

const toggleEditMode = () => {
  editMode.value = !editMode.value;
  if (!editMode.value) {
    localStorage.setItem('profile', JSON.stringify(profile));
  }
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profile.photo = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

provide('profile', profile);
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 20px auto;
  background: #f3f3f3;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border: 5px solid #e7e7e7;
  padding: 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.profile-card {
  padding: 20px;
  text-align: center;
}

.profile-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 10px auto;
  display: block;
  border: 5px solid #e7e7e7;
}

.name-surname-container {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.age, .gender {
  font-size: 1em;
  color: #666;
  margin: 5px 0;
}

.profile-card h1 {
  font-size: 0.9em;
  color: #999;
  margin-top: 15px;
}

.profile-card button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 0.9em;
  cursor: pointer;
  margin-top: 20px;
}


.profile-card button:hover {
  background-color: #0056b3;
}

.profile-card input[type="text"],
.profile-card input[type="number"] {
  width: calc(100% - 40px);
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
