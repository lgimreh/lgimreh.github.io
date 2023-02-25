<template>
  <div class="project">
    <h1>This is a project's page</h1>
    <h1>The project's id is: {{ id }}</h1>
    <div>{{ $t("projects." + id + ".name") }}</div>
    <p>{{ $t("projects." + id + ".description_1") }}</p>
    <p>{{ $t("projects." + id + ".description_2") }}</p>
    <that-projet-component v-if="id === 'that-project'"></that-projet-component>
  </div>
</template>
<script>
import ThatProjectComponent from "@/components/ThatProjectComponent.vue";
export default {
  name: "SingleProject",
  components: {
    "that-projet-component": ThatProjectComponent,
  },
  props: ["id"],
  data() {
    return {};
  },
};
</script>
