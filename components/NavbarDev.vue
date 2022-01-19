<template>
  <div>
      <nav class="row navbar-dark navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="img/logo.svg" />
        </a>
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
        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.navbar {
    background-color: #5893CE;
}

.navbar-brand {
    margin-left: 2rem;
}

.navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 1);
}

.navbar-nav {
    margin-bottom: -8px;
}

.nav-item {
    height: 77px;
    margin-left: 20px;
    margin-right: 20px;
}

.nav-item::after {
    background-color: white;
    bottom: 0;
    content: '';
    height: 5px;
    left: 50%;
    margin-bottom: 0%;
    position: absolute;
    transition: all ease-in-out .2s;
    width: 0px;
}

.nav-item:hover::after {
    left: 0;
    width: 100%;
}

.nav-link {
    color: #FFFFFF;
    font-size: 24px;
    margin-top: 12px;
}

.nav-link:hover {
    color: white;
}
li.nav-item {
    position: relative;
}

li.nav-item:hover {
    border: none;
}
</style>
