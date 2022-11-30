<template>
  <div>
    <h1>Add Payment</h1>
    <form id="form-popup" v-on:submit="actionBlock">
      <div class="mb-3">
        <input
          class="form-control"
          type="date"
          placeholder="Payment date"
          v-model="date"
          required
        />
      </div>
      <select class="form-select mb-3" v-model="category" required>
        <option value="" disabled selected>Payment description</option>
        <option
          :value="category.value"
          v-for="category in $store.state.popupState.categories"
        >
          {{ category.title }}
        </option>
      </select>
      <div class="mb-3">
        <input
          class="form-control"
          type="number"
          placeholder="Payment amount"
          v-model="value"
          required
        />
      </div>
      <router-link to="/cost">
        <button
          class="btn btn-success"
          v-on:click="addCostItem(date, category, value)"
        >
          ADD <span>+</span>
        </button>
      </router-link>
    </form>
  </div>
</template>

<script>
import CostItem from '@/components/CostItem'

export default {
  name: 'AddPayment',
  data() {
    return {
      date: `${new Date().toISOString().split('T')[0]}`,
      category: this.$route.params.position,
      value: this.$route.query.value,
    }
  },
  methods: {
    addCostItem(date, category, value) {
      if (date != '' && category != '') {
        this.$store.state.CostItemCollection.push(
          new CostItem(
            this.$store.state.CostItemCollection.length + 1,
            date,
            category,
            value
          )
        )
      }
    },
    actionBlock(e) {
      e.preventDefault()
    },
  },
  mounted() {
    console.log(this.$route)
  },
}
</script>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 400px;
  padding: 25px;
  margin: auto;
  button {
    display: flex;
    width: fit-content;
    margin-bottom: 16px;
    align-self: flex-end;
    align-items: center;
    span {
      margin-left: 20px;
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>
