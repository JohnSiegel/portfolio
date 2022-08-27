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
    <div style={{ height: "400vh" }}>
      <div className="blob">
        <h1>John Siegel</h1>
        Software Engineer with an interest in machine learning, graphics, and web development.
        <br />
        <div style={{ textAlign: "left", paddingTop: "32px" }}>
          <button className="button" onClick={(e) => { window.location.href = '/Resume.pdf' }} style={{border: 'none'}}>
            <span className="button-text" >Download CV</span>
          </button>
        </div>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
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
        </table>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="blob">
        <h1>Experience</h1>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="blob">
        <h1>Education</h1>
        <img src="virginiatech.png" alt="Virginia Tech Logo" style={{ width: 150, height: 150 }} />
        <h3>B.S. Computer Science, Virginia Tech, 2023</h3>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
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
