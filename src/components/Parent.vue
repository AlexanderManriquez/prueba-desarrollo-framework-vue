<template>
  <div>
    <Child @send-text="receiveText" />
    <p>Texto recibido: {{ receivedText }}</p>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  name: 'Parent',
  components: {
    Child
  },
  data() {
    return {
      receivedText: ''
    };
  },
  methods: {
    receiveText(text) {
      this.receivedText = text;
    }
  }
};
</script>

<style scoped>
/* Estilos opcionales */
</style>