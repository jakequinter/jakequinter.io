import { useRef } from 'react';
import { Box as NativeBox } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

type Props = {
  position: [number, number, number];
  theme: string | undefined;
};

export default function Box({ position, theme }: Props) {
  const mesh = useRef<THREE.Mesh>();

  useFrame(() => {
    if (mesh.current) {
      return (mesh.current.rotation.x = mesh.current.rotation.y += 0.01);
    }
  });

  return (
    <NativeBox
      args={[1, 1, 1]}
      position={position}
      ref={mesh}
      scale={[25, 25, 25]}
    >
      <meshStandardMaterial color={theme === 'dark' ? '#3f3f46' : '#e4e4e7'} />
    </NativeBox>
  );
}
