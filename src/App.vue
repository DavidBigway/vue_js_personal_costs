<template>
  <div id="app">
    <CostList />
  </div>
</template>

<script>
import data from './assets/costListData.json'
import { CostList } from './components'

export default {
  name: 'App',
  methods: {
    show(condition) {
      condition = !condition
    },
  },
  components: {
    CostList,
  },
  created() {
    data[0].data.forEach((item, index) => {
      this.$store.commit('loadCollection', { num: index + 1, ...item })
    })
    data[0].categories.forEach((item, index) => {
      this.$store.commit('loadCategories', { num: index + 1, ...item })
    })
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
