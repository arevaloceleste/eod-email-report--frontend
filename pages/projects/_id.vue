<template>
  <div>
    <NavbarLead />
    <div class="row">
      <div class="col-6 title-dashboard">
        <h2><span class="gray-title">Project/</span>{{ project.name }}</h2>
      </div>
      <div class="col-5 d-md-flex justify-content-md-end">
        <div class="align-self-center">
          <ButtonEditProject />
          <ModalEditProject :project="project" :users="users" />
        </div>
      </div>
    </div>
    <div class="projects">
      <div class="row">
        <div class="container">
          <ul>
            <li class="project-li">
              <div class="row">
                <div class="col-sm-3 col-lg-3">
                  <h5>Project</h5>
                </div>
                <div class="col-sm-2 col-lg-2 project-name">
                  {{ project.name }}
                </div>
              </div>
            </li>
            <li class="project-li">
              <div class="row">
                <div class="col-sm-3 col-lg-3">
                  <h5>Client</h5>
                </div>
                <div class="col-sm-2 col-lg-2 project-client">
                  {{ project.client }}
                </div>
              </div>
            </li>
            <li class="project-li">
              <div class="row">
                <div class="col-sm-3 col-lg-3">
                  <h5>Owner</h5>
                </div>
                <div class="col-sm-2 col-lg-2 project-owner">
                  {{ project.owner }}
                </div>
              </div>
            </li>
            <li class="project-li">
              <div class="row">
                <div class="col-sm-3 col-lg-3">
                  <h5>email</h5>
                </div>
                <div class="col-4">
                  <form id="add-mail">
                    <ul class="add-contact-team-member contact-email">
                      <button
                        type="button"
                        v-on:click="addMail = !addMail"
                        class="btn add-email-button"
                      >
                        +ADD CONTACT EMAIL
                      </button>
                      <input
                        type="email"
                        v-model="contact"
                        v-show="addMail"
                        @keypress.enter="addContactMail"
                      />
                      <li
                        v-for="email of project.email"
                        :key="email"
                        :email="email"
                      >
                        {{ email }}
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </li>
            <li class="project-li">
              <div class="row">
                <div class="col-sm-3 col-lg-3">
                  <h5>Team Lead</h5>
                </div>
                <div class="col-sm-2 col-lg-2 project-team-lead">
                  {{ project.lead.name }}
                </div>
              </div>
            </li>
            <li class="project-li">
              <div class="row">
                <div class="col-sm-3 col-lg-3">
                  <h5>Team</h5>
                </div>
                <div class="col-9">
                  <form id="add-TeamMember">
                    <button
                      type="button"
                      v-on:click="addMember = !addMember"
                      class="btn add-email-button"
                    >
                      +ADD TEAM MEMBER
                    </button>
                    <SearchAutocomplete
                      :items="project.devs"
                      v-show="addMember"
                    />
                  </form>
                  <table class="add-contact-team-member team-member">
                    <tr class="project-team-headers">
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                    <tr v-for="dev in project.devs" :key="dev.objectID">
                      <td>{{ dev.name }}</td>
                      <td>{{ dev.email }}</td>
                      <td>{{ dev.rol }}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      project: {},
      addMail: false,
      addMember: false,
      contactMails: [],
      teamMember: "",
    };
  },
  async asyncData({ $dataProjects, $dataUsers, error, route }) {
    const { id } = route.params;

    const responseGetProject = await $dataProjects.getProject(id);
    if (!responseGetProject.ok) {
      return error({
        statusCode: responseGetProject.status,
        message: responseGetProject.statusText,
      });
    }
    const project = responseGetProject.json;

    const projectUsers = await $dataUsers.getUsersByProjectID(project.objectID);
    if (!projectUsers.ok) {
      return error({
        statusCode: projectUsers.status,
        message: projectUsers.statusText,
      });
    }

    const leadUser = await $dataUsers.getUser(project.lead_id);
    if (!leadUser.ok) {
      return error({
        statusCode: leadUser.status,
        message: leadUser.statusText,
      });
    }

    const responseUsers = await $dataUsers.getUsers();
    if (!responseUsers.ok) {
    return error({
      statusCode: responseUsers.status,
      message: responseUsers.statusText,
    });

    }
    const users = responseUsers.json.hits
    project.devs = projectUsers.json.hits;
    project.lead = leadUser.json;


    return {
      project,
      users,
    };
  },
  created() {
    // // emited params
    // let objectID = this.$route.params.id;
    // //find project with param id
    // this.projects.forEach((element) => {
    //   if (element.objectID == objectID) {
    //     this.project = element;
    //     // this.devsTeam = this.project.devs;
    //   }
    // });
    //add project contact mail in to empty array
    // this.contactMails.push(this.project.contactEmail);
  },
  methods: {
    //add new contact mail in to contacts array and call submit function
    addContactMail: function () {

      console.log('CONTACTO DATA: ', this.contact)


      this.$dataProjects.addContactToProject(
        this.project.objectID,
        this.contact
      );
    },

    //add new team member in to the devs array
    // addTeamMember: function (e) {
    //   this.devsTeam.push(this.teamMember);
    // },

    // devSelected(newDev) {
    //   this.devsTeam.push(newDev);
    //   this.addMember = false;
    //   this.submitDeveloper(newDev);
    // },

    // submit: function (contact) {
    //   axios.put("https://jsonplaceholder.typicode.com/posts/1", contact).then(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (response) => {
    //       console.log("error :>> ", response);
    //     }
    //   );
    // },

    // submitDeveloper: function (dev) {
    //   axios.put("https://jsonplaceholder.typicode.com/posts/1", dev).then(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (response) => {
    //       console.log("error :>> ", response);
    //     }
    //   );
    // },
  },
};
</script>
<style scoped>
.gray-title {
  color: gray;
}
.projects {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-left: 3%;
  margin-right: 3%;
}
.container {
  padding-left: 0%;
  padding-right: 0%;
}
.project-li {
  border-bottom: 1px solid #e4e1e1;
  padding-top: 1rem;
}
.add-email-button {
  border: none;
  box-shadow: none;
  color: #5893ce;
  font-size: 15px;
  padding-left: 0px;
  padding-top: 0%;
}
.add-contact-team-member {
  box-shadow: none;
  padding-left: 0%;
  width: 100%;
}
.teamMember > td {
  padding-top: 10px;
  padding-bottom: 10px;
}
.project-team-headers > th {
  padding-left: 0px;
  width: 33%;
}
.teamMember > td {
  padding-top: 10px;
  padding-bottom: 10px;
}
ul {
  list-style: none;
  padding-left: 1rem;
  padding-right: 1rem;
}
.add-project-button {
  background-color: #5893ce;
  border: none;
  border-radius: 25px;
  color: white;
}
</style>