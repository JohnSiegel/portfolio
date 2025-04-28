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
        Hi, I'm John. I started programming in 2012 when I was 12 years old. As a kid, I always found myself more fascinated with how video games were created than the actual games themselves. Because of this fascination I was constantly trying to learn more about software. I taught myself Java in my teennage years and was making money by creating Minecraft Server plugins before I ever took a programming class.
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
    <div style={{ height: isMobile ? "330vh" : "260vh" }}>
      <div className="blob">
        <h1>Experience</h1>
        <h3 style={{ textDecorationLine: "underline" }}>04/2024 - Current</h3>
        <h4>Chief Technology Officer, MABLE Software</h4>
        <ul>
          <li>
            Created product requirements and project plans for 8 software projects.
          </li>
          <li>
            Led the development of all 8 software projects using Next.js, PostgreSQL, AWS S3, and various AI tools/services.
          </li>
          <li>Managed a team of 4 engineers and oversaw all technical operations.</li>
          <li>Created countless diagrams and graphics to explain technical concepts to non-technical stakeholders.</li>
          <li>Performed 40+ product demos in front of executive leadership for a wide range of clients.</li>
        </ul>
        <h3 style={{ textDecorationLine: "underline" }}>05/2022 - 02/2025</h3>
        <h4>Sr. Software Engineer, Stellar Science</h4>
        <ul>
          <li>Personally appointed as the first ever "Code-Quality Enforcer" by the CEO - Responsible for reviewing the entire company's codebase to find refactoring and improvement opportunities.</li>
          <li>
            Developed complex physics simulations in C++ to be ran on high performance computing clusters.
          </li>
          <li>
            Worked with our clients to develop GUIs that perfectly solve their problems.
          </li>
          <li>
            Solely developed a brand new GUI framework on top of Qt, designed specifically for developing
            editors with advanced compile-time safety.
          </li>
          <li>Increased unit test coverage from roughly 45% to roughly 80% in a large 20 year old C++ codebase.</li>
          <li>Led the project to port a massive C++ project to the web using React and Typescript.</li>
        </ul>
        <h3 style={{ textDecorationLine: "underline" }}>03/2022 - 03/2024</h3>
        <h4>Chief Technology Officer, Umee</h4>
        <ul>
          <li>Led a team of eight developers to create an MVP with Flutter and AWS products</li>
          <li>Worked alongside a design and research team to craft user stories</li>
          <li>
            Collaborated with marketing and business development teams to ensure alignment between our technological and business goals
          </li>
        </ul>
        <h3 style={{ textDecorationLine: "underline" }}>01/2021 - 03/2022</h3>
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
