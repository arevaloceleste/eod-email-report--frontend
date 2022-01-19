<template>
  <div>
    <NavbarLead />
    <TitleLead />
    <div class="projects">
      <div class="row">
        <div class="container">
          <ul class="accordion" id="accordion-project">
            <Accordion
              v-for="project of projects"
              :key="project.id"
              :project="project"
              @fillModal="fillModal"
            />
            <nuxt />
          </ul>
        </div>
      </div>
    </div>
    <modal-submit-lead :currentProject="currentProject" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentProject: {},
    };
  },
  methods: {
    fillModal(projectID) {
      this.currentProject = this.projects.find((project) => project.objectID == projectID);
    }
  },
  async asyncData({ $dataProjects, $dataUsers, $dataStatus, $dataReports, error }) {
    const responseProjectsLead = await $dataProjects.getProjectsByLeadId(5);
    console.log(responseProjectsLead.json.hits)
    if (!responseProjectsLead.ok) {
      return error({
        statusCode: responseProjectsLead.status,
        message: responseProjectsLead.statusText,
      });
    }

    const responseReport = await $dataReports.getReportsByProjectIDandDate(9, "2021-12-21");
    if (!responseReport.ok) {
      return error({
        statusCode: responseReport.status,
        message: responseReport.statusText,
      });
    }


    const projects = responseProjectsLead.json.hits;
    for (const project of projects) {
      const projectUsers = await $dataUsers.getUsersByProjectID(
        project.objectID
      );
      project.devs = projectUsers.json.hits;

      const statusProjects = await $dataStatus.getStatusByProjectIDandDate(
        project.objectID,
        new Date().toISOString().slice(0, 10)
      );
      project.status = statusProjects.json.hits;
    }

    return {
      projects,
    };
  },
};
</script>
