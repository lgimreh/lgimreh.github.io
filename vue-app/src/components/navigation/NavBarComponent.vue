<template>
  <nav>
    <div class="desktop fixed" :class="{ active: windowTop > 200 }">
      <div class="wrapper">
        <div class="row">
          <router-link to="/bio"><h1>Louis-Gabriel Imreh</h1></router-link>
          <ul class="row">
            <li>
              <router-link to="/projects">{{ $t("nav.projects") }}</router-link>
            </li>
            <li>
              <router-link to="/renderings">{{
                $t("nav.renderings")
              }}</router-link>
            </li>
            <li>
              <router-link to="/personnal-art">{{
                $t("nav.personnal-art")
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="desktop static">
    <div class="wrapper">
      <div class="row">
        <router-link to="/bio"><h1>Louis-Gabriel Imreh</h1></router-link>
        <ul class="row">
          <li>
            <router-link to="/projects">{{ $t("nav.projects") }}</router-link>
          </li>
          <li>
            <router-link to="/renderings">{{
              $t("nav.renderings")
            }}</router-link>
          </li>
          <li>
            <router-link to="/personnal-art">{{
              $t("nav.personnal-art")
            }}</router-link>
          </li>
          <li><change-lang></change-lang></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import ChangeLangComponent from "@/components/navigation/ChangeLangComponent.vue";
export default {
  name: "NavBarComponent",
  data() {
    return { windowTop: 0 };
  },
  components: {
    "change-lang": ChangeLangComponent,
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.windowTop = window.top.scrollY;
    },
  },
};
</script>
<style scoped>
.row {
  align-items: center;
  gap: 20px;
}
.desktop {
  width: 100%;
}
.desktop.fixed {
  transform: translateY(-100%);
  transition: transform 250ms linear;
  background-color: var(--black);
}
.desktop.fixed.active {
  transform: translateY(0);
}
.desktop.fixed * {
  color: var(--white);
}
.desktop.static {
  width: 100%;
  background-color: var(--white);
  border-bottom: 1px solid var(--black);
}
.desktop .wrapper > .row {
  justify-content: space-between;
  width: 100%;
}
nav {
  position: fixed;
  width: 100%;
  height: 0;
  top: 0;
}
.desktop.static a {
  padding: 30px 0;
}
.desktop.fixed a {
  padding: 15px 0;
}
</style>
