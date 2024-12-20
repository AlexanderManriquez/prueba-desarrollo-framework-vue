<template>
  <div>
    <input v-model="inputText" type="text" />
    <button @click="sendText">Enviar</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      inputText: ''
    };
  },
  methods: {
    sendText() {
      this.$emit('send-text', this.inputText);
    }
  }
};
</script>

<style scoped>
/* Estilos opcionales */
</style>