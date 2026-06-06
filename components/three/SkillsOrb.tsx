"use client";

import { useRef, useState, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { skillGroups } from "@/lib/data";

const ALL_SKILLS = skillGroups.flatMap((g) => g.skills);

// Evenly distribute points on a sphere using Fibonacci lattice
function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    pts.push(
      new THREE.Vector3(
        r * Math.cos(theta) * radius,
        y * radius,
        r * Math.sin(theta) * radius,
      ),
    );
  }
  return pts;
}

// Single skill node: glowing dot + HTML label
function SkillNode({
  position,
  label,
  groupRotation,
}: {
  position: THREE.Vector3;
  label: string;
  groupRotation: React.MutableRefObject<THREE.Euler>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();

  useFrame(() => {
    if (!meshRef.current) return;
    // Recalculate front/back dynamically based on current rotation
    const worldPos = position.clone();
    worldPos.applyEuler(groupRotation.current);
    const camDir = camera.position.clone().normalize();
    const dot = worldPos.normalize().dot(camDir);
    const opacity = THREE.MathUtils.clamp(dot * 2 + 0.5, 0, 1);
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity = hovered
      ? 1
      : opacity * 0.8 + 0.1;
  });

  return (
    <group position={position}>
      {/* Dot */}
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[hovered ? 0.075 : 0.055, 12, 12]} />
        <meshBasicMaterial
          color={hovered ? "#C9A96E" : "#888888"}
          transparent
          opacity={0.8}
          depthWrite={false}
        />
      </mesh>

      {/* HTML label — always readable, no font loading */}
      <Html
        center
        distanceFactor={8}
        style={{
          pointerEvents: "none",
          userSelect: "none",
          transition: "all 0.2s",
          transform: "translateY(-18px)",
          whiteSpace: "nowrap",
        }}
        occlude={false}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            color: hovered ? "#C9A96E" : "#555555",
            letterSpacing: "0.06em",
            transition: "color 0.2s",
            textShadow: hovered ? "0 0 12px rgba(201,169,110,0.6)" : "none",
          }}
        >
          {label}
        </span>
      </Html>
    </group>
  );
}

// Faint wireframe reference sphere
function WireSphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.42, 28, 18]} />
      <meshBasicMaterial color="#1e1e1e" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

// Equator ring accent
function EquatorRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.03;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[2.44, 0.006, 8, 120]} />
      <meshBasicMaterial color="#C9A96E" transparent opacity={0.3} />
    </mesh>
  );
}

// The full rotating group
function TagCloud({
  isDragging,
  dragDelta,
}: {
  isDragging: boolean;
  dragDelta: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const rotationRef = useRef(new THREE.Euler(0.3, 0, 0));
  const velocityRef = useRef({ x: 0, y: 0 });
  const positions = useMemo(() => fibonacciSphere(ALL_SKILLS.length, 2.2), []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (isDragging) {
      // Apply drag delta directly as rotation velocity
      velocityRef.current.x = dragDelta.current.y * 0.012;
      velocityRef.current.y = dragDelta.current.x * 0.012;
      dragDelta.current = { x: 0, y: 0 };
    } else {
      // Auto-rotate + momentum decay
      velocityRef.current.y += 0.00055 * delta;
      velocityRef.current.x *= 0.96;
      velocityRef.current.y *= 0.9945;
    }

    rotationRef.current.x += velocityRef.current.x;
    rotationRef.current.y += velocityRef.current.y;

    groupRef.current.rotation.x = rotationRef.current.x;
    groupRef.current.rotation.y = rotationRef.current.y;
  });

  return (
    <group ref={groupRef}>
      <WireSphere />
      <EquatorRing />
      {ALL_SKILLS.map((skill, i) => (
        <SkillNode
          key={skill}
          position={positions[i]}
          label={skill}
          groupRotation={rotationRef}
        />
      ))}
    </group>
  );
}

export default function SkillsOrb() {
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragDelta = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => setMounted(true), []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      dragDelta.current = {
        x: e.clientX - lastPos.current.x,
        y: e.clientY - lastPos.current.y,
      };
      lastPos.current = { x: e.clientX, y: e.clientY };
    },
    [isDragging],
  );

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      dragDelta.current = {
        x: e.touches[0].clientX - lastPos.current.x,
        y: e.touches[0].clientY - lastPos.current.y,
      };
      lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    },
    [isDragging],
  );

  if (!mounted)
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          color: "var(--text-muted)",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
        }}
      >
        loading...
      </div>
    );

  return (
    <div
      className="w-full h-full"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onMouseUp}
    >
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#C9A96E" />
        <TagCloud isDragging={isDragging} dragDelta={dragDelta} />
      </Canvas>
    </div>
  );
}
