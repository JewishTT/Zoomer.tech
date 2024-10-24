<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "A-Input",
  props: {
    label: { type: String, required: true},
    value: { type: String, required: true },
    placeholder: { type: String },
    disabled: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const internalValue = ref(props.value)

    const updateValue = (value) => {
      internalValue.value = value
      emit('update:value', value)
    }

    return {
      internalValue,
      updateValue
    }
  }
})
</script>

<template>
  <div class="form-input" >
    <input
        class="input-text"
        :required="required"
        :disabled="disabled"
        :autofocus="autofocus"
        :placeholder="placeholder"
        v-model="internalValue"
        on-change="onChange">
  </div>
</template>

<style scoped>
input {
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 0 5px #ccc;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 400px;
}

input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px #007bff;
}
</style>