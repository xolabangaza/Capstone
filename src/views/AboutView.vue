<template>
  <div class="about-page">
    <div class="container">
      <h1 class="text-center fs-1">About Us</h1>
      <p class="text-center">Welcome to SportWearFlex, your one-stop shop for high-quality tennis clothes!<br>  We passionate about providing tennis enthusiasts<br>  with comfortable and stylish apparel to elevate their game.
      At SportWearFlex,<br>  we understand that clothing plays a crucial role in enhancing your performance <br> on the court. That's why we curate a diverse collection of tennis clothes that blend <br> functionality, comfort, and style.
      Whether you're a professional player or a casual <br> tennis enthusiast, our range of products includes everything you need: from breathable <br> shirts and skirts to supportive sneakers and accessories.
      Our mission is to help you feel<br>  confident and perform your best on the court. We believe that the right attire can make<br>  a significant difference in your game, and that's what drives us to bring you the best tennis <br> clothing options.
      Thank you for choosing SportWearFlex for your tennis apparel needs.<br>  Feel free to explore our collection and elevate your tennis experience with the perfect clothing!<br> 
      Contact us at <a href="mailto:info@sportwearflex.com">info@sportwearflex.com</a> for any inquiries or assistance.</p>

      <div class="founder-section">
        <h2 class="text-center">Meet the Founder</h2>
        <div class="founder-info">
          <div class="founder-image">
            <img src="https://i.postimg.cc/QMqRf29H/IMG-20230428-WA0009.jpg" alt="Founder - Xola Bangaza" />
          </div>
          <div class="founder-text">
            <p>Hello, I'm Xola Bangaza, the founder of SportWearFlex. <br>With a deep passion for tennis and a love for fashion,<br> I started this journey to provide tennis players with <br>top-notch clothing that combines performance and style. <br>My goal is to help you shine on and off the court!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
};
</script>

<style scoped>
.container{
    color: rgba(216, 45, 209, 1);
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
}

.founder-section {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
  color: rgba(216, 45, 209, 1);
}

.founder-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
}

.founder-image {
  max-width: 400px;
  text-align: center;
  margin-bottom: 20px;
}

.founder-image img {
  max-width: 80%;
  border-radius: 30%;
}

.founder-text {
  flex: 2;
  text-align: left;
  margin-bottom: 80px;
  
}

.founder-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0;
  color: rgba(216, 45, 209, 1);
}
@media (max-width: 768px) {
  .founder-info{
    flex-direction: column !important ;
  }
}

</style>
