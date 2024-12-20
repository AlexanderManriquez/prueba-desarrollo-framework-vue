<template>
    <Contador />
    <Parent />
</template>

<script>
import Contador from '@/components/Contador.vue';
import Parent from '@/components/Parent.vue';

export default {
  name: 'HomeView',
  components: {
    Contador,
    Parent
  }
};
</script>