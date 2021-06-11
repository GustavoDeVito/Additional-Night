<template>
  <header id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/home" class="navbar-brand">
          <span>Adicional Noturno</span>
        </router-link>
      </div>
      <div class="container-fluid justify-content-end">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav d-flex justify-content-end">
            <li class="nav-item">
              <router-link to="/home" class="navbar-brand">início</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="navbar-brand">sobre nós</router-link>
            </li>
            <li class="nav-item">
              <!-- <router-link to="/profile" class="navbar-brand">perfil</router-link> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  a.navbar-brand span {
    font-size: clamp(1em, .5em + 2.5vw, 5em);
  }
</style>