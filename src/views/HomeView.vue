<template>
  <div class="home-page">
    <div class="hero-section">
      <div class="hero-content">
        <h1>Welcome to SportWearFlex</h1>
        <p>Discover the perfect blend of style and performance.</p>
        <router-link to="/products" class="explore-button">Explore Collection</router-link>
      </div>
    </div>

    <div class="featured-section">
      <h2>Featured Products</h2>
      <div class="product-list">
        <div v-for="product in featuredProducts" :key="product.prodID" class="product-item">
          <img :src="product.prodImg" :alt="product.prodName" />
          <img src="" alt="">
          <h3>Xola</h3>
          <p class="product-price">R500</p>
          <router-link :to="'/product/' + product.prodID" class="view-details">View Details</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
  }
};
</script>

<style scoped>
*{
  overflow: hidden;
}

.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(https://i.postimg.cc/CMW2j6Qg/Novak-Djokovic-2000-a21f060c8fcc4195b3c6e47e34b4abe7.jpg);
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(216, 45, 209, 1);
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.explore-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: rgba(216, 45, 209, 1);
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
}

.featured-section {
  padding: 50px 0;
  text-align: center;
}

.featured-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
}

.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.product-item {
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
}

.product-item img {
  max-width: 100%;
  border-radius: 5px;
}

.product-item h3 {
  font-size: 1.4rem;
  margin: 10px 0;
}

.product-price {
  font-size: 1.2rem;
  color: #007bff;
}

.view-details {
  display: block;
  margin-top: 15px;
  color: #007bff;
  text-decoration: none;
}

.view-details:hover {
  text-decoration: underline;
}

/* Home Page Styles */
</style>
