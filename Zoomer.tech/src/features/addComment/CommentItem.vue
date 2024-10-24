<template>
  <div>
    <img class="profile-image" :src="profile.photo || 'default-photo.jpg'" alt="Profile Photo">
    <h1>{{ profile.name + ' ' + profile.surname }}</h1>
    <p>{{ comment.body }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const props = defineProps({
  comment: {
    type: Object,
    required: true
  }
});

const profile = inject('profile');
</script>

