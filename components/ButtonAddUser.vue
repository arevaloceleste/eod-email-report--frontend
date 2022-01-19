<template>
  <div>
    <div class="col d-md-flex justify-content-md-end">
      <button type="button" class="btn btn-primary add-user-button"
      @click="$emit('newUser')">
      ADD USER
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
