<template>
  <div>
    <navbar-dev />
    <TitleDev />
    <UlDev v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>
<script>
export default {
  async asyncData({ $dataProjects, $dataStatus, error }) {
    const responseUserProjects = await $dataProjects.getProjectsByUserId(7);
    if (!responseUserProjects.ok) {
      return error({
        statusCode: responseUserProjects.status,
        message: responseUserProjects.statusText,
      });
    }

    const responseStatus = await $dataStatus.getAllStatusByUserIdandDate(
      7,
      new Date().toISOString().slice(0, 10)
    );
    if (!responseStatus.ok) {
      return error({
        statusCode: responseStatus.status,
        message: responseStatus.statusText,
      });
    }

    let processedProjects = [];
    let userProjects = responseUserProjects.json.hits;
    let userStatus = responseStatus.json.hits;

    userProjects.forEach((project) => {
      project.projectStatus = userStatus.find(
        (status) => project.objectID == status.project_id
      );
      processedProjects.push(project);
    });
    return {
      projects: processedProjects,
    };
  },
};
</script>
