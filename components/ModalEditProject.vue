<template>
  <div>
    <div
      class="modal fade"
      id="editProjectModal"
      tabindex="-1"
      aria-labelledby="addProjectModal-label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="row">
              <div class="col-11">
                <h4>Edit Project</h4>
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
          </div>
          <div class="modal-inner-body">
            <form id="id_formfield">
              <div class="row">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Project Name</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="projectName"
                    value=""
                    placeholder="Enter Project name"
                    autocomplete="off"
                    v-model="project.name"
                  />
                  <div class="warningEmptyField">
                    <p>This field is required</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <label class="col-sm-2 col-form-label">Client</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="client"
                    placeholder="Enter client"
                    autocomplete="off"
                    v-model="project.client"
                  />
                  <div class="warningEmptyField">
                    <p>This field is required</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <label class="col-sm-2 col-form-label">Owner</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="owner"
                    value=""
                    placeholder="Enter Owner's name"
                    autocomplete="off"
                    v-model="project.owner"
                  />
                  <div class="warningEmptyField">
                    <p>This field is required</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <label class="col-sm-2 col-form-label">Contact Email</label>
                <div class="col-sm-10">
                  <div id="emailPill">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      value=""
                      placeholder="Enter Contact email"
                      v-model="project.email"
                    />
                  </div>
                  <div class="warningEmptyField" id="warning">
                    <p>This field is required</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <label class="col-sm-2 col-form-label">Lead</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="lead"
                    value=""
                    placeholder="Enter Lead"
                    autocomplete="off "
                    v-model="project.lead.name"
                  />
                  <div class="warningEmptyField">
                    <p>This field is required</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <label class="col-2 col-form-label">Team</label>
                <div class="col-10">
                  <div id="devsTeam" class="form-control">
                    <div v-for="dev of project.devs" :key="dev.objectID">
                      <p>{{ dev }}</p>
                    </div>

                    <SearchAutocomplete
                      :items="users"
                      @developer-selected="developerSelected"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <div id="succes-message">
              <p>Project Saved</p>
            </div>
            <button
              type="submit"
              id="create-project"
              class="btn send-report"
              @click="addProject"
            >
              CREATE PROJECT
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project:{},
    users:{}
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
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