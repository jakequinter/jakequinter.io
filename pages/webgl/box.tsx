import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from 'next-themes';

import Box from '@/components/webgl/Box';

export default function RotatingBox() {
  const { theme } = useTheme();

  return (
    <Canvas>
      <ambientLight intensity={1} />
      <pointLight position={[20, 20, 20]} />
      <Box position={[0, 0, 0]} theme={theme} />
      <OrbitControls />
    </Canvas>
  );
}
