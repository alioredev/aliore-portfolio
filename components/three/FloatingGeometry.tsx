"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Octahedron, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

type ShapeType = "icosahedron" | "octahedron";

function FloatingShape({
  position,
  speed,
  phase,
  shape,
}: {
  position: [number, number, number];
  speed: number;
  phase: number;
  shape: ShapeType;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * speed + phase) * 0.25;
    ref.current.rotation.x = t * speed * 0.3;
    ref.current.rotation.y = t * speed * 0.5;
  });

  const material = (
    <MeshWobbleMaterial
      color="#C9A96E"
      factor={0.2}
      speed={1}
      roughness={0.2}
      metalness={0.85}
      transparent
      opacity={0.7}
      wireframe
    />
  );

  if (shape === "icosahedron") {
    return (
      <Icosahedron ref={ref} args={[0.35, 1]} position={position}>
        {material}
      </Icosahedron>
    );
  }
  return (
    <Octahedron ref={ref} args={[0.3]} position={position}>
      {material}
    </Octahedron>
  );
}

const shapes: Array<{
  position: [number, number, number];
  speed: number;
  phase: number;
  shape: ShapeType;
}> = [
  { position: [-3.5, 1, -1], speed: 0.6, phase: 0,   shape: "icosahedron" },
  { position: [3.2, -1, -2], speed: 0.8, phase: 1.5, shape: "octahedron" },
  { position: [-2, -1.5, 0], speed: 0.5, phase: 3,   shape: "octahedron" },
  { position: [2.5, 1.5, -1], speed: 0.7, phase: 2,  shape: "icosahedron" },
];

export default function FloatingGeometry() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#C9A96E" />
        {shapes.map((s, i) => (
          <FloatingShape key={i} {...s} />
        ))}
      </Canvas>
    </div>
  );
}
