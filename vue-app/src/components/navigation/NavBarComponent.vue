<template>
  <nav>
    <div class="desktop">
      <div class="wrapper">
        <div class="row">
          <router-link to="/bio"><h1>Louis-Gabriel Imreh</h1></router-link>
          <ul class="row">
            <li>
              <router-link to="/bio">{{ $t("nav.bio") }}</router-link>
            </li>
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
  </nav>
</template>
<script>
import ChangeLangComponent from "@/components/navigation/ChangeLangComponent.vue";
export default {
  name: "NavBarComponent",
  components: {
    "change-lang": ChangeLangComponent,
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
  top: 0;
}
li > a {
  padding: 30px 0;
}
</style>
