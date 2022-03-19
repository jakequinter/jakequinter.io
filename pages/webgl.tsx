import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from 'next-themes';

import Container from '@/components/Container';
import Box from '@/components/webgl/Box';

export default function WebGL() {
  const { theme } = useTheme();

  return (
    <Container>
      <h1 className="text-zinc-900 dark:text-zinc-50 text-5xl mb-8 font-semibold">
        WebGL and Three.js playground
      </h1>
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={1} />
        <pointLight position={[20, 20, 20]} />
        <Box position={[0, 0, 0]} theme={theme} />
        <OrbitControls />
      </Canvas>
    </Container>
  );
}
