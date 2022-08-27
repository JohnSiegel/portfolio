import { useState } from "react";
import { SocialIcon } from "react-social-icons";

function SocialLink({ text, url }) {
    const [hovered, set] = useState(false);
    return (
        <button
            onMouseDown={(e) => window.location.href = url}
            onMouseEnter={(e) => set(true)}
            onMouseLeave={(e) => set(false)}
            style={
                {
                    border: 'none',
                    transitionDuration: '0.15s',
                    backgroundColor: hovered ? '#404040FF' : '#40404000',
                    padding: '8px',
                    width: '100%',
                    borderRadius: '8px',
                    display: 'block',
                    textAlign: "left"
                }}>
            <div >
                <SocialIcon url={url} />
                <p className="blob" style={{ padding: '8px' }}>{text}</p>
            </div>
        </button>
    );
}

export default SocialLink;