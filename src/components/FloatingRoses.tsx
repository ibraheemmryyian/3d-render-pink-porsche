import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

function Rose({ position }: { position: [number, number, number] }) {
  const roseRef = useRef<Group>(null);

  useFrame((state) => {
    if (roseRef.current) {
      roseRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  return (
    <group ref={roseRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#ff1493"
          emissive="#ff69b4"
          emissiveIntensity={0.5}
        />
      </mesh>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI * 2) / 5) * 0.2,
            0,
            Math.sin((i * Math.PI * 2) / 5) * 0.2,
          ]}
          rotation={[Math.PI / 4, 0, (i * Math.PI * 2) / 5]}
        >
          <cylinderGeometry args={[0.15, 0.05, 0.3, 16]} />
          <meshStandardMaterial
            color="#ff69b4"
            emissive="#ff1493"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 1, 8]} />
        <meshStandardMaterial color="#2d5016" />
      </mesh>
    </group>
  );
}

export function FloatingRoses() {
  const positions: [number, number, number][] = [
    [-3, 2, -2],
    [3, 2.5, -1],
    [-2, 3, 2],
    [2.5, 2, 2],
    [-4, 1.5, 0],
    [4, 3, 0],
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <Rose key={i} position={pos} />
      ))}
    </>
  );
}
