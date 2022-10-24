<template>
  <div class="cost-list">
    <button type="button" class="btn btn-success" v-on:click="show">
      ADD NEW COST <span>+</span>
    </button>
    <ItemAddingPopup
      v-show="popupState"
      :costItemCollection="$props.costItemCollection"
    />
    <table class="cost-table table">
      <thead>
        <tr>
          <td>#</td>
          <td>Date</td>
          <td>Category</td>
          <td>Value</td>
        </tr>
      </thead>
      <tbody v-for="item of posts">
        <tr>
          <td>{{ item.num }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>

    <nav aria-label="...">
      <ul class="pagination">
        <li :class="{ 'page-item': true, disabled: page <= 1 }">
          <span class="page-link" v-on:click="setPage(page - 1)">&laquo;</span>
        </li>
        <div class="pagination-numbers">
          <li
            :class="{ 'page-item': true, active: num == page }"
            v-for="num in pages"
            :aria-current="num == page ? 'page' : ''"
          >
            <span class="page-link" v-on:click="setPage(num)">{{ num }}</span>
          </li>
        </div>
        <li :class="{ 'page-item': true, disabled: page >= pages }">
          <span class="page-link" v-on:click="setPage(page + 1)">&raquo;</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ItemAddingPopup } from '../Popup/'

export default {
  props: ['costItemCollection'],
  name: 'CostListComponent',
  comments: {
    ItemAddingPopup,
  },
  data() {
    return {
      pages: 1,
      popupState: false,
      page: 1,
      perPage: 5,
      posts: [],
    }
  },
  methods: {
    show() {
      this.popupState = !this.popupState
    },
    paginate(posts) {
      let page = this.page
      let perPage = this.perPage
      let from = page * perPage - perPage
      let to = page * perPage
      return posts.slice(from, to)
    },
    setPosts() {
      this.posts = this.paginate(this.$props.costItemCollection)
    },
    setPages() {
      this.pages = Math.ceil(this.$props.costItemCollection.length / 5)
    },
    setPage(num) {
      if (num >= 1 && num <= this.pages) {
        this.page = num
        this.setPosts()
      }
    },
    init() {
      this.setPages()
      this.setPosts()
    },
  },
  created() {
    this.init()
  },
  beforeUpdate() {
    this.init()
  },
  components: { ItemAddingPopup },
}
</script>
<style lang="scss">
.cost-list {
  display: flex;
  flex-direction: column;
  max-width: 600px;
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
.cost-table {
  height: 250px;
  thead {
    font-weight: 700;
  }
}
.pagination {
  &-numbers {
    display: flex;
  }
  li {
    span {
      cursor: pointer;
    }
  }
}
</style>
