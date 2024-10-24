<template>
  <div class="home">
    <header class="header">
      <h1 class="fade-in">Добро пожаловать!</h1>
      <p class="fade-in">P</p>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
}

.header {
  background: linear-gradient(135deg, #6b8e23, #f4a460);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.header h1 {
  margin: 0;
  font-size: 2.5em;
}

.header p {
  margin: 10px 0 0;
  font-size: 1.2em;
}


.hero h2 {
  margin-top: 0;
}

.cta-button {
  background-color: #6b8e23;
  color: white;
  border: none;
  padding: 15px 25px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


/* Animation Styles */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.zoom-in {
  transform: scale(0);
  animation: zoomIn 0.8s forwards;
}

.bounce {
  animation: bounce 0.5s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  to {
    transform: scale(1);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
