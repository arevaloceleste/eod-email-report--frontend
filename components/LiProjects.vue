<template>
  <div>
    <li class="project-li">
      <div class="row">
        <div class="col-sm-2 col-lg-2">
          <p>{{ project.name }}</p>
        </div>
        <div class="col-sm-2 col-lg-2">
          <p>{{ project.client }}</p>
        </div>
        <div class="col-sm-2 col-lg-2">
          <p>{{ project.owner }}</p>
        </div>
        <div  class="col-sm-2 col-lg-2">
          <p v-for="email of project.email" :key="email">{{ email }}</p>
        </div>
        <div class="col-sm-2 col-lg-2">
          <p>{{ project.lead.name }}</p>
        </div>
        <div class="col text-end">
          <nuxt-link :to="'/projects/' + project.objectID"><button type="button" class="btn btn-outline-light view-edit-button">
            VIEW/EDIT PROJECT
          </button></nuxt-link>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  created() {},
  props: {
    project: {
      type: Object,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    }
  },
};
</script>
<style scoped>
.project-li {
  padding-bottom: 0.2rem;
}
</style>
