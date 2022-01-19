
<template>
  <div>
    <div class="row align-items-center">
      <div class="col-5 title-dashboard">
        <h1>Projects</h1>
      </div>
      <div class="col-6">
        <ButtonTitleRow>ADD PROJECT</ButtonTitleRow>
        <ModalAddProject @add-project="reloadProjects" :users="users" @dev-selected="devSelected" />
      </div>
    </div>
    <UlProjects :projects="projects" :users="users" />

    <nuxt />
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "lead",
  data() {
    return {
      devsTeam: {},
    };
  },
  created() {
  },
  async asyncData({ $dataUsers, $dataProjects, error }) {
    const responseProjects = await $dataProjects.getProjects();
    const responseUsers = await $dataUsers.getUsers();
    if (!responseProjects.ok) {
      return error({
        statusCode: responseProjects.status,
        message: responseProjects.statusText,
      });
    }
    if (!responseUsers.ok) {
      return error({
        statusCode: responseUsers.status,
        message: responseUsers.statusText,
      });
    }

    const projects = responseProjects.json.hits;
    const users = responseUsers.json.hits
    
    for (const project of projects) {
      const projectUsers = await $dataUsers.getUsersByProjectID(
        project.objectID
      );
      project.devs = projectUsers.json.hits;

      const leadUser = await $dataUsers.getUser(
        project.lead_id
      );
      project.lead = leadUser.json;
    }
    
    return {
      projects,
      users,
    };

  },
  methods: {
    reloadProjects: async function(){
      await this.$nuxt.refresh()
    },

    devSelected(newDev) {
      let devsTeam = []
      devsTeam.push(newDev);
          console.log(devsTeam);
      // this.submitDeveloper(newDev);
    },
        submitDeveloper: function (dev) {
      axios.put("https://jsonplaceholder.typicode.com/posts/1", dev).then(
        (response) => {
        },
        (response) => {
          console.log("error :>> ", response);
        }
      );
    },
  },
};
</script>

 
