<template>
  <div class="calculator">
    <div class="form">
      <div class="mb-3 field">
        <input
          type="text"
          class="form-control"
          id="name"
          autocomplete="off"
          v-model="form.name"
          required
        />
        <label for="name" title="Nome"></label>
      </div>
      <div class="mb-3 field">
        <input
          type="time"
          class="form-control"
          id="time"
          autocomplete="off"
          v-model="form.time"
          required
        />
        <label for="time" title="Horas"></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        time: '00:00',
      }
    }
  }
}
</script>