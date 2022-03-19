export default function LightingSphere() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#059669" transparent />
    </mesh>
  );
}
