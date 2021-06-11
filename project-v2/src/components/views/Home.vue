<template>
  <div class="home">
    <div class="content">
      <h1>Calcule seu Adicional Noturno aqui!</h1>
      <span
        >Projeto derivado da necessidade de automatizar o cálculo do Adicional
        Noturno da PROTON. <br
      /></span>
      <div class="explorer">
        <router-link to="/about"
          ><button type="button" class="btn btn-outline-primary">
            Explorar
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
h1 {
  font-size: clamp(1em, 0.5em + 2.7vw, 5em);
}

span {
  font-size: clamp(1em, 0.5em + 1.2vw, 5em);
}

button {
  font-size: clamp(1em, 0.5em + 0.7vw, 5em);
}
</style>