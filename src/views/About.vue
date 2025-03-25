<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Tiago Antunes</strong>, an aspiring game developer.<br/>
        I'm passionate about games both from a engineering standpoint, as well as the experience they bring to players. I love discussing, designing and developing games, as well as other apps in general.<br/>
      </div>

      <div style="margin-top: 20px;">I'm currently in the final year of my Master's Degree in Computer Science and Engineering with a specialization in Games and Interaction and Visualization.<br/>
        During this time, I've worked on some <router-link to="/game-projects">projects</router-link>.</div>

      <div style="margin-top: 40px;">I'm <strong>looking for an internship</strong> as a Game or Engine Programmer. You can find my contacts <router-link to="/contact">here</router-link>.
      <br/>
      <br/>
      <br/>
    </div>
    </div>

    <div style="clear:both"></div>

  </div>
</template>


<style scoped>
.paragraph {
  max-width: 1050px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
    margin-top: 0px;
    padding-bottom: 120px;
  }
}

</style>