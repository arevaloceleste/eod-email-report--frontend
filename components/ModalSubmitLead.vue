<template>
  <div>
    <div
      class="modal fade"
      id="reportModal"
      tabindex="-1"
      aria-labelledby="reportModal-label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <div class="row">
                <div class="col-11">
                  <h5>Report for {{ projectName }}</h5>
                </div>
                <div class="col-1">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <p>Recipients</p>
                </div>
                <div class="col-7">
                  <p>{{ projectEmails }}</p>
                </div>
                <div class="col-3">
                  <button
                    type="button"
                    class="btn btn-outline-light add-recipient-button"
                  >
                    + ADD RECIPIENT
                  </button>
                </div>
              </div>
            </div>
            <div class="modal-body" contenteditable>
              <textarea v-model="projectReport"> </textarea>
            </div>
            <div class="modal-footer">
              <button type="button" id="sendReport" class="btn btn-primary" @click="submitReport">
                Send Report
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projectReport: {

      },
    };
  },
  props: {
    currentProject: {
      type: Object,
      required: true,
    },
  },
  watch: {
    currentProject: function (newVal, oldVal) {
      this.projectReport = this.getProjectReport();
    },
  },

  computed: {
    projectName: function () {
      return this.currentProject.hasOwnProperty("name")
        ? this.currentProject.name
        : "";
    },

    projectEmails: function () {
      // console.log("projectEmails", this.currentProject);
      return this.currentProject.hasOwnProperty("email")
        ? this.currentProject.email.join(" ")
        : "";
    },
  },

  methods: {
    getStatusByUserId: function (userId) {
      const status = this.currentProject?.status?.find(
        (status) => status.user_id == userId
      );
      return status ? status.status : "";
    },

    getProjectReport: function () {
      let report = "Dear client, here it is today's report:";
      this.currentProject?.devs.forEach((dev) => {
        let status = this.getStatusByUserId(dev.objectID);
        report += `\n${dev.name}: ${status}`;
      });
      return report;
    },

    submitReport: async function () {
      const responseSubmitReport = await this.$dataReports.saveReport(this.getReportSubmit());
      console.log(responseSubmitReport)
    },
    getReportSubmit: function(){
      const submit = Object.assign({}, this.projectObject);
      return submit
    }
  },
};
</script>
<style>
.modal-body {
  background-color: #f5f5f5;
  margin-left: 1rem;
  margin-right: 1rem;
}
.modal-content {
  height: auto;
  width: 600px;
}
.modal-footer {
  border-top: 0rem;
  padding-bottom: 5%;
}
.modal-footer button {
  border-radius: 25px;
}
.modal-header {
  border-bottom: 0rem;
  display: block;
  padding-bottom: 0%;
  padding-top: 5%;
}
.modal-inner-body {
  margin: 5%;
}
.modal-inner-body label {
  margin-bottom: 1rem;
  padding-left: 0%;
  padding-right: 0%;
}
.modal-text-editor {
  box-sizing: border-box;
}
</style>