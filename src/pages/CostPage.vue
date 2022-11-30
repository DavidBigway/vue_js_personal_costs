<template>
  <div>
    <h1>cost page</h1>
    <CostList />
    <div v-for="paymentLink in categories">
      <AddPositionBTNComponent :data-name="paymentLink.value" />
    </div>
  </div>
</template>

<script>
import { CostList } from '@/components'
import { AddPositionBTNComponent } from '@/components/AddPositionBTN'

export default {
  name: 'CostPage',
  components: { CostList, AddPositionBTNComponent },
  data() {
    return {
      categories: this.$store.state.popupState.categories,
    }
  },
  mounted() {
    console.log(this.$store.state.popupState.categories)
  },
}
</script>

<style lang="scss"></style>
