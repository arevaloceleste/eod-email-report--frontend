<template>
  <div>
    <div class="col d-md-flex justify-content-md-end">
      <button type="button" class="btn btn-primary add-user-button" data-bs-toggle="modal"
        data-bs-target="#editProjectModal">
      EDIT PROJECT
      </button>
    </div>
  </div>
</template>
<style scoped>
.add-user-button {
    background-color: #5893CE;
    border-color: #5893CE;
    border-radius: 25px;
}
</style>
// @click="$emit('newUser')"