<template>
  <div class="project page wrapper">
    <div>{{ $t("projects." + id + ".name") }}</div>
    <p>{{ $t("projects." + id + ".small_desc") }}</p>
    <p>{{ $t("projects." + id + ".authors") }}</p>
    <p>{{ $t("projects." + id + ".additionnal") }}</p>
    <rave-runner-component v-if="id === 'that-project'"></rave-runner-component>
  </div>
</template>
<script>
import RaveRunnerCmponent from "@/components/projects/RaveRunnerComponent.vue";
export default {
  name: "SingleProject",
  components: {
    "rave-runner-component": RaveRunnerCmponent,
  },
  props: ["id"],
  data() {
    return {};
  },
};
</script>
<style scoped></style>
