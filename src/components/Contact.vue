<template>
  <div class="container">
    <h1 class="text-center">Drop Us A Line</h1>
    <p class="text-center">
      We would love to respond to your queries. Feel free to get in touch with
      us
    </p>
    <div class="contact-box">
      <div class="contact-left">
        <h3>Send your request</h3>
        <form action="https://formspree.io/f/xzblgzdp" method="POST">
          <div class="input-row">
            <div class="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="" />
            </div>
            <div class="input-group">
              <label>Email</label>
              <input type="email" placeholder="" />
            </div>
          </div>
          <div class="input-row">
            <div class="input-group">
              <label>Phone</label>
              <input type="text" placeholder="" />
            </div>

            <div class="input-group">
              <label>Subject</label>
              <input type="text" placeholder="" />
            </div>
          </div>
          <label> Message</label>
          <textarea rows="5" placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div class="contact-right">
        <h3>Reach Us</h3>
        <p>Phone: 021-321-3455</p>
        <p>Address: Anywhere in CapeTown</p>
        <p>Email: xolabangaza@gmail.com</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.container {
  width: 80%;
  margin: 50px auto;
}
.contact-box {
  background: #fff;
  display: flex;
  border: 2px solid;
  border-radius: 16px;
}
.contact-left {
  flex-basis: 60%;
  padding: 40px 60px;
}
.contact-right {
  flex-basis: 60%;
  padding: 40px 60px;
  background: rgb(206, 112, 204);
  color: #fff;
  border: 2px solid;
  border-radius: 16px;
}
button{
    width: 80px;
    border: 1px solid pink;
    border-radius: 6px;
    background: transparent;
}
button:hover{
    background: #c52e95;
}
h1 {
  margin-bottom: 10px;
  color: #c52e95;
}
h3 {
  margin-bottom: 20px;
}
.container p {
  margin-bottom: 40px;
  color: #c52e95;
  font-weight: 700;
}
.input-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.input-row .input-group {
  flex-basis: 45%;
}
.input-group {
  display: flex;
  flex-direction: column;
}
input {
  width: 100%;
  border: none;
  border-bottom: 2px solid pink;
  outline: none;
    
}
textarea {
  width: 100%;
  border: 2px solid pink;
  border-radius: 8px;
  outline: none;
  padding: 10px;
}
@media (max-width: 768px) {
.container {
width: 100%;
}
.contact-box {
display: block;
}
.contact-left {
flex-basis: 100%;
padding: 40px 20px;
}
.contact-right {
flex-basis: 100%;
padding: 40px 20px;
}
.input-row {
display: block;
}
.input-row .input-group {
flex-basis: 100%;
}
}
</style>
