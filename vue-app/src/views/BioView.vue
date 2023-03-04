<template>
  <div class="bio page wrapper">
    <div class="picture"></div>
    <div class="info">
      <p>{{ $t("bio.bio_text") }}</p>
      <p>{{ $t("bio.bio_title") }}</p>
    </div>
    <div class="achievements row">
      <div
        v-for="index in numberOfAchievements"
        :key="'achiev_' + index"
        class="item"
      >
        <p>
          {{ $t("bio.achiev[" + (index - 1) + "].1") }}&nbsp;
          <a
            target="_blank"
            :href="$t('bio.achiev[' + (index - 1) + '].link_url')"
          >
            {{ $t("bio.achiev[" + (index - 1) + "].link") }}</a
          >
          &nbsp;{{ $t("bio.achiev[" + (index - 1) + "].2") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BioView",
  data() {
    return {
      numberOfAchievements: 1,
    };
  },
};
</script>
<style scoped>
.picture {
  height: 400px;
  width: 400px;
}
.achievements .item p {
  display: flex;
  flex-wrap: wrap;
}
</style>
