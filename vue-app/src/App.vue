<template>
  <custom-nav></custom-nav>
  <router-view />
</template>
<script>
import NavBarComponent from "./components/navigation/NavBarComponent.vue";
export default {
  name: "App",
  components: {
    "custom-nav": NavBarComponent,
  },
  methods: {
    changeLocale(locale) {
      console.log(locale);
      this.$i18n.locale = locale;
    },
  },
};
</script>
<style>
:root {
  --white: #f5f5f5;
  --black: #0f0f0f;
  --page-pad-t: 120px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--black);
  white-space: nowrap;
}
a {
  text-decoration: none;
  display: block;
}
ul {
  list-style-type: none;
}
body {
  background-color: var(--white);
  min-height: 200vh;
}
.wrapper {
  max-width: 1440px;
  width: calc(100% - 100px);
  margin: auto;
}
.page {
  padding-top: var(--page-pad-t);
}
.row {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.interact:hover {
  cursor: pointer;
}
</style>
