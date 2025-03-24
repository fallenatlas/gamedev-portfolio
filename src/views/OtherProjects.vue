<template>
  <div>
    <h1>Gallery</h1>

    <div class="paragraph" style="margin-bottom: 30px;">
      And here are some visual works that I've produced. Most are photographs from trips I've taken, or from day to day life, but I also have some design and composite work.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>

<style scoped>
.paragraph {
  max-width: 1050px;
}
</style>
