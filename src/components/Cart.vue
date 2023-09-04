<template>
  <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalLabel">Shopping Cart</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="cart-items">
            <div v-for="item in cartItems" :key="item.id">
              <div>{{ item.name }}</div>
              <div>Quantity: {{ item.quantity }}</div>
              <div>Price: {{ item.price }}</div>
              <button @click="removeItem(item)">Remove</button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
  showCartModal() {
    $('#cartModal').modal('show'); // Show the modal
  },
  closeCartModal() {
    $('#cartModal').modal('hide'); // Hide the modal
  },
  // ...
}
}
</script>
