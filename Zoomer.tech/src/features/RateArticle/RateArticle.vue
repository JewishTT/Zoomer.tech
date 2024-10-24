<script>
import { ref, defineComponent } from 'vue';
import LikeIcon from "../../shared/assets/like-icon.vue";

export default defineComponent({
  name: 'LikeCounter',
  components: { LikeIcon },
  setup() {
    const likes = ref(0);

    const incrementLikes = () => {
      likes.value++;
    };

    return { likes, incrementLikes };
  },
});
</script>

<template>
  <div class="like-counter">
    <button @click="incrementLikes" class="like-button">
      <like-icon class="icon" />
    </button>
    <span class="like-count">{{ likes }}</span>
  </div>
</template>

<style scoped>
.like-counter {
  display: flex;
  align-items: center;
  gap: 10px;
}

.like-button {
  background-color: #f0f0f0;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.like-button:hover {
  background-color: #e0e0e0;
}

.icon {
  width: 24px;
  height: 24px;
}

.like-count {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
</style>
