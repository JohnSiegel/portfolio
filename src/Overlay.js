import React, { forwardRef } from "react"
import SocialLink from "./SocialLink";

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current === 1 ? '' : 'Scroll down';
    }}
    className="scroll">
    <div style={{ height: "100vh" }}>
      <div className="blob">
        <h1>John Siegel</h1>
        Software Engineer with an interest in machine learning, graphics, and web development.
        <br />
        <div style={{ textAlign: "left", paddingTop: "32px" }}>
          <a href="/Resume.pdf" target="_blank" rel="noreferrer">
            <button className="button" style={{ border: 'none' }}>
              <span className="button-text" >Download CV</span>
            </button>
          </a>
        </div>
      </div>
    </div>
    <div style={{ height: "175vh" }}>
      <div className="blob">
        <h1>About</h1>
        <img src="portrait.jpg" alt="John Siegel" style={{
          borderRadius: '50%',
          width: "45%",
          height: "45%",
          float: 'left',
          margin: '20px 20px 30px 0',
          shapeOutside: 'circle(50%)'
        }} />
        I am a software developer with a passion for machine learning, graphics, and web development. I began
        learning to code when I was 12 years old. At a young age, technology seemed like magic to me, and those
        who developed technology were wizards. I wanted to be a software wizard as well, so I hit the books.
        I started with "Hello world" in Java, and transitioned to making mods for Minecraft. I yearned for more
        opportunities to learn programming, so I spent all my free time watching programming videos on YouTube
        until I got to highschool where I could finally register for my first programming class. My teacher
        noticed my passion and really helped me actualize my goals of becoming the greatest software developer
        I could possibly be. My teacher signed me up for a programming competition, which I won and felt
        incredibly accomplished. Since then, I've been on a non-stop journey of improvement. I wake up every
        day incredibly excited for what I may learn and accomplish. Software is a major part of my life.
      </div>
    </div>
    <div style={{ height: "100vh" }}>
      <div className="blob">
        <h1>Skills</h1>
        <table>
          <tr style={{ textAlign: 'left' }}>
            <th>
              Languages
            </th>
          </tr>
          <tr>
            <td>C/C++ & CMake</td>
            <td>Dart</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>Python</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>Verilog</td>
          </tr>
          <tr style={{ padding: "8px", textAlign: 'left' }}>
            <th>Software and Tools</th>
          </tr>
          <tr>
            <td>Nodejs</td>
            <td>Docker</td>
          </tr>
          <tr>
            <td>Pytorch</td>
            <td>OpenCV</td>
          </tr>
          <tr>
            <td>React</td>
            <td>Qt</td>
          </tr>
          <tr>
            <td>MongoDB</td>
            <td>AWS & GCP</td>
          </tr>
          <tr>
            <td>Socket.io</td>
            <td>OpenGL</td>
          </tr>
          <tr>
            <td>Flutter</td>
            <td>Redis</td>
          </tr>
          <tr>
            <td>Git/GitHub</td>
            <td>GDB</td>
          </tr>
          <tr>
            <td>Emacs/Vim</td>
            <td>Visual Studio (VS & VSC)</td>
          </tr>
        </table>
      </div>
    </div>
    <div style={{ height: "250vh" }}>
      <div className="blob">
        <h1>Experience</h1>
        <h3 style={{ textDecorationLine: 'underline' }}>
          05/22 - Current
        </h3>
        <h4>
          Stellar Science, Jr. Scientific Software Engineer
        </h4>
        <ul>
          <li>
            Developing C++ software for physics simulation and image manipulation
          </li>
          <li>
            Working on tasks related to computer vision and graphics
          </li>
          <li>
            Creating GUIs with Qt
          </li>
          <li>
            Practicing test-driven development techniques in a large codebase
          </li>
        </ul>
        <h3 style={{ textDecorationLine: 'underline' }}>
          03/22 - Current
        </h3>
        <h4>
          Phitnest, Development Team Lead
        </h4>
        <ul>
          <li>
            Leading a team of 8 developers
          </li>
          <li>
            Writing technical documentation and a developer wiki
          </li>
          <li>
            Organizing sprints, holding scrum, and using a Kanban on Notion
          </li>
          <li>
            Gaining experience using MongoDB, Express, Nodejs, and Flutter to
            develop a cross-platform mobile app
          </li>
          <li>
            Working directly with UX professionals and market researchers
          </li>
        </ul>
        <h3 style={{ textDecorationLine: 'underline' }}>
          10/21 - Current
        </h3>
        <h4>
          Project Shinobi, C++ Developer
        </h4>
        <ul>
          <li>
            Developing a video game with Unreal Engine 5
          </li>
          <li>
            Working in a team of 20 developers
          </li>
          <li>
            Working with complex shaders, 3D models, texturing, dynamic lighting,
            animation, and UI
          </li>
          <li>
            Writing gameplay algorithms in C++ using a multitude of large libraries
          </li>
        </ul>
      </div>
    </div>
    <div style={{ height: "100vh" }}>
      <div className="blob">
        <h1>Education</h1>
        <img src="virginiatech.png" alt="Virginia Tech Logo" style={{ width: 150, height: 150 }} />
        <h3>B.S. Computer Science, Virginia Tech, 2023</h3>
      </div>
    </div>
    <div style={{ height: "100vh" }}>
      <div className="blob">
        <h1>Links</h1>
        <div style={{ lineHeight: "64px", width: "256px" }}>
          <SocialLink url="https://github.com/JohnSiegel" text="GitHub" />
          <SocialLink url="https://www.linkedin.com/in/john-siegel-560333166/" text="LinkedIn" />
          <SocialLink url="mailto:jp@john-siegel.com" text="E-Mail" />
          <SocialLink url="https://stackoverflow.com/users/17799086/john-siegel" text="Stackoverflow" />
          <SocialLink url="https://discordapp.com/users/338154696546058250/" text="Discord" />
        </div>
      </div>
    </div>
    <span className="caption" ref={caption}>
      Scroll down
    </span>
  </div>
))

export default Overlay
