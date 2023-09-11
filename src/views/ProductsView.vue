<template>
<Spinner/>
  <div>
    <div v-if="products" class="row">
      <ProdComp :products="products" />
    </div>
    
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue"
import ProdComp from "@/components/ProdComp.vue";

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts")
  },
  components: {Spinner ,ProdComp },
};
</script>

<style></style>
