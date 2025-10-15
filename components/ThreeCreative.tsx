'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

function Panels(){
  const group = useRef<THREE.Group>(null!);
  const panels = useMemo(() => {
    return new Array(4).fill(0).map((_, i) => ({
      pos: [ (i-1.5)*1.4, (i%2===0?0.4:-0.4), -i*0.2 ] as [number,number,number],
      rot: [0, (i-1)*0.1, (i%2?0.12:-0.12)] as [number,number,number],
      color: i%2? '#7bd7ff' : '#6aa8ff'
    }));
  }, []);
  useFrame((_s, d) => { group.current.rotation.y += d * 0.12; });
  return (
    <group ref={group}>
      {panels.map((p, i) => (
        <Float key={i} floatIntensity={1} rotationIntensity={0.2}>
          <mesh position={p.pos} rotation={p.rot}>
            <boxGeometry args={[1.4, 0.9, 0.02]} />
            <meshPhysicalMaterial transmission={0.9} thickness={0.6} roughness={0.1} clearcoat={1} color={p.color} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function WireSphere(){
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_s, d) => { ref.current.rotation.y += d * 0.25; });
  return (
    <mesh ref={ref} position={[0,0,0]}>
      <icosahedronGeometry args={[1.5, 2]} />
      <meshBasicMaterial wireframe color={'white'} opacity={0.25} transparent />
    </mesh>
  )
}

export default function ThreeCreative(){
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 7], fov: 40 }}>
        <color attach="background" args={['#060608']} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5,5,5]} intensity={1.2} />
        <PresentationControls global polar={[-0.25,0.25]} azimuth={[-0.8,0.8]}>
          <Panels/>
          <WireSphere/>
        </PresentationControls>
        <Environment preset="studio" />
        <Html position={[0,-2.6,0]} center>
          <div className="text-xs text-white/40">Drag - Rotate</div>
        </Html>
      </Canvas>
    </div>
  )
}
