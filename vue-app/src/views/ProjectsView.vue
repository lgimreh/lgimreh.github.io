<template>
  <div class="projects page wrapper">
    <div
      class="item interact"
      v-for="project in projects"
      :key="project + '_link'"
    >
      <div @click="navigateToProject(project)">
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
      projects: ["rave-runner", "portals"],
    };
  },
  methods: {
    navigateToProject(project) {
      this.$router.push("project/" + project);
    },
  },
};
</script>
<style scoped></style>
