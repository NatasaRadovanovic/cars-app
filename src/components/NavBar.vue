<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Cars App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
         <router-link to="/cars" class="nav-item nav-link">Cars</router-link>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
}
</script>

<style>

</style>
