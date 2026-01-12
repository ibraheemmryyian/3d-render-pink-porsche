import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function VintageFrame() {
  const frame1Ref = useRef<Mesh>(null);
  const frame2Ref = useRef<Mesh>(null);

  useFrame(() => {
    // Static frame, no rotation
  });

  return (
    <group position={[0, 0, -3]}>
      <mesh ref={frame1Ref}>
        <torusGeometry args={[3, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#ffd700"
          emissive="#ffd700"
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh ref={frame2Ref}>
        <torusGeometry args={[3.5, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#ff69b4"
          emissive="#ff69b4"
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}
