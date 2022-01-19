<template>
  <div>
    <li class="user-li">
      <div class="row user">
        <input type="hidden" id="userId" name="id" value="${userId}" />
        <div class="col-sm-2">
          <p>{{ user.name }}</p>
        </div>
        <div class="col-sm-3">
          <p>{{ user.email }}</p>
        </div>
        <div class="col-sm-1">
          <p>{{ user.rol }}</p>
        </div>
        <div class="col-sm-2">
          <span v-if="user.lead" class="badge rounded-pill bg team-lead-badge"
            >TEAM LEAD</span
          >
          <span v-else class="badge rounded-pill bg team-lead-badge not-lead"
            >TEAM LEAD</span
          >
        </div>
        <div class="col-sm-3">
          <p
            class="d-inline"
            v-for="(project, index) in user.projectsList"
            :key="project.objectID"
          >
            {{ project.name }}
            <span v-if="index != user.projects.length - 1">, </span>
          </p>
        </div>
        <div class="col-sm-1">
          <button
            type="button"
            class="btn btn-outline-light view-edit-button"
            data-bs-toggle="modal"
            data-bs-target="#userModal"
            
          >
            EDIT USER
          </button>
        </div>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  props: {
    user: {},
  },
  
};
</script>
<style scoped>
.user-li {
  padding-bottom: 0.2rem;
}
.view-edit-button {
  padding: 0px;
}
</style>
