<template>
  <div class="projects page wrapper">
    <div
      class="item interact"
      v-for="project in projects"
      :key="project + '_link'"
      @click="navigateToProject(project)"
    >
      <div class="picture"></div>
      <div>
        {{ $t("projects." + project + ".name") }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      projects: ["rave-runner", "portals", "deja-vu", "nouveau"],
    };
  },
  methods: {
    navigateToProject(project) {
      this.$router.push("project/" + project);
    },
  },
};
</script>
<style scoped>
.projects {
  width: 100%;
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;
}
.item {
  width: 100%;
  border: 1px solid var(--black);
}
.item .picture {
  width: 100%;
  padding-bottom: 120%;
}
</style>
