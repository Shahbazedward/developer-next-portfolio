"use client";

import {
  Float,
  RoundedBox,
  Sparkles,
} from "@react-three/drei";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  useMemo,
  useRef,
} from "react";

import * as THREE from "three";

/* =========================================================
   DATA PARTICLES
========================================================= */

function DataNodes() {
  const nodes = useMemo(
    () => [
      [-2.05, 1.45, 0.1],
      [2.0, 1.05, -0.15],
      [-1.8, 0.15, 0.4],
      [1.85, -0.2, 0.2],
      [-1.7, -1.25, -0.1],
      [1.7, -1.55, 0.35],
    ],
    [],
  );

  return (
    <>
      {nodes.map((position, index) => (
        <mesh
          key={index}
          position={position as [number, number, number]}
        >
          <sphereGeometry args={[0.045, 16, 16]} />

          <meshBasicMaterial
            color={
              index % 2 === 0
                ? "#8268ff"
                : "#31d7ff"
            }
          />
        </mesh>
      ))}
    </>
  );
}

/* =========================================================
   VERTICAL DATA BEAMS
========================================================= */

function DataBeams() {
  return (
    <>
      {[-1.15, 0, 1.15].map((x, index) => (
        <mesh
          key={x}
          position={[
            x,
            0,
            -0.18,
          ]}
        >
          <boxGeometry
            args={[
              0.018,
              3.85,
              0.018,
            ]}
          />

          <meshBasicMaterial
            color={
              index === 1
                ? "#7d61ff"
                : "#25d9ff"
            }
            transparent
            opacity={
              index === 1
                ? 0.28
                : 0.13
            }
          />
        </mesh>
      ))}
    </>
  );
}

/* =========================================================
   SCANNING LIGHT
========================================================= */

function Scanner() {
  const scan = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!scan.current) return;

    const t =
      (Math.sin(
        state.clock.elapsedTime * 1.3,
      ) +
        1) /
      2;

    scan.current.position.y =
      THREE.MathUtils.lerp(
        -1.7,
        1.7,
        t,
      );
  });

  return (
    <mesh
      ref={scan}
      position={[
        0,
        0,
        0.62,
      ]}
    >
      <planeGeometry
        args={[
          3.45,
          0.018,
        ]}
      />

      <meshBasicMaterial
        color="#7c5cff"
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

/* =========================================================
   CORE CHIP
========================================================= */

function CoreChip() {
  const chip =
    useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!chip.current) return;

    const pulse =
      1 +
      Math.sin(
        state.clock.elapsedTime * 2,
      ) *
        0.025;

    chip.current.scale.setScalar(
      pulse,
    );
  });

  return (
    <group
      ref={chip}
      position={[
        0,
        0.08,
        0.72,
      ]}
    >
      <RoundedBox
        args={[
          1.05,
          1.05,
          0.16,
        ]}
        radius={0.14}
        smoothness={5}
      >
        <meshStandardMaterial
          color="#120d26"
          emissive="#633cff"
          emissiveIntensity={1.8}
          roughness={0.18}
          metalness={0.86}
        />
      </RoundedBox>

      <RoundedBox
        args={[
          0.62,
          0.62,
          0.2,
        ]}
        radius={0.11}
        smoothness={5}
        position={[
          0,
          0,
          0.12,
        ]}
      >
        <meshStandardMaterial
          color="#8b73ff"
          emissive="#7454ff"
          emissiveIntensity={2.5}
          roughness={0.15}
          metalness={0.9}
        />
      </RoundedBox>

      {/* CHIP CONNECTIONS */}

      {[
        [-0.72, 0],
        [0.72, 0],
        [0, 0.72],
        [0, -0.72],
      ].map(
        (
          [x, y],
          index,
        ) => (
          <mesh
            key={index}
            position={[
              x,
              y,
              0.06,
            ]}
          >
            <boxGeometry
              args={
                x === 0
                  ? [
                      0.045,
                      0.36,
                      0.045,
                    ]
                  : [
                      0.36,
                      0.045,
                      0.045,
                    ]
              }
            />

            <meshBasicMaterial
              color={
                index % 2 === 0
                  ? "#8b70ff"
                  : "#27d9ff"
              }
              transparent
              opacity={0.8}
            />
          </mesh>
        ),
      )}
    </group>
  );
}

/* =========================================================
   ARCHITECTURE LAYERS
========================================================= */

