"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";

function InteractiveOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Slower, smoother cursor tracking (lerp factor 0.025 vs 0.05 before)
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      pointer.y * 0.15,
      0.012
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      pointer.x * 0.15 + t * 0.008, // near-idle auto-rotate
      0.012
    );
    // Slower breathing (0.4 vs 0.8)
    meshRef.current.scale.setScalar(1 + Math.sin(t * 0.18) * 0.018);
  });

  return (
    <Sphere ref={meshRef} args={[1.8, 128, 128]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#C9A96E"
        attach="material"
        distort={0.22}   /* less aggressive distortion */
        speed={0.6}       /* was 1.4 */
        roughness={0.15}
        metalness={0.9}
        envMapIntensity={1.2}
        transparent
        opacity={0.85}
      />
    </Sphere>
  );
}

function CoreGlow() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.scale.setScalar(0.5 + Math.sin(t * 0.5) * 0.06); // slower
  });
  return (
    <Sphere ref={meshRef} args={[0.9, 32, 32]} position={[0, 0, 0]}>
      <meshBasicMaterial color="#C9A96E" transparent opacity={0.1} />
    </Sphere>
  );
}

function OrbitRing() {
  const ref = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = t * 0.025; // was 0.18
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      Math.PI / 2.5 + pointer.y * 0.12,
      0.01
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      pointer.x * 0.12,
      0.02
    );
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.6, 0.007, 16, 200]} />
      <meshBasicMaterial color="#C9A96E" transparent opacity={0.28} />
    </mesh>
  );
}

function OrbParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 500;

  const { positions, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      phases[i] = Math.random() * Math.PI * 2;
    }
    return { positions, phases };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const ox = positions[i * 3];
      const oy = positions[i * 3 + 1];
      const oz = positions[i * 3 + 2];
      const s = 0.025 * Math.sin(t * 0.25 + phases[i]); // slower drift
      pos[i * 3]     = ox + ox * s;
      pos[i * 3 + 1] = oy + oy * s * 0.8;
      pos[i * 3 + 2] = oz + oz * s;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y = t * 0.008;
  });

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));
    return g;
  }, [positions]);

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial color="#C9A96E" size={0.022} sizeAttenuation transparent opacity={0.45} depthWrite={false} />
    </points>
  );
}

function BackgroundStars() {
  return <Stars radius={80} depth={50} count={1800} factor={2} saturation={0} fade speed={0.06} />;
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent", pointerEvents: "auto" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.6} color="#C9A96E" />
        <pointLight position={[-8, -8, -8]} intensity={0.5} color="#4466ff" />
        <spotLight position={[0, 12, 0]} angle={0.4} intensity={0.8} color="#ffffff" />
        <BackgroundStars />
        <CoreGlow />
        <InteractiveOrb />
        <OrbitRing />
        <OrbParticles />
      </Canvas>
    </div>
  );
}
