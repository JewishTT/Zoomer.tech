<template>
  <select v-model="selectedGender">
    <option disabled value="">Выберите пол</option>
    <option value="Мужчина">Мужской</option>
    <option value="Женщина">Женский</option>
  </select>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  props: ['value'],
  emits: ['update:value'],
  setup(props, { emit }) {
    const selectedGender = ref(props.value);

    return {
      selectedGender,
      updateSelectedGender: (value) => {
        if (selectedGender.value !== value) {
          selectedGender.value = value;
          emit('update:value', value);
        }
      }
    };
  }
});
</script>
