<template>
  <form v-on:submit="actionBlock">
    <label :for="$attrs['data-name']"> how much did you spend </label>
    <input :id="$attrs['data-name']" type="number" v-model="cost" />

    <button
      :class="`btn ${cost != 0 ? 'btn-success' : 'btn-secondary'}`"
      v-on:click="submitPosition($attrs['data-name'])"
      :disabled="cost != 0 ? false : true"
    >
      <router-link :to="`/add/payment/${$attrs['data-name']}?value=${cost}`">
        Add
        <span :data-position-name="$attrs['data-name']">{{
          $attrs['data-name']
        }}</span>
        <span :data-position-cost="cost"> {{ cost }}</span>
      </router-link>
    </button>
  </form>
</template>

<script>
export default {
  name: 'AddPositionBTN',
  data() {
    return {
      cost: 0,
    }
  },
  methods: {
    actionBlock(e) {
      e.preventDefault()
    },
    submitPosition(e) {
      console.log(this.cost, e)
    },
  },
}
</script>

<style lang="scss">
form {
  margin-bottom: 32px;
}
button {
  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>
