<template>
<div id="navbar">
     <nav class="row navbar-dark navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/img/logo.png" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                 <ul class="navbar-nav">
                    <li class="nav-item">
                        <nuxt-link to="/" class="nav-link" href="#">Dashboard</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/projects" class="nav-link" href="#">Projects</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/users">Users</nuxt-link>
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
<script>
export default {
  

};
</script>
