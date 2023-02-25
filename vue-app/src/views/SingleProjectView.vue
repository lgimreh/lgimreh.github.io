<template>
  <div class="project">
    <h1>This is a project's page</h1>
    <h1>The project's id is: {{ id }}</h1>
  </div>
</template>
<script>
export default {
  name: "SingleProject",
  props: ["id"],
};
</script>
