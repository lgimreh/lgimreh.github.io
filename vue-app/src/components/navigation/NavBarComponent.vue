<template>
  <div>
    <div
      class="nav static"
      v-for="i in 2"
      :key="'nav_' + i"
      :class="{ static: i === 1, fixed: i === 2, active: fixedActive }"
    >
      <div class="wrapper">
        <div class="row">
          <div @click="navigateTo('/bio')" class="link">
            <h1>Louis-Gabriel Imreh</h1>
          </div>
        </div>
        <div class="row">
          <div @click="navigateTo('/bio')" class="link">
            <h4>{{ $t("nav.bio") }}</h4>
          </div>
          <div @click="navigateTo('/renders')" class="link">
            <h4>{{ $t("nav.renderings") }}</h4>
          </div>
          <div @click="navigateTo('/personnal-art')" class="link">
            <h4>{{ $t("nav.personnal-art") }}</h4>
          </div>
          <div class="btn" @click="changeLang()">
            <h4>{{ nextLang }}</h4>
          </div>
          <div @click="navigateTo('/projects')" class="btn">
            <h4>{{ $t("nav.projects") }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      fixedActive: false,
      currentLang: "",
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.currentLang = this.$i18n.locale;
  },
  computed: {
    nextLang() {
      let x = "En";
      if (this.currentLang === "en") {
        x = "Fr";
      }
      return x;
    },
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.fixedActive = window.scrollY > 100;
    },
    navigateTo(path) {
      this.$router.push({ path: path, replace: true });
    },
    changeLang() {
      if (this.currentLang === "fr") {
        this.$i18n.locale = "en";
        this.currentLang = "en";
      } else {
        console.log("wassup");
        this.$i18n.locale = "fr";
        this.currentLang = "fr";
      }
    },
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
}
.nav.static {
  border-bottom: 1px solid var(--white);
}
.nav.fixed * {
  color: var(--black);
}
.nav.fixed {
  position: fixed;
  background-color: var(--white);
  top: 0;
  height: fit-content;
  transform: translateY(-150px);
  transition: transform 250ms linear;
  z-index: 200;
}
.nav.fixed.active {
  transform: translateY(0);
}
.nav.fixed h1 {
  font-size: 26px;
}
.nav.fixed .link {
  padding: 10px 0;
}
.nav.fixed .btn {
  border: 1px solid var(--black);
}
.nav .link {
  height: 100%;
  padding: 20px 0;
  width: fit-content;
}
.nav .link:hover {
  cursor: pointer;
}
.nav .row {
  align-items: center;
  gap: 20px;
}
.change-lang {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 85px;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
