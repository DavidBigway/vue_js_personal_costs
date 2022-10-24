<template>
  <div id="app">
    <CostList :costItemCollection="CostItemCollection" />
  </div>
</template>

<script>
import data from './assets/costListData.json'
import { CostList } from './components'

export default {
  name: 'App',
  data() {
    return {
      CostItemCollection: [],
    }
  },
  methods: {
    show(condition) {
      condition = !condition
    },
  },
  components: {
    CostList,
  },
  created() {
    data.forEach((item, index) => {
      this.CostItemCollection.push({ num: index + 1, ...item })
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
