<template>
  <div class="top-section">
    <div class="picture"></div>
    <div class="column">
      <h1>{{ $t("projects." + id + ".name") }}</h1>
      <div class="column">
        <h4>{{ $t("projects." + id + ".small_desc") }}</h4>
        <h4>{{ $t("projects." + id + ".authors") }}</h4>
        <h4>{{ $t("projects." + id + ".additionnal") }}</h4>
      </div>
    </div>
  </div>
  <div class="project page wrapper">
    <rave-runner-component v-if="id === 'rave-runner'"></rave-runner-component>
    <portals-component v-if="id === 'portals'"></portals-component>
  </div>
</template>
<script>
import RaveRunnerCmponent from "@/components/projects/RaveRunnerComponent.vue";
import PortalsComponent from "@/components/projects/PortalsComponent.vue";
export default {
  name: "SingleProject",
  components: {
    "rave-runner-component": RaveRunnerCmponent,
    "portals-component": PortalsComponent,
  },
  props: ["id"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.top-section {
  padding-top: var(--page-pad-t);
  position: relative;
  height: 100vh;
}
.top-section .column {
  gap: 20px;
  margin: auto;
  width: fit-content;
  align-items: center;
}
.top-section .picture {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
}
</style>
