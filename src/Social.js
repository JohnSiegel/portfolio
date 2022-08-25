import { Html } from '@react-three/drei'
import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons';

function Social({ url, rotation, position, text }) {
    const [hidden, setVisible] = useState(false)
    return (<Html
        style={{
            transition: 'all 0.1s',
            opacity: hidden ? 0 : 1,
            transform: `scale(${hidden ? 0.5 : 1})`,
            textAlign: 'center',
            lineHeight: '0.75rem',
            fontSize: '28px',
        }}
        transform
        rotation={rotation}
        distanceFactor={1.5}
        position={position}
        occlude
        onOcclude={setVisible}>
        <SocialIcon url={url} style={{ width: 170, height: 170 }} />
        <br />
        <p>{text}</p>
    </Html>);
}

export default Social;