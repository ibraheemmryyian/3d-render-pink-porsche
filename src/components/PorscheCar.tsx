import { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';

export function PorscheCar() {
  const { scene } = useGLTF('/porsche_911_gt3.glb');

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as Mesh).isMesh) {
          const mesh = child as Mesh;
          if (mesh.material && Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => {
              const material = mat as MeshStandardMaterial;
              const hex = material.color.getHex();

              const r = (hex >> 16) & 255;
              const g = (hex >> 8) & 255;
              const b = hex & 255;

              const isOrange = r > 180 && g > 80 && g < 150 && b < 100;

              if (isOrange) {
                material.color.set('#5a0f0f');
                material.metalness = 0.8;
                material.roughness = 0.15;
              }
            });
          } else if (mesh.material) {
            const material = mesh.material as MeshStandardMaterial;
            const hex = material.color.getHex();

            const r = (hex >> 16) & 255;
            const g = (hex >> 8) & 255;
            const b = hex & 255;

            const isOrange = r > 180 && g > 80 && g < 150 && b < 100;

            if (isOrange) {
              material.color.set('#5a0f0f');
              material.metalness = 0.8;
              material.roughness = 0.15;
            }
          }
          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
      });
    }
  }, [scene]);


  return (
    <group position={[0, -0.5, 0]}>
      <primitive
        object={scene}
        scale={1.5}
      />
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[200, 0.5, 200]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/porsche_911_gt3.glb');
