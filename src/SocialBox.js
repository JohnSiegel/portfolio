import React, { useMemo } from 'react'
import Social from './Social'
import { a, useSpring } from '@react-spring/three'
import { useDrag } from 'react-use-gesture'
import * as THREE from 'three'

const responsiveness = 0.04;

function SocialBox({position}) {
    const euler = useMemo(() => new THREE.Euler(), [])
    const [spring, set] = useSpring(() => ({
        rotation: [0, 0, 0],
    }))
    const bind = useDrag(({ delta: [dx, dy] }) => {
        euler.y += dx * responsiveness
        euler.x += dy * responsiveness
        set({ rotation: euler.toArray().slice(0, 3) })
    })
    return (
        <a.group {...bind()} position={position} {...spring}>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color={0x808080} />
                <Social url="https://github.com/JohnSiegel" text="GitHub" rotation={[0, 0, 0]} position={[0, 0, 0.51]} />
                <Social url="https://www.linkedin.com/in/john-siegel-560333166/" text="LinkedIn" rotation={[0, Math.PI, 0]} position={[0, 0, -0.51]} />
                <Social url="mailto:jp@john-siegel.com" text="E-Mail" rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.51, 0]} />
                <Social url="mailto:jp@john-siegel.com" text="E-Mail" rotation={[Math.PI / 2, 0, 0]} position={[0, -0.51, 0]} />
                <Social url="https://stackoverflow.com/users/17799086/john-siegel" text="Stackoverflow" rotation={[0, Math.PI / 2, 0]} position={[0.51, 0, 0]} />
                <Social url="https://discordapp.com/users/338154696546058250/" text="Discord" rotation={[0, -Math.PI / 2, 0]} position={[-0.51, 0, 0]} />
            </mesh>
        </a.group>
    )
}

export default SocialBox;