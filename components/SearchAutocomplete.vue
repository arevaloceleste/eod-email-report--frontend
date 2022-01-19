<template>
  <div class="autocomplete">
    <input v-model="search" @input="onChange" type="text" />
    <ul v-show="isOpen" class="autocomplete-results">
      <li
        v-for="dev of items"
        :key="dev.objectID"
        @click="
          clearInput();
          $emit('developer-selected', result);
        "
        class="autocomplete-result"
      >
        {{ dev.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    result: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      search: "",
      results: [],
      isOpen: false,
    };
  },
  methods: {
    filterResults() {
      this.results = this.items.filter(
        (item) =>
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
    onChange() {
      this.filterResults();
      this.isOpen = true;
    },
    clearInput() {
      this.isOpen = false;
      this.search = "";
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>
<style>
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  min-height: 1em;
  max-height: 6em;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
