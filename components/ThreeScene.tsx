'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

function GlassSphere(){
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_s, d) => {
    ref.current.rotation.y += d * 0.2;
  });
  return (
    <Float floatIntensity={1} rotationIntensity={0.3}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.4, 2]} />
        <meshPhysicalMaterial
          transmission={0.95}
          thickness={1.2}
          roughness={0.05}
          metalness={0}
          clearcoat={1}
          color={'white'}
        />
      </mesh>
    </Float>
  )
}

function Halo(){
  return (
    <mesh rotation-x={-Math.PI/2} position={[0,-2,0]}>
      <ringGeometry args={[2.2, 2.6, 64]} />
      <meshBasicMaterial color={'white'} transparent opacity={0.06} />
    </mesh>
  )
}

export default function ThreeScene(){
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <color attach="background" args={['#0a0a0a']} />
        <ambientLight intensity={0.25} />
        <directionalLight position={[3,5,4]} intensity={1} />
        <PresentationControls global polar={[-0.2, 0.2]} azimuth={[-0.6, 0.6]}>
          <GlassSphere/>
          <Halo/>
        </PresentationControls>
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}
