<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <div class="card">
      <div class="card-header">List Fruits</div>
      <div class="card-body">
        <div class="align-left">
          <button
            type="button"
            class="btn btn-success"
            data-toggle="modal"
            data-target="#exampleModal">Add new fruits</button>
        </div>
        <div class="alert alert-danger" v-if="fruits.length == 0">Data is empty</div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(items, index) in fruits" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ items.name }}</td>
              <td>
                <button class="btn btn-danger" @click="removeFruits(index)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Form add new fruits</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addFruits">
                <div class="form-group">
                    <label>Fruits name</label>
                    <input class="form-control link-input" type="text" placeholder="Add a fruit" v-model="newFruitsItems" />
                </div>
                <div class="align-left form-group">
                    <button type="button" class="btn btn-success" data-dismiss="modal" v-on:click="addFruits">Submit</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "State",
  data() {
    return {
      newFruitsItems: ""
    };
  },
  computed: {
    ...mapState(["title", "fruits"])
  },
  methods: {
    ...mapMutations(["ADD_FRUITS", "REMOVED_FRUITS"]),
    addFruits: function() {
      const arr = { name: this.newFruitsItems }
      this.ADD_FRUITS(arr);
      this.newFruitsItems = ''
    },
    removeFruits: function(index) {
        this.REMOVED_FRUITS(index)
    }
  }
};
</script>

<style scoped>
.align-left {
  text-align: left;
}
</style>