const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Filtrar por tipo de carne de animal!')
      return {
        message
      }
    }
  }).mount('#app')