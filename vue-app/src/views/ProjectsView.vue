<template>
  <div class="projects">
    <div v-for="project in projects" :key="project + '_link'">
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
      projects: ["that-project", "this-project"],
    };
  },
  methods: {
    navigateToProject(project) {
      this.$router.push("project/" + project);
    },
  },
};
</script>
