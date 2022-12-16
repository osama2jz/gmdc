<template>
  <div>
    <StripeElementCard />
    <button @click="submit">Pay now!</button>
  </div>
</template>

<script>
// import { StripeCheckout } from "@vue-stripe/vue-stripe";
import { StripeElementCard } from "@vue-stripe/vue-stripe";
export default {
  name: "payment_",
  components: {
    // StripeCheckout,
    StripeElementCard,
  },
  data() {
    this.publishableKey =
      "pk_test_51LZZvfE15s0GgNMhr1G5APbmPXyGbm10KdljXh7FWBA9QvUtisLvRVN6SAswoq2M1D6v5f0hTi484tqZDs50P8Rq00pU0tq3QQ";

    return {
      loading: false,
      lineItems: [
        {
          price: "some-price-id", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: "your-success-url",
      cancelURL: "your-cancel-url",
    };
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
