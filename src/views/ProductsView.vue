<template>
  <div>
    <div v-if="products" class="row p-4 justify-content-evenly">
      <ProdComp :products="products" />
    </div>
    <div v-else>Processing...</div>
  </div>
</template>

<script>
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
  components: { ProdComp },
};
</script>

<style></style>
