<template>
  <div class="home-page">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="animate__animated animate__backInDown">Welcome to SportWearFlex</h1>
        <p class="animate__animated animate__backInDown fs-4">Discover the perfect blend of style and performance.</p>
        <router-link to="/products" class="explore-button"
          >Explore Collection</router-link
        >
      </div>
    </div>
    <div class="text-center">
      <h1 class="heading"> Inspired by NOVAK DJOKOVIC</h1>
      <div class="Novack p-4">
        <img
          class="over"
          src="https://i.postimg.cc/HLv7B5dM/unnamed.jpg"
          alt="Djokovic"
        />
        <div class="ptag pt-4 text-center">
          <h3>Novack Djokovic</h3>
          <p class="primary">At SportWearFlex, we're excited to bring you <br>the Tournament Collection, a line of premium <br>tennis wear designed for peak performance. <br>Just like Novak Djokovic relies on this collection<br> in his matches, you too can experience the exceptional<br> benefits of this high-performance sportswear.</p>
          <br />
          <router-link to="/products" class="desc-button mt-2">Lacoste</router-link>
          
        </div>
      </div>
      <h1 class="heading">Inspired by SERENA WILLIAMS</h1>
      <div class="Serena p-4">
        <img
          class="over"
          src="https://i.postimg.cc/8CJh8j76/serena-williams-f1e3721b3130468e931da8a0de36c720.jpg"
          alt="Serena"
        />
        <div class="ptag pt-4 text-center">
          <h3>Serena Williams</h3>
          <p class="primary">Our Serena Williams Signature Collection is <br>inspired by the one and only Serena Williams,<br> a true icon of the sport. We've worked closely<br> with Serena to create a line that embodies her<br> unparalleled passion, power, and style.</p><br />
          <router-link to="/products" class="desc-button mt-2">Nike</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {},
};
</script>

<style scoped>
* {
  overflow: hidden;
}
.Novack,
.Serena {
  display: flex;
}
.over {
  margin: 2rem 10rem 2rem 10rem;
  width: 600px;
  border-radius: 20px;
}

.ptag {
  font-size: 1.3rem;
}

.desc-button {
  background: transparent;
  color: white !important;
  border: 2px solid;
  border-radius: 15px;
  padding: 0.5em 1em;
  margin: auto;
  text-decoration: none;
}
.desc-button:hover{
  background-color:#830f68;
}

.primary{
  color:#ed2eca;
}
h3{
  color: #ed2eca;
}

.heading{
  font-family: Oswald;
  font-size: 60px;
   animation: Color 4s linear infinite;
  -webkit-animation: Color 4s ease-in-out infinite;
  text-shadow: 6px 6px #e816a2;
}

@keyframes Color{
  0%{
    color: #ed2eca;
  }
  
  20%{
    color:#4FC1E9;
  }
  
  40%{
    color:#830f68;
  }
  
  60%{
    color:#FC6E51;
  }
  
  80%{
    color:#ED5565;
  }
  
  100%{
    color:#AC92EC;
  }
}

@-moz-keyframes Color{
  0%{
    color:#A0D468;
  }
  
  20%{
    color:#4FC1E9;
  }
  
  40%{
    color:#FFCE54;
  }
  
  60%{
    color:#FC6E51;
  }
  
  80%{
    color:#ED5565;
  }
  
  100%{
    color:#AC92EC;
  }
}

@-webkit-keyframes Color{
  0%{
    color:#A0D468;
  }
  
  20%{
    color:#4FC1E9;
  }
  
  40%{
    color:#FFCE54;
  }
  
  60%{
    color:#FC6E51;
  }
  
  80%{
    color:#ED5565;
  }
  
  100%{
    color:#AC92EC;
  }
}


.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(https://i.postimg.cc/CMW2j6Qg/Novak-Djokovic-2000-a21f060c8fcc4195b3c6e47e34b4abe7.jpg);
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
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

@media (max-width: 768px) {
  .over{
    height: 200px;
    width: 200px;
    margin: 0;
  }
  .Novack,
.Serena {
  display:flex;
  flex-direction: column;
}
.desc-button{
  margin: 0;
}
h1{
  font-size: 10px;
}
.heading{
  font-size: 30px;
}
.hero-content h1{
  font-size: 30px;
}

}
</style>
