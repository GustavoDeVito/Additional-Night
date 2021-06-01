<template>
  <header id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a href="#home" class="navbar-brand">
          <img src="" alt="Logo AltFlix" id="logo-img" />
        </a>
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
              <a class="nav-link" href="#home"
                >Início</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about"
                >Sobre</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#profile"
                >Perfil</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>