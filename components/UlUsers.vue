<template>
  <div class="users">
    <div class="row">
      <div class="container align-middle">
        <ul id="users-list">
          <li class="user-li">
            <div class="row user-list-header">
              <div class="col-sm-2">
                <h5>Name</h5>
              </div>
              <div class="col-sm-3">
                <h5>Email</h5>
              </div>
              <div class="col-sm-3">
                <h5>Rol</h5>
              </div>
              <div class="col-sm-4">
                <h5>Projects</h5>
              </div>
            </div>
          </li>
          <LiUsers v-for="user in users" :key="user.objectID" :user="user" />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    users: {},
  },
};
</script>
<style scoped>
.container {
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 100%;
}
user-li {
  padding-bottom: 0%;
}
</style>
