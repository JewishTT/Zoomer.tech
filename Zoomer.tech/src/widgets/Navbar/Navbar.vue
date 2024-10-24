<script>
export default {
  name: 'Navbar',
}
</script>

<template>
  <div class="navbar">
    <div class="navbar-content">
      <a href="#" class="logo">Логотип</a>

    </div>
  </div>
</template>

<style>
.navbar {
  background-color: #f9f9f9;
  top: 0;
  width: 95%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 22px;
  position: fixed;
  margin-left: 100px;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}
</style>