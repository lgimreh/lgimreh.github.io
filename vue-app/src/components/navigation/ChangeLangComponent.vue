<template>
  <div class="change-lang">
    <div
      class="interact"
      v-if="currentLocale === 'en'"
      @click="changeLocale('fr')"
    >
      FR
    </div>
    <div
      class="interact"
      v-if="currentLocale === 'fr'"
      @click="changeLocale('en')"
    >
      EN
    </div>
  </div>
</template>
<script>
export default {
  name: "ChangeLangComponent",
  data() {
    return {
      currentLocale: "",
    };
  },
  mounted() {
    this.currentLocale = this.$i18n.locale;
  },
  methods: {
    changeLocale(locale) {
      this.currentLocale = locale;
      this.$i18n.locale = locale;
    },
  },
};
</script>
<style scoped>
.change-lang {
  min-width: 30px;
}
</style>
