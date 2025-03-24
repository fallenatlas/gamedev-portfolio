<template>
  <div>
    <h1>Projects</h1>

    <div class="paragraph" style="margin-bottom: 30px;">
      The following are some projects I've made or heavily contributed to. They range from games to be released, to games created during jams, game engines and even other design stuff.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px; margin-bottom: 20px;">
      There is more to see on my <a target="_blank" href="https://chiefbat.itch.io/">itch.io</a> and <a target="_blank" href="https://github.com/fallenatlas">github</a>.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>

<style scoped>
.paragraph {
  max-width: 1050px;
}
</style>
