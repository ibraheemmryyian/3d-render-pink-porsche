import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { Group } from 'three';

interface AlbumCoverProps {
  position: [number, number, number];
  rotation: [number, number, number];
  frontImage: string;
  backImage: string;
}

function AlbumCover({ position, rotation, frontImage, backImage }: AlbumCoverProps) {
  const coverRef = useRef<Group>(null);
  const frontTexture = useTexture(frontImage);
  const backTexture = useTexture(backImage);

  useFrame((state) => {
    if (coverRef.current) {
      coverRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
      coverRef.current.rotation.y += 0.005;
      coverRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={coverRef} position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={[1.5, 1.5]} />
        <meshStandardMaterial
          map={frontTexture}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0, 0, -0.02]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[1.5, 1.5]} />
        <meshStandardMaterial
          map={backTexture}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
    </group>
  );
}

export function AlbumCovers() {
  const group1 = [
    { pos: [-4, 2, -1], rot: [0, 0.3, 0], front: '/image.png', back: '/image copy.png' },
    { pos: [4, 2.5, -2], rot: [0, -0.3, 0], front: '/image copy.png', back: '/image.png' },
    { pos: [-3, 3, 2], rot: [0, 0.5, 0], front: '/image.png', back: '/image copy.png' },
    { pos: [3.5, 2, 2.5], rot: [0, -0.5, 0], front: '/image copy.png', back: '/image.png' },
  ];

  const group2 = [
    { pos: [0, 3.5, -3], rot: [0, 0, 0], front: '/image.png', back: '/image copy.png' },
    { pos: [-5, 1.5, 0], rot: [0, 0.8, 0], front: '/image copy.png', back: '/image.png' },
    { pos: [5, 1.8, 0.5], rot: [0, -0.8, 0], front: '/image.png', back: '/image copy.png' },
    { pos: [-3.5, 3.5, -2], rot: [0, 0.2, 0], front: '/image copy.png', back: '/image.png' },
  ];

  const group3 = [
    { pos: [3, 3.2, -1.5], rot: [0, -0.4, 0], front: '/image.png', back: '/image copy.png' },
    { pos: [-2, 2.8, 3], rot: [0, 0.6, 0], front: '/image copy.png', back: '/image.png' },
    { pos: [2, 2.2, 3], rot: [0, -0.6, 0], front: '/image.png', back: '/image copy.png' },
    { pos: [0, 1.5, -4], rot: [0, 0.1, 0], front: '/image copy.png', back: '/image.png' },
  ];

  const allCovers = [...group1, ...group2, ...group3];

  return (
    <>
      {allCovers.map((config, i) => (
        <AlbumCover
          key={i}
          position={config.pos}
          rotation={config.rot}
          frontImage={config.front}
          backImage={config.back}
        />
      ))}
    </>
  );
}
