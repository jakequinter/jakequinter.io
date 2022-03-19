import Link from 'next/link';
import { Canvas } from '@react-three/fiber';

import Container from '@/components/Container';
import LightingSphere from '@/components/webgl/LightingSphere';

export default function WebGL() {
  return (
    <Container>
      <h1 className="text-zinc-900 dark:text-zinc-50 text-5xl mb-8 font-semibold">
        WebGL and Three.js playground
      </h1>
      <Link href="/webgl/lighting" passHref>
        <div className="bg-zinc-100 dark:bg-black rounded-2xl w-64 hover:cursor-pointer shadow-lg hover:shadow-xl">
          <h2 className="text-zinc-900 dark:text-zinc-300 text-center text-xl p-4">
            Lighting
          </h2>
          <div className="h-64">
            <Canvas camera={{ position: [0, 0, 2] }}>
              <pointLight position={[2, 3, 4]} color="#fff" />
              <LightingSphere />
            </Canvas>
          </div>
        </div>
      </Link>
    </Container>
  );
}
