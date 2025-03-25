import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Cubos Engine", "img/projects/project-1-icon.png", 
    `
    <div class="paragraph">
     <strong>Cubos</strong> is a voxel based game engine written in C++ and using OpenGL, with an Entity Component System (ECS) architecture. I've been working on it since Dec 2022.
     <br/>Here's a video of our game that won Coffee'n Jam 2024.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/7yonvKMdzZQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
    <a href="https://github.com/GameDevTecnico/cubos" target="_blank">Cubos repository on Github</a>
    </div>

    <div class="paragraph center">
    <a href="https://cubosengine.org/" target="_blank">Documentation and development blogs over at Cubos Website</a>
    </div>

    <div class="paragraph">
        <strong>This project has deeply improved my skills in working with version control (git), leading, teamwork, and research, beyond being a great opportunity to improve my knowledge of C++.</strong>
    </div>  
    <div class="paragraph">
        <strong>My contributions:</strong>
        <ul>
        <li>Delta Time Resource.</li>
        <li>Minor graphical features.</li>
        <li>Collision Plugin: Components, Narrow Phase, SAT, Collision Manifold, Contact Caching, Collision Layers.</li>
        <li>Physics Plugin: Components, Integration, Solver (XPBD solver and later TGS soft impulse solver), Penetration Constraint, Warm-Starting, Physics Materials.</li>
        <li>Managing Collisions and Physics Plugins:  designed the plugins, with focus on performance, planned work (opened issues), assigned priorities and tasks to members of the team.</li>
        </ul>
    </div>

    <div class="paragraph">
        I initially started working on the engine's demos, then moved to some smaller engine tasks and it was only when I started working on the narrow phase collision detection that I started to take it seriously. I had always had interest in physics, and so when the oportunity came I started the physics plugin (each funcionality of the engine is divided into plugins), and at this point I was well inside the rabit hole.<br/>
    </div>
    <div class="paragraph">
        Since then, a lot of research on physics and efficient C++, was done. I've implemented two different collision solvers, initially XPBD and currently an impulse solver. Currently, we have working collisions for box shapes and voxel shapes, full rigid body simulation for these shapes, collision layers and different physics materials, beyond other stability functionalities that the users don't even need to know about.<br/>
    </div>
    <div class="paragraph">
        Recently, with the expansion of the project, and restructuring into teams, I've been guiding the development of the physics and collisions for the engine. Currently, the team is composed of three members, for whom I manage and review the work. I also represent the team in general meetings, with the lead of the project, and I'm the contact point for any issues regarding these areas of the engine.
    </div>

    <div class="paragraph">
        <strong>Main features:</strong>
        <ul>
        <li>Voxels.</li>
        <li>Data-oriented design.</li>
        <li>Built from scratch using C++/OpenGL.</li>
        <li>In house physics engine.</li>
        <li>Open Source (created for the gamedev community!).</li>
        </ul>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/yldRod0gdE0" frameborder="0" allowfullscreen></iframe>
    </div>`, "#23bd69", true, true),
    new ProjectData("project-2", "Project Star", "img/projects/star.png", `
    <div class="paragraph">
        Up-and-coming fast paced 2D top-down roguelite in Godot. <br/>
        Our team is multidisciplinary, with artists, sound makers, designers and programmers.
        <br/>
        <br/>
        I'm working as a programmer and designer. So far, in terms of programming I've worked on player controls (movement, aiming), combat mechanics and UI.
        <br/>
        <br/> I'll share more when we're ready :)
    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "Bubble Up", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        After an accident, a squirrel finds itself stranded at the bottom of the ocean. Now, it must find a way to escape and reach the surface before running out of air. To do so, it must navigate through treacherous underwater environments, dodge dangerous sea creatures and search for oxygen sources to avoid suffocating.
        <br/>This game was developed for the Global Game Jam 2025.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/n728TdZifWo" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://kockiie.itch.io/bubble-up" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/fallenatlas/bubbleproject" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph">
        This game was the first time I attempted to create an infinite level, and had to do the entire design of each section so that they fit each other and didn't feel very repetitive. 
        I also challenged myself to implement the enemies instead of the player character.
        Additionally, I tried to make the experience a bit more cinematic and smooth, which includes the black silhouette shader when the player is about to die, the starting menu which presents the setting while allowing the player to learn the movement before starting, as well as the oxygen indicator that moves with the player, akin to how the information is presented to the player in Dead Space for example.
        Overall, I learned many new interesting techniques, and worked efficiently with a great team to produce this game.
    </div>

    <div class="paragraph">
        <strong>My contributions:</strong>
        <ul>
        <li>Design: Level Design, Gameplay Elements, Gameplay Loop.</li>
        <li>Programming: Enemies, Shaders, HUD, Camera, Infinite Map Generator, Start Menu and other functionality.</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Main features:</strong>
        <ul>
        <li>Physics Based Mechanics: Simulating underwater movement and how bubbles move in water, leading to greater immersion.</li>
        <li>Oxigen Resource: The player can defeat enemies by using up the oxygen that's keeping them alive, generating an important risk and reward dynamic.</li>
        <li>Infinite scroller: Provides extra replayability with the an endless generated map, which challenges the player to go further each time.</li>
        <li>Audio/Visual Theme: The games visuals and audio embrace the theme of the depths of the ocean and it's interesting bubble mechanics.</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/by_menu.png" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="img/projects/bu_play.png" alt="Drawing Overload Screenshot" />
    </div>
    `, "#383838"),
    new ProjectData("project-4", "ImMortal Journey", "img/projects/project-4-icon.jpg", `
    <div class="paragraph">
    You will play as an immortal character whose immortality was stolen by Death. You need to complete a continuous series of challenges, such as fighting and platforming, intertwined with peaceful resting areas. Your objective is to reach the end of your journey to confront Death and take back what was stolen.
    <br/>This game was done in the scope of the Methodology of Development of Games course at Instituto Superior Técnico.
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/gTWFk3XGgc0" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in browser (WebGL) on <a href="https://chiefbat.itch.io/immortal-journey" target="_blank">itch.io</a>. Source code is available on <a href="https://github.com/fallenatlas/immortal_journey" target="_blank">GitHub</a>.
        </div>
    </div>
    
    <div class="paragraph">
        This project was a great way to learn about the overall development process of a game. The feedback we got from professionals who tested our prototype was also very educational, and brought attention to important details I had never though of before, such as attack combos and timings. Additionally, our team worked alongside an audio student from another school, who produced the sounds for the game, and two writers from another school as well. It was very challenging, given we had just 2 months, but it was very fullfilling, and we were proud of how it turned out.
    </div>

    <div class="paragraph">
        <strong>My contributions:</strong>
        <ul>
        <li>Design: Level Design, Gameplay Elements, Gameplay Loop and other components.</li>
        <li>Programming: Enemies, Shaders, Player Movement, Player Attack, HUD, World Switching, Tutorial, First Cutscene and other functionality.</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Main features:</strong>
        <ul>
        <li>Compelling Story: an adventure of discovery and realization of life's value.</li>
        <li>Courage Resource: generates an important risk and reward dynamic, making the player stronger or weaker depending on the amount of courage held.</li>
        <li>The Realm of the Dead: provides extra depth to the level design and a way to avoid danger, but drains courage.</li>
        <li>Audio/Visual Transformation: In order to convey the character's emotions, the visuals and audio of the game change dynamically.</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/immortal_img1.png" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="img/projects/immortal_img2.png" alt="Eugeneable Screenshot" />
    </div>
    `, "#e80fb7", false, true),
    new ProjectData("project-5", "C++/OpenGL Apps", "img/projects/shadertoy.png", `
    <div class="paragraph">
    I developed a small "engine like" program for the Computer Graphics for Games course at Instituto Superior Tecnico. It was fully developed in C++ and OpenGL by me.
    </div>

    <div class="paragraph">
    <strong>Main features:</strong>
    <ul>
        <li>Realistic lighting (Blinn-Phong model).</li>
        <li>Procedurally generated textures (3D) of marble and wood using perling noise.</li>
        <li>Orbital camera.</li>
        <li>Hierachical scene graph.</li>
        <li>Mouse picking.</li>
        <li>Movement of objects with mouse in multiple axis (including rotation) like seen in engines editors.</li>
        <li>Serialization of the scene in JSON.</li>
    </ul>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/7ym0Qz1uUP4" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <a href="https://github.com/fallenatlas/IndividualProject.CGJ_23-24" target="_blank">Source Code on Github</a>
    </div>

    <div class="paragraph">
    This project helped me get better with C++ (and C), and better understand 3D space, vector and matrix operations and quaternions. It was also a good introduction to programming shaders.
    </div>
    
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/opengl.png" alt="Cloud Drew Land Screenshot" />
    </div>
    
    <div class="paragraph">
    For the Tridimensional Visualization course we developed a small game using C++ and OpenGL.
    </div>

    <div class="paragraph">
        <strong>My Contributions:</strong>
        <ul>
        <li>Boat movement.</li>
        <li>Cameras.</li>
        <li>Collision Detection and Response.</li>
        <li>Shaders: Blinn-Phong model, Lights, Planar Shadows, Reflections, tTextures, Transparency.</li>
        <li>HUD, game over and pause features.</li>
        </ul>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/8TA5x-psQdw" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <a href="https://github.com/fallenatlas/AVT_Project" target="_blank">Source Code on Github</a>
    </div>

    <div class="paragraph">
    This project further developed my C++ skills, and my knowledge in shaders, particularly having more advanced shaders with more features that need to communicate with the main program and using the stencil buffer.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/avt.png" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/avt_texture.png" alt="Cloud Drew Land Screenshot" />
    </div>`, "#e48246", false, true),
    new ProjectData("project-5", "Assistander", "img/projects/Assistander.png", `
    <div class="paragraph">
        This prototype is a finantial advice app for young adults, that is designed mainly to be accessed on smartphones.</br>
        It was developed during the Conception Centered in the User Course at Instituto Superior Tecnico, where we were challenged by Santander, a bank, to build such an app, with the best one potentially moving further in production. 
    </div>

    <div class="paragraph">
        We focused heavily on the look and functionality of the app, supported by user research, and we developed multiple prototypes, and used an AGILE methodology.
    </div>

    <div class="paragraph">
        My main contributions were, user research, organising feedback and designing and building the figma prototypes.
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/flamy1.png" alt="The Art of Walking Screenshot" />
        <img class="phone-screenshot" src="img/projects/flamy2.png" alt="The Art of Walking Screenshot" />
    </div>

    <div class="paragraph">
        <div class="notice">
        Available on <a href="https://www.figma.com/proto/meuIV7BFqZSioRLSqEh1X1/CCU-%E2%80%A2-SantanderAssistant?node-id=210-2408&starting-point-node-id=210%3A2408&t=Dh55e9b8uiaJCcQS-1" target="_blank">Figma</a>.
        </div>
    </div>

    <div class="paragraph center">
        <a href="https://www.canva.com/design/DAF2mw02TDI/RviLTi3JgzxfpaqVFnjdJg/view?utm_content=DAF2mw02TDI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h211fb466a1" target="_blank">Final Pitch</a>
    </div>
    
    <div class="paragraph">
        <strong>Main features:</strong>
        <ul>
        <li>Flamy: An AI assistant that adapts to your needs, and with whom you can chat.</li>
        <li>Clear Interface: Have all your finantial information and goals at your fingertips.</li>
        <li>Personalized Finantial News: Flamy will select the most recent finantial news that might interest you.</li>
        </ul>
    </div>`, "#f01c02"),
    new ProjectData("project-5", "Colorblind children app", "img/projects/pingu.png", `
    <div class="paragraph">
        This prototype is an educational game, focused on children from 5-8 years old, intended to be played in class, where Ishihara tests are intercalated with normal numbers.
        <br/>
        We intend for this to be an effective way to discover early on in the lives of children if they are colorblind, which is the opportunity we identified, but also a educational component to learn numbers.
        <br/>
        This project was done in the scope of the Studio of Design and Interaction course at Instituto Superior Técnico.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/pingu1.png" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/pingu2.png" alt="Cloud Drew Land Screenshot" />
    </div>

    <div class="paragraph">
        <div class="notice">
        Available on <a href="https://www.figma.com/proto/2c1YTYidyxcxXrJV5lg77q/Colorblind-Diagnostic-Game?t=AREr2MDz5wTYpdx6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=47-1473&starting-point-node-id=47%3A1473" target="_blank">Figma</a>.
        </div>
    </div>
    
    <div class="paragraph">
        This project challenged us to find an issue that a minority population still struggles with, nowadays, and find a solution for it, through technology. 
        We had to employ several methods to gather information such as secondary research and interviews. We had contact with a person that had faced the struggle of not knowing he was colorblind, in the past, and that tested each of our prototypes.

    </div>

    <div class="paragraph">
        <strong>My contributions:</strong>
        <ul>
            <li>Design Process: Designed a solution by following the Double Diamond Design Process.</li>
            <li>Prototyping: Prototyped a solution using Figma.</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Main features:</strong>
        <ul>
            <li>The Test as a Game: Uses the positives of an interactive and fun way for kids to learn to "gamify" the Ishihara test.</li>
            <li>Educational Component: Utilizes the need for the identification of the numbers in the game for both the colorblind testing and learning the numbers.</li>
        </ul>
    </div>`, "#ff9500")
];