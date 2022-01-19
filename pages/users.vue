<template>
  <div>
    <div class="row align-items-center">
      <div class="col-5 title-dashboard">
        <h1>Users</h1>
      </div>
      <div class="col-6">
        <ButtonAddUser @newUser="newUser"></ButtonAddUser>
      </div>
    </div>
    <UlUsers :users="users" />
    <nuxt />
  </div>
</template>
<script>
export default {
  layout: "lead",
  data() {
    return {
      userObject: {
        name: "Antonio Faria",
        id: 9,
        projects: [8, 9, 10],
        email: "marley@gmail.com",
        rol: "developer",
      },
    };
  },
  async asyncData({ $dataUsers, $dataProjects, error }) {
    const responseUsers = await $dataUsers.getUsers();
    if (!responseUsers.ok) {
      return error({
        statusCode: responseUsers.status,
        message: responseUsers.statusText,
      });
    }
    const responseProjects = await $dataProjects.getProjects();
    if (!responseProjects.ok) {
      return error({
        statusCode: responseProjects.status,
        message: responseProjects.statusText,
      });
    }
    let processedUsers = [];
    let processedProjects = responseProjects.json.hits;
    responseUsers.json.hits.forEach((user) => {
      user.projectsList = processedProjects.filter((project) =>
        user.projects.includes(parseInt(project.objectID))
      );
      processedUsers.push(user);
    });
    return {
      users: processedUsers,
    };
  },
  created() {
    console.log(this.userObject);
  },
  methods: {
    newUser: function () {
      console.log(this.userObject)
      this.$dataUsers.addUser(this.userObject);
    },
  },
};
</script>