function ArchitectureLayers() {
  return (
    <>
      {/* FRONTEND LAYER */}

      <group
        position={[
          0,
          1.48,
          0,
        ]}
      >
        <RoundedBox
          args={[
            3.5,
            0.62,
            0.58,
          ]}
          radius={0.16}
          smoothness={6}
        >
          <meshStandardMaterial
            color="#151221"
            emissive="#6848ff"
            emissiveIntensity={0.72}
            roughness={0.22}
            metalness={0.82}
          />
        </RoundedBox>

        <RoundedBox
          args={[
            2.5,
            0.1,
            0.64,
          ]}
          radius={0.05}
          smoothness={4}
          position={[
            -0.25,
            0,
            0.09,
          ]}
        >
          <meshBasicMaterial
            color="#866eff"
            transparent
            opacity={0.72}
          />
        </RoundedBox>

        <RoundedBox
          args={[
            0.42,
            0.1,
            0.64,
          ]}
          radius={0.05}
          smoothness={4}
          position={[
            1.15,
            0,
            0.09,
          ]}
        >
          <meshBasicMaterial
            color="#31dbff"
            transparent
            opacity={0.85}
          />
        </RoundedBox>
      </group>

      {/* API / SERVER LAYER */}

      <group
        position={[
          0,
          0.15,
          0,
        ]}
      >
        <RoundedBox
          args={[
            3.85,
            0.7,
            0.62,
          ]}
          radius={0.17}
          smoothness={6}
        >
          <meshStandardMaterial
            color="#10101b"
            emissive="#27264f"
            emissiveIntensity={0.6}
            roughness={0.24}
            metalness={0.88}
          />
        </RoundedBox>

        {[-1.3, -0.65, 0.65, 1.3].map(
          (
            x,
            index,
          ) => (
            <mesh
              key={x}
              position={[
                x,
                0,
                0.34,
              ]}
            >
              <boxGeometry
                args={[
                  0.08,
                  0.08,
                  0.04,
                ]}
              />

              <meshBasicMaterial
                color={
                  index % 2 === 0
                    ? "#7d61ff"
                    : "#25d9ff"
                }
              />
            </mesh>
          ),
        )}
      </group>

      {/* DATABASE LAYER */}

      <group
        position={[
          0,
          -1.25,
          0,
        ]}
      >
        <RoundedBox
          args={[
            3.2,
            0.72,
            0.72,
          ]}
          radius={0.18}
          smoothness={6}
        >
          <meshStandardMaterial
            color="#10141c"
            emissive="#134a58"
            emissiveIntensity={0.52}
            roughness={0.2}
            metalness={0.9}
          />
        </RoundedBox>

        <RoundedBox
          args={[
            2.35,
            0.12,
            0.77,
          ]}
          radius={0.05}
          smoothness={4}
          position={[
            0,
            0.16,
            0.06,
          ]}
        >
          <meshBasicMaterial
            color="#24d9ca"
            transparent
            opacity={0.45}
          />
        </RoundedBox>

        <RoundedBox
          args={[
            1.75,
            0.1,
            0.77,
          ]}
          radius={0.05}
          smoothness={4}
          position={[
            -0.3,
            -0.14,
            0.06,
          ]}
        >
          <meshBasicMaterial
            color="#36cfff"
            transparent
            opacity={0.35}
          />
        </RoundedBox>
      </group>
    </>
  );
}

/* =========================================================
   MAIN SYSTEM
========================================================= */

function ArchitectureCore() {
  const group =
    useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const targetY =
      state.pointer.x * 0.22;

    const targetX =
      -state.pointer.y * 0.1;

    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetY,
        0.04,
      );

    group.current.rotation.x =
      THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.04,
      );
  });

  return (
    <Float
      speed={1.15}
      rotationIntensity={0.06}
      floatIntensity={0.28}
    >
      <group
        ref={group}
        rotation={[
          -0.07,
          -0.12,
          0,
        ]}
      >
        <ArchitectureLayers />

        <DataBeams />

        <DataNodes />

        <CoreChip />

        <Scanner />

        {/* BACKPLATE */}

        <RoundedBox
          args={[
            4.6,
            4.6,
            0.18,
          ]}
          radius={0.35}
          smoothness={8}
          position={[
            0,
            0,
            -0.48,
          ]}
        >
          <meshPhysicalMaterial
            color="#090811"
            metalness={0.88}
            roughness={0.18}
            transparent
            opacity={0.78}
            transmission={0.04}
          />
        </RoundedBox>

        {/* EDGE LIGHT */}

        <RoundedBox
          args={[
            4.34,
            4.34,
            0.21,
          ]}
          radius={0.31}
          smoothness={8}
          position={[
            0,
            0,
            -0.45,
          ]}
        >
          <meshBasicMaterial
            color="#765cff"
            transparent
            opacity={0.035}
            wireframe
          />
        </RoundedBox>
      </group>
    </Float>
  );
}

/* =========================================================
   CANVAS
========================================================= */

export default function TechMonolith() {
  return (
    <Canvas
      camera={{
        position: [
          0,
          0.15,
          7.5,
        ],
        fov: 43,
        near: 0.1,
        far: 100,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference:
          "high-performance",
      }}
    >
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[
          3,
          5,
          5,
        ]}
        intensity={3}
        color="#ffffff"
      />

      <pointLight
        position={[
          4,
          3,
          4,
        ]}
        intensity={11}
        color="#765cff"
      />

      <pointLight
        position={[
          -4,
          -2,
          3,
        ]}
        intensity={7}
        color="#29d5ff"
      />

      <ArchitectureCore />

      <Sparkles
        count={45}
        scale={[
          5.5,
          5,
          3,
        ]}
        size={1.1}
        speed={0.16}
        opacity={0.28}
        color="#9781ff"
      />
    </Canvas>
  );
}