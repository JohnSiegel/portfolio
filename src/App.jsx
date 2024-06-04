import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Overlay from './Overlay';
import Model from './Model';

function App() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 800;

  return (
    <>
      <Canvas
        shadows
        onCreated={(state) => state.events.connect(overlay.current)}
        raycaster={{
          computeOffsets: ({ clientX, clientY }) => ({
            offsetX: clientX,
            offsetY: clientY,
          }),
        }}
      >
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} isMobile={isMobile} />
    </>
  );
}

export default App;
