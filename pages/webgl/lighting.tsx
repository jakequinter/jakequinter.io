import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ArrowLeftIcon } from '@modulz/radix-icons';

import LightingSphere from '@/components/webgl/LightingSphere';

export default function Lighting() {
  return (
    <div className="h-screen bg-zinc-900">
      <Link href="/webgl" passHref>
        <a className="absolute top-10 left-10 text-zinc-500 inline-flex items-center cursor-pointer hover:text-zinc-600 z-10">
          <ArrowLeftIcon className="mr-4 h-5 w-4" /> Go back
        </a>
      </Link>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <pointLight position={[2, 3, 4]} color="#fff" />
        <LightingSphere />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
