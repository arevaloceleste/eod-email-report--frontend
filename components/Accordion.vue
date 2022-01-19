<template>
  <div>
    <div class="accordion" role="tablist">
      <div no-body class="mb-1">
        <div class="p-1 accordion-button" role="tab">
          <div
            class="accordion-button"
            type="button"
            block
            v-b-toggle="'collapse-' + project.objectID"
          >
            <div class="col-sm-3 col-lg-5 padding-toggle">
              <h4>{{ project.name }}</h4>
            </div>
            <div class="col-sm-2 col-lg-3 padding-toggle">
              <span
                v-if="project.mailSent"
                class="green badge rounded-pill justify-content-center"
              >
                <i class="bi bi-check2"></i>
                Report Sent</span
              >
              <span
                v-else
                class="red badge rounded-pill justify-content-center"
              >
                <i class="bi bi-exclamation-triangle"></i>
                Report Due
              </span>
            </div>
            <div class="col text-end">
              <button
                type="button"
                class="btn btn-outline-light"
                data-bs-toggle="modal"
                data-bs-target="#reportModal"
                @click="$emit('fillModal', project.objectID)"
              >
                SUBMIT REPORT
              </button>
            </div>
            <div class="col text-center">
              <nuxt-link :to="'/projects/' + project.objectID"
                ><button
                  type="button"
                  class="btn btn-outline-light view-edit-button"
                >
                  VIEW/EDIT PROJECT
                </button></nuxt-link
              >
            </div>
            <div
              class="col edit-button accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse-' + project.objectID"
              aria-expanded="false"
              :aria-controls="'#collapse-' + project.objectID"
            >
              <span class="material-icons">expand_less</span>
            </div>
          </div>
        </div>
        <b-collapse
          :id="'collapse-' + project.objectID"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body class="accordion-body">
            <table class="details">
              <tr>
                <th class="name">Name</th>
                <th class="status">Status</th>
                <th class="report">Report</th>
              </tr>
              <tr v-for="dev of project.devs" :key="dev.objectID">
                <td>{{ dev.name }}</td>
                <td>
                  <span
                    v-if="getStatusByUserId(dev.objectID)"
                    class="green badge rounded-pill justify-content-center"
                  >
                    <i class="bi bi-check2"></i>
                    Report Sent</span
                  >
                  <span
                    v-else
                    class="red badge rounded-pill justify-content-center"
                  >
                    <i class="bi bi-exclamation-triangle"></i>
                    Report Due
                  </span>
                </td>
                <td>
                  {{ getStatusByUserId(dev.objectID) }}
                </td>
              </tr>
            </table>
          </b-card-body>
        </b-collapse>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  created() {},
  methods: {
    getStatusByUserId: function (userId) {
      const status = this.project.status.find(
        (status) => status.user_id == userId
      );
      return status ? status.status : "";
    },
  },
};
</script>
<style scoped>
</style>
