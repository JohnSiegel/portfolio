import React, { forwardRef } from "react";
import SocialLink from "./SocialLink";

const Overlay = forwardRef(({ caption, scroll, isMobile }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      caption.current.innerText = scroll.current < 0.05 ? "Scroll down" : "";
    }}
    className="scroll"
  >
    <div style={{ height: isMobile ? "85vh" : "100vh" }}>
      <div className="blob">
        <h1>John Siegel</h1>
        Software Engineer with a passion for high quality code.
        <br />
        <div style={{ textAlign: "left", paddingTop: "32px" }}>
          <a href="/Resume.pdf" target="_blank" rel="noreferrer">
            <button className="button" style={{ border: "none" }}>
              <span className="button-text">Download CV</span>
            </button>
          </a>
        </div>
      </div>
    </div>
    <div style={{ height: isMobile ? "150vh" : "130vh" }}>
      <div className="blob" style={{maxWidth: "600px"}}>
        <h1>About</h1>
        <img
          src="portrait.jpg"
          alt="John Siegel"
          style={{
            borderRadius: "50%",
            width: "45%",
            height: "45%",
            float: "left",
            margin: "40px 20px 30px 0",
            shapeOutside: "circle(50%)",
          }}
        />
        Hi, I'm John. I have worked as a software developer for Stellar Science since May 2022. I graduated from Virginia Tech with a B.S. Computer Science in January 2023. I have experience writing C++, Python, Java, Typescript, and Dart in production applications with varying amounts of active users. I am most experienced in laser and satellite simulations, the Monte Carlo method, GUIs, distributed computing, websites, and mobile apps. I have worked in teams ranging in sizes from 3-30 developers. I have experience interacting with customers, attending conferences, and putting Agile methodologies into practice.
        <p style={{ lineHeight: "1rem", fontStyle: "italic" }}>
          "You can't learn everything, but you have to convince yourself that you can learn anything..."
        </p>
        <p style={{ textAlign: "right" }}>- John Carmack</p>
      </div>
    </div>
    <div style={{ height: "100vh" }}>
      <div className="blob">
        <h1>Skills</h1>
        <table>
          <tbody style={{ textAlign: "left" }}>
            <th>Languages</th>
          </tbody>
          <tbody>
            <td>C++ & CMake</td>
            <td>Dart</td>
          </tbody>
          <tbody>
            <td>TypeScript</td>
            <td>Python</td>
          </tbody>
          <tbody>
            <td>Java</td>
            <td>Go</td>
          </tbody>
          <tbody style={{ padding: "8px", textAlign: "left" }}>
            <th>Software and Tools</th>
          </tbody>
          <tbody>
            <td>Nodejs</td>
            <td>Docker</td>
          </tbody>
          <tbody>
            <td>PyTorch</td>
            <td>NumPy</td>
          </tbody>
          <tbody>
            <td>React</td>
            <td>Qt</td>
          </tbody>
          <tbody>
            <td>MongoDB</td>
            <td>Redis</td>
          </tbody>
          <tbody>
            <td>OpenCV</td>
            <td>OpenGL</td>
          </tbody>
          <tbody>
            <td>Flutter</td>
            <td>Socket.io</td>
          </tbody>
          <tbody>
            <td>Git</td>
            <td>AWS & GCP</td>
          </tbody>
          <tbody>
            <td>JUnit</td>
            <td>Jest</td>
          </tbody>
        </table>
      </div>
    </div>
    <div style={{ height: isMobile ? "310vh" : "240vh" }}>
      <div className="blob">
        <h1>Experience</h1>
        <h3 style={{ textDecorationLine: "underline" }}>01/24 - Current</h3>
        <h4>Sr. Software Developer, Stellar Science</h4>
        <ul>
          <li>
            Personally appointed as the first ever "Code-Quality Enforcer" by the CEO - Responsible for reviewing the entire company's codebase to find refactoring and improvement opportunities
          </li>
          <li>
            Leading software development efforts on multiple projects in collaboration with Air Force Research Lab, Raytheon, and other defense contractors
          </li>
          <li>Meeting with customers, attending conferences, and writing user stories</li>
        </ul>
        <h3 style={{ textDecorationLine: "underline" }}>05/22 - 01/24</h3>
        <h4>Software Developer, Stellar Science</h4>
        <ul>
          <li>Practicing test-driven development and creating user story centric tests</li>
          <li>
            Developing physics simulations for high performance computing systems
          </li>
          <li>
            Working in teams ranging in size from 5-30 people - including analysts, technical writers, and other software developers
          </li>
          <li>Working directly with UX professionals and market researchers</li>
        </ul>
        <h3 style={{ textDecorationLine: "underline" }}>03/22 - 03/24</h3>
        <h4>Chief Technology Officer, Umee</h4>
        <ul>
          <li>Led a team of eight developers to create an MVP with Flutter and AWS products</li>
          <li>Worked alongside a design and research team to craft user stories</li>
          <li>
            Collaborated with marketing and business development teams to ensure alignment between our technological and business goals
          </li>
        </ul>
        <h3 style={{ textDecorationLine: "underline" }}>01/21 - 03/22</h3>
        <h4>Lead Developer, Project Shinobi</h4>
        <ul>
          <li>Designed the entire system architecture for a 3D MMO game using AWS and Unreal Engine 4</li>
          <li>Led a team of 10 developers to implement the system architecture specification under an Agile framework</li>
          <li>
            Released the game and earned 4.5 million+ views on a YouTube demo <a href="https://www.youtube.com/watch?v=U30y2SjIK6o">(link)</a>
          </li>
        </ul>
      </div>
    </div>
    <div style={{ height: isMobile ? "90vh" : "100vh" }}>
      <div className="blob">
        <h1>Education</h1>
        <img
          src="virginiatech.png"
          alt="Virginia Tech Logo"
          style={{ width: 150, height: 150 }}
        />
        <h3>B.S. Computer Science, Virginia Tech, 2024</h3>
      </div>
    </div>
    <div style={{ height: "100vh" }}>
      <div className="blob">
        <h1>Links</h1>
        <div style={{ lineHeight: "64px", width: "256px" }}>
          <SocialLink url="https://github.com/JohnSiegel" text="GitHub" />
          <SocialLink
            url="https://www.linkedin.com/in/john-siegel-560333166/"
            text="LinkedIn"
          />
          <SocialLink url="mailto:jpsiegel8@gmail.com" text="E-Mail" />
          <SocialLink
            url="https://stackoverflow.com/users/17799086/john-siegel"
            text="Stackoverflow"
          />
        </div>
      </div>
    </div>
    <span className="caption" ref={caption}>
      Scroll down
    </span>
  </div>
));

export default Overlay;
