import React, { forwardRef } from "react"

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
        <div style={{ textAlign: "center", padding: "64px" }}>
          <button className="button" onClick={(e) => { window.location.href = '/Resume.pdf' }}>
            <p>Download CV</p>
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
          <tr style={{padding: "8px", textAlign: 'left' }}>
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
        <img src="virginiatech.png" alt="Virginia Tech Logo" style={{width: 150, height: 150}}/>
        <h3>B.S. Computer Science, Virginia Tech, 2023</h3>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="blob">
        <h1>Something</h1>
        Some thing else here
      </div>
    </div>
    <span className="caption" ref={caption}>
      Scroll down
    </span>
    <span className="drag-caption">
      Drag cursor to browse social links below
    </span>
  </div>
))

export default Overlay
