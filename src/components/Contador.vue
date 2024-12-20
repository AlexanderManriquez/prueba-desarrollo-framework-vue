<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  
  export default {
    name: 'Counter',
    computed: {
      ...mapState(['count'])
    },
    methods: {
      ...mapMutations(['increment', 'decrement'])
    }
  };
  </script>