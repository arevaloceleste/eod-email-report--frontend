<template>
  <div>
    <div class="row users">
      <ul>
        <li class="user-li d-flex align-items-center">
          <div class="container ms-1">
            <div class="row">
              <div
                class="
                  col-12 col-lg-2
                  mb-2 mb-lg-auto
                  name-projects-dev
                  d-flex
                  flex-row
                  my-auto
                "
              >
                <h3 class="col-2 col-lg-1 my-auto">
                  {{ project.name }}
                </h3>
                <i
                  v-if="!project.projectStatus"
                  class="
                    col-10 col-lg-1
                    bi bi-exclamation-triangle-fill
                    icon-exclamation
                    d-flex
                    align-items-center
                  "
                ></i>
              </div>
              <div class="col-8 d-flex flex-row my-auto">
                <input
                  class="input-status d-flex align-items-center"
                  type="text"
                  placeholder="Enter your daily status"
                  v-model="projectStatus.status"
                />
              </div>
              <div class="col-4 col-lg-2 my-auto">
                <button
                  v-if="!project.projectStatus"
                  type="button"
                  class="my-auto btn btn-outline-primary btn-mail-send"
                  @click="submitStatus"
                >
                  SUBMIT DAILY STATUS
                </button>
                <button
                  v-else
                  type="button"
                  class="my-auto btn btn-outline-primary btn-mail-sent"
                  @click="submitStatus"
                >
                  EDIT DAILY STATUS
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: {},
  },
  data() {
    return {
      projectStatus: {},
    };
  },
  created() {
    this.projectStatus = this.project.projectStatus ?? {
      project_id: this.project.objectID,
      user_id: 7,
      date_sent: "",
      status: "",
    };
  },
  methods: {
    submitStatus: function () {
      this.projectStatus.date_sent = new Date().toISOString().slice(0, 10);
      this.$dataStatus.saveStatus(this.projectStatus);
    },
  },
};
</script>
<style>
.btn-mail-send {
  color: #69bd45;
}

.btn-mail-sent {
  color: #999999;
}

.btn-outline-primary {
  border-color: transparent;
  display: flex;
  font-family: "Titillium Web";
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  justify-content: flex-end;
  line-height: 22px;
  margin-left: auto;
  margin-right: auto;
  text-align: right;
  text-transform: uppercase;
  width: 100%;
}

.btn-outline-primary:hover {
  background-color: transparent;
  border-color: transparent;
  color: #5893ce;
}

.icon-exclamation {
  color: #f58295;
  margin-left: auto;
  margin-right: -5%;
}

.input-status {
  background: #f5f5f5;
  border-color: transparent;
  border-radius: 4px;
  margin-right: auto;
  width: 100%;
  height: 3rem;
}

ul {
  list-style: none;
  padding-right: 2rem;
}

.user p {
  color: #333333;
  font-size: 1rem;
}

.user-li {
  border-bottom: 2px solid #e4e1e1;
  padding-bottom: 1.2rem;
  padding-top: 1.2rem;
}

.users {
  background-color: white;
  margin-left: 3%;
  margin-right: 3%;
}

.view-edit-button {
  border: none;
  color: #333333;
  font-size: 13px;
}
</style>
