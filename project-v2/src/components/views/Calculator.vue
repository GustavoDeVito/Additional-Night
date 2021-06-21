<template>
  <div class="calculator">
    <div class="table-calc">
      <table class="table table-light">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Horas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jacob</td>
            <td>01:00</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>23:00</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>22:00</td>
          </tr>
        </tbody>
      </table>
    </div>

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
      <div>
        <button type="button" class="btn btn-submit">Enviar</button>
        <button type="button" class="btn btn-clear">Limpar</button>
      </div>
    </div>

    <div class="table-result">
      <div>
        <h3>Resultados</h3>
        <p>Jacob <i class="fas fa-plus"></i></p>
        <p>Jorge <i class="fas fa-plus"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        time: "00:00",
      },
    };
  },
};
</script>