import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { PorscheCar } from './PorscheCar';
import { FloatingRoses } from './FloatingRoses';
import { DreamyParticles } from './DreamyParticles';
import { VintageFrame } from './VintageFrame';
import { AlbumCovers } from './AlbumCovers';

import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-pink-500 text-xl font-bold animate-pulse whitespace-nowrap">
        Loading {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

export function Scene() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-pink-950 via-rose-900 to-black">
      <Canvas
        camera={{ position: [4, 1.5, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={1.2} />
          <pointLight position={[8, 5, 8]} intensity={3.5} color="#ffffff" />
          <pointLight position={[-8, 5, -8]} intensity={2} color="#ffc0cb" />
          <pointLight position={[0, 8, 0]} intensity={2.5} color="#ffffff" />
          <spotLight
            position={[5, 8, 5]}
            angle={0.4}
            penumbra={1}
            intensity={4}
            color="#ff69b4"
            castShadow
          />
          <directionalLight position={[10, 8, 10]} intensity={1.8} color="#ffffff" castShadow />
          <directionalLight position={[-10, 8, -10]} intensity={1.2} color="#ffc0cb" castShadow />

          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          <Sparkles
            count={100}
            scale={10}
            size={3}
            speed={0.3}
            color="#ff69b4"
          />

          <PorscheCar />
          <AlbumCovers />
          <FloatingRoses />
          <DreamyParticles />
          <VintageFrame />

          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxDistance={15}
            minDistance={3}
            autoRotate={false}
            maxPolarAngle={Math.PI * 0.45}
          />

          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
