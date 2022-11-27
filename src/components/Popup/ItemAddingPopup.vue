<template>
  <div>
    <div class="popup">
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
        <button
          class="btn btn-success"
          v-on:click="addCostItem(date, category, value)"
        >
          ADD <span>+</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import CostItem from '../CostItem'

export default {
  name: 'ItemAddingPopup',
  data() {
    return {
      date: '',
      category: '',
      value: 0,
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
      this.$parent.show()
    },
  },
}
</script>

<style lang="scss">
.popup {
  display: flex;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
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
}
</style>
