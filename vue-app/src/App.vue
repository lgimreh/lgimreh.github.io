<template>
  <nav>
    <router-link to="/">Bio</router-link> |
    <router-link to="/projects">Projects</router-link>
    <div @click="changeLocale('fr')">fr</div>
    <div @click="changeLocale('en')">en</div>
  </nav>
  <router-view />
</template>
<script>
export default {
  name: "App",
  methods: {
    changeLocale(locale) {
      console.log(locale);
      this.$i18n.locale = locale;
    },
  },
};
</script>
<style></style>
