<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Tiago Antunes</strong>, a Computer Science and Engineering student, currently in my Master's degree at Instituto Superior Técnico.
      <br />During my Master's, I've specialized in Games and Interaction and Visualization, undertaking courses like Game Design, Game Development Methodology and Studio of Design and Interaction. I've also done some courses related to AI and Multimedia.
      <br />
      <br />Since 2022, I've been part of <a href="https://gamedev.tecnico.ulisboa.pt/" target="_blank">GameDev Técnico</a>, a student association focused on game development. In this environment I have participated both in game jams and internal game projects.
      <br />My experience regarding game development is mainly with Unity (C#) and Godot, but also with some experience in Unreal Engine 5.
      <br />
      <br />Besides development, I'm passionate about video games, and I love photography, and exploring real the world.
      <br />
      <br />I'm looking for an internship in the games industry as a Game Programmer or Engine Programmer, so if you have any opportunities feel free to 
      <router-link to="/contact">contact me</router-link>.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/TiagoAntunes_CV.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download CV</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>GameDev Técnico</h3>
      <h4>December 2022 - Present</h4>

      <div>Participated in multiple game jams, using different engines and tools, and working with diverse teams. Currently working on multiple internal projects.
      
      <div><br/><Strong>Cubos Engine</Strong>: Working on and leading a team of 3 through building the collisions and physics from the ground up. Represented Cubos at DevGamm Lisbon 2023.
      </div>
      <div class="tech-stack">C++, Git, Math, Physics, OpenGL</div>
      <div><br/><Strong>Project Star</Strong>: Up-and-coming fast paced 2D top-down roguelite in Godot. Working with a multidisciplinary team as a programmer and designer. Programmed player controls (movement, aiming), combat mechanics and UI.</div>
      <div class="tech-stack">Godot, GDScript, Git, Miro</div>
      </div>

      <h3>INESC-ID</h3>
      <h4>September 2024 - Present</h4>

      <div>Internship for my Thesis.</div>

      <h2>Skills</h2>

      <div class="skills">
        <ul>
          <div class="column">
              <h3>Languages</h3>
              <li>C++</li>
              <li>C</li>
              <li>C#</li>
              <li>Python</li>
              <li>Java</li>
              <li>GLSL</li>
          </div>
          <div class="column">
              <h3>Gamedev Tools</h3>
              <li>Unity</li>
              <li>Godot</li>
              <li>Unreal Engine 5</li>
              <li>Aseprite</li>
          </div>
          <div class="column">
              <h3>Tools & Software</h3>
              <li>Git</li>
              <li>Miro</li>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
          </div>
      </ul>
      </div>
      <div style="clear:both" />

      
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Master's Degree in Computer Science and Engineering</h3>
      <h4>Instituto Superior Técnico, September 2023 - November 2025</h4>
      <div>Specialized in Games and Interaction and Visualization with complementary courses in Artificial Inteligence.</div>

      <h3>Bachelor's Degree in Computer Science and Engineering</h3>
      <h4>Instituto Superior Técnico, September 2020 - July 2023</h4>
      <div></div>

      <h2>Activities</h2>

      <h3>Swimming</h3>
      <h4>September 2014 - June 2018</h4>
      <div>Trained Swimming during my lower secondary education (was around 12-16 years old).</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Fluent English, with a fantastic Portuguese accent.</div>

      <h3>Portuguese</h3>
      <div>My mother tongue.</div>

      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Video Games</h3>
        <div>My go to games are usually fast paced shooters, like Titanfall, Vanquish or Ultrakill, but I enjoy playing basically any genre of game.
          <br/>I love playing them, watching them, talking about them, studying them, watching studies about them, designing them...
        </div>

        <h3>I 🧡 Visual Stories</h3>
        <div>Whether it be in movies, TV shows, Anime, or in Photos, I love a good story with good visuals.
        </div>

        <h3>I 💛 Photography</h3>
        <div>I love to capture the little moments I see.</div>

        <h3>I 💚 Exploring the World</h3>
        <div>So far I've visited most of Portugal and Spain. Hopefully, the list will grow :) <br/><br/></div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 1050px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 1050px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.skills ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-gap: 40px;
    margin-left: -40px;
    display: grid; 
    list-style: none; /* Remove default list style */
}

.column h3{
    font-weight: normal;
    text-align: center;
    margin-top: -10px;
}

.column ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-gap: 40px;
    margin-top: 50px;
    display: grid; 
    list-style: none; /* Remove default list style */
}

.column li {
    background-color: transparent; /* Box background color */
    border: #259dc5 2px solid; /* Add a border to the box */
    color: #fff; /* Text color */
    padding: 10px 20px; /* Add padding inside the box */
    border-radius: 5px; /* Rounded corners */
    font-size: 18px; /* Adjust font size */
    text-align: center; /* Center the text */
    margin-top: 15px;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>