<template>
  <div>
    <div class="projects">
      <div class="row">
        <div class="container">
          <ul>
            <li class="project-li">
              <div class="row">
                <div class="col-sm-2 col-lg-2">
                  <h5>Project</h5>
                </div>
                <div class="col-sm-2 col-lg-2">
                  <h5>Client</h5>
                </div>
                <div class="col-sm-2 col-lg-2">
                  <h5>Owner</h5>
                </div>
                <div class="col-sm-2 col-lg-2">
                  <h5>Contact Email</h5>
                </div>
                <div class="col-sm-2 col-lg-2">
                  <h5>Team Lead</h5>
                </div>
              </div>
            </li>
            <div>
              <LiProjects
                v-for="project of projects"
                :key="project.objectID"
                :project="project"
                :users="users"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    }
  },
  created (){
  }
};
</script>
<style scoped>
.container {
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 100%;
}
</style>
