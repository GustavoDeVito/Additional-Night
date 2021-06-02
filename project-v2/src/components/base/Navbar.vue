<template>
  <header id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/home" class="navbar-brand">
          <!-- <img src="@/assets/image/logo.png" alt="Logo Adicional Noturno" /> -->
          Adicional Noturno
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
              <router-link to="/home" class="navbar-brand">Início</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="navbar-brand">Sobre</router-link>
            </li>
            <li class="nav-item">
              <!-- <router-link to="/profile" class="navbar-brand">Perfil</router-link> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>