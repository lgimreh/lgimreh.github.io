<template>
  <custom-nav></custom-nav>
  <div class="router">
    <router-view />
  </div>
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
#app {
  z-index: 0;
}
:root {
  --black: #0e0e0e;
  --white: #efefef;
  --bg-pale: rgba(255, 255, 255, 0.1);
  --page-pad-t: 60px;
}
.row {
  display: flex;
  gap: 20px;
}
* {
  font-family: "Roboto Slab", serif;
  /*font-family: "Raleway", sans-serif;*/
}
#app {
  width: 100%;
  min-height: 200vh;
  background-color: var(--black);
}
#content {
  height: 100%;
  width: 100%;
}
.interact:hover {
  cursor: pointer;
}
.wrapper {
  max-width: 1440px;
  margin: auto;
}
.page {
  margin-top: 100px;
}
.btn {
  border-radius: 50px;
  border: 1px solid var(--white);
  padding: 10px 30px;
  transition: all 150ms linear;
}
.btn:hover {
  cursor: pointer;
  border: 1px solid transparent;
  background-color: var(--bg-pale);
}
nav {
  z-index: 100;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--white);
  white-space: nowrap;
  position: relative;
}
a {
  text-decoration: underline;
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
.router {
  z-index: 0;
  position: relative;
}
.picture {
  background-color: #767676;
}
*::-webkit-scrollbar {
  width: 10px;
  border-radius: 50px;
  overflow: hidden;
}
*::-webkit-scrollbar-track {
  background: var(--white);
}
*::-webkit-scrollbar-thumb {
  background: var(--black);
  border-radius: 50px;
}
</style>
