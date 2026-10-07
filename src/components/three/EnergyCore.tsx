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
   KEYBOARD KEYS
========================================================= */

function KeyboardKeys() {
  const keys = useMemo(() => {
    const result: {
      x: number;
      z: number;
      width: number;
      accent?: boolean;
    }[] = [];

    const rows = [
      { count: 12, z: 0.72, offset: 0 },
      { count: 12, z: 0.28, offset: 0.06 },
      { count: 11, z: -0.16, offset: 0.14 },
      { count: 10, z: -0.6, offset: 0.22 },
    ];

    rows.forEach((row, rowIndex) => {
      const spacing = 0.37;

      for (let i = 0; i < row.count; i++) {
        result.push({
          x:
            (i - (row.count - 1) / 2) * spacing +
            row.offset,
          z: row.z,
          width: 0.29,
          accent:
            (rowIndex === 0 && i === 1) ||
            (rowIndex === 2 && i === 8),
        });
      }
    });

    return result;
  }, []);

  return (
    <>
      {keys.map((key, index) => (
        <RoundedBox
          key={index}
          args={[
            key.width,
            0.095,
            0.3,
          ]}
          radius={0.045}
          smoothness={4}
          position={[
            key.x,
            0.16,
            key.z,
          ]}
        >
          <meshStandardMaterial
            color={
              key.accent
                ? "#674cff"
                : "#171722"
            }
            emissive={
              key.accent
                ? "#6547ff"
                : "#0c0c13"
            }
            emissiveIntensity={
              key.accent
                ? 2.2
                : 0.12
            }
            roughness={0.28}
            metalness={0.72}
          />
        </RoundedBox>
      ))}

      {/* SPACE BAR */}
      <RoundedBox
        args={[1.6, 0.095, 0.3]}
        radius={0.05}
        smoothness={4}
        position={[
          0,
          0.16,
          -1.03,
        ]}
      >
        <meshStandardMaterial
          color="#181823"
          roughness={0.27}
          metalness={0.75}
        />
      </RoundedBox>
    </>
  );
}

/* =========================================================
   CODE SCREEN
========================================================= */

function CodeScreen() {
  const cursor = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!cursor.current) return;

    cursor.current.visible =
      Math.sin(state.clock.elapsedTime * 4) > 0;
  });

  const lines = [
    {
      width: 1.3,
      x: -0.65,
      y: 0.64,
      color: "#8a6cff",
    },
    {
      width: 2.1,
      x: -0.25,
      y: 0.34,
      color: "#4c526b",
    },
    {
      width: 1.5,
      x: -0.55,
      y: 0.04,
      color: "#25d9ff",
    },
    {
      width: 2.45,
      x: -0.08,
      y: -0.26,
      color: "#464b62",
    },
    {
      width: 1.75,
      x: -0.42,
      y: -0.56,
      color: "#9a80ff",
    },
  ];

  return (
    <group
      position={[
        0,
        1.58,
        -0.65,
      ]}
      rotation={[
        -0.05,
        0,
        0,
      ]}
    >
      {/* SCREEN FRAME */}

      <RoundedBox
        args={[4.4, 2.65, 0.18]}
        radius={0.18}
        smoothness={6}
      >
        <meshStandardMaterial
          color="#090910"
          roughness={0.2}
          metalness={0.88}
        />
      </RoundedBox>

      {/* DISPLAY */}

      <RoundedBox
        args={[
          3.95,
          2.2,
          0.035,
        ]}
        radius={0.1}
        smoothness={5}
        position={[
          0,
          0,
          0.105,
        ]}
      >
        <meshStandardMaterial
          color="#07070d"
          emissive="#21184a"
          emissiveIntensity={0.23}
          roughness={0.15}
          metalness={0.35}
        />
      </RoundedBox>

      {/* TOP WINDOW DOTS */}

      <mesh
        position={[
          -1.55,
          0.82,
          0.14,
        ]}
      >
        <sphereGeometry
          args={[
            0.055,
            16,
            16,
          ]}
        />

        <meshBasicMaterial color="#ff647c" />
      </mesh>

      <mesh
        position={[
          -1.35,
          0.82,
          0.14,
        ]}
      >
        <sphereGeometry
          args={[
            0.055,
            16,
            16,
          ]}
        />

        <meshBasicMaterial color="#ffd166" />
      </mesh>

      <mesh
        position={[
          -1.15,
          0.82,
          0.14,
        ]}
      >
        <sphereGeometry
          args={[
            0.055,
            16,
            16,
          ]}
        />

        <meshBasicMaterial color="#66e69c" />
      </mesh>

      {/* CODE LINES */}

      {lines.map(
        (
          line,
          index,
        ) => (
          <RoundedBox
            key={index}
            args={[
              line.width,
              0.09,
              0.025,
            ]}
            radius={0.025}
            smoothness={3}
            position={[
              line.x,
              line.y,
              0.145,
            ]}
          >
            <meshBasicMaterial
              color={line.color}
              transparent
              opacity={
                line.color ===
                "#464b62" ||
              line.color ===
                "#4c526b"
                  ? 0.5
                  : 0.9
              }
            />
          </RoundedBox>
        ),
      )}

      {/* SMALL CODE BLOCKS */}

      <RoundedBox
        args={[
          0.42,
          0.09,
          0.025,
        ]}
        radius={0.02}
        position={[
          -1.44,
          0.34,
          0.145,
        ]}
      >
        <meshBasicMaterial color="#ff70b5" />
      </RoundedBox>

      <RoundedBox
        args={[
          0.5,
          0.09,
          0.025,
        ]}
        radius={0.02}
        position={[
          -1.35,
          -0.26,
          0.145,
        ]}
      >
        <meshBasicMaterial color="#72e6aa" />
      </RoundedBox>

      {/* BLINKING CURSOR */}

      <mesh
        ref={cursor}
        position={[
          0.58,
          -0.56,
          0.15,
        ]}
      >
        <boxGeometry
          args={[
            0.035,
            0.17,
            0.018,
          ]}
        />

        <meshBasicMaterial color="#eaeaff" />
      </mesh>

      {/* SCREEN GLOW */}

      <pointLight
        position={[
          0,
          0,
          1.2,
        ]}
        intensity={2.8}
        color="#6547ff"
        distance={4}
      />
    </group>
  );
}

/* =========================================================
   DEVELOPER WORKSTATION
========================================================= */

function DeveloperRig() {
  const group =
    useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const targetY =
      state.pointer.x * 0.2;

    const targetX =
      -0.14 -
      state.pointer.y * 0.08;

    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetY,
        0.035,
      );

    group.current.rotation.x =
      THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.035,
      );
  });

  return (
    <Float
      speed={1.35}
      rotationIntensity={0.08}
      floatIntensity={0.28}
    >
      <group
        ref={group}
        scale={0.82}
        position={[
          0,
          -0.25,
          0,
        ]}
      >
        {/* KEYBOARD BASE */}

        <RoundedBox
          args={[
            4.9,
            0.22,
            2.45,
          ]}
          radius={0.2}
          smoothness={6}
          position={[
            0,
            0,
            0,
          ]}
        >
          <meshStandardMaterial
            color="#0b0b12"
            roughness={0.2}
            metalness={0.88}
          />
        </RoundedBox>

        {/* INNER KEYBOARD PANEL */}

        <RoundedBox
          args={[
            4.45,
            0.08,
            2.05,
          ]}
          radius={0.14}
          smoothness={5}
          position={[
            0,
            0.12,
            0,
          ]}
        >
          <meshStandardMaterial
            color="#10101a"
            roughness={0.32}
            metalness={0.62}
          />
        </RoundedBox>

        <KeyboardKeys />

        {/* FRONT RGB STRIP */}

        <mesh
          position={[
            0,
            -0.02,
            1.25,
          ]}
        >
          <boxGeometry
            args={[
              3.7,
              0.035,
              0.035,
            ]}
          />

          <meshBasicMaterial
            color="#6547ff"
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* SCREEN HINGE */}

        <RoundedBox
          args={[
            2.4,
            0.16,
            0.22,
          ]}
          radius={0.06}
          smoothness={4}
          position={[
            0,
            0.22,
            -1.1,
          ]}
        >
          <meshStandardMaterial
            color="#171720"
            metalness={0.9}
            roughness={0.2}
          />
        </RoundedBox>

        <CodeScreen />
      </group>
    </Float>
  );
}

/* =========================================================
   CANVAS
========================================================= */

export default function EnergyCore() {
  return (
    <Canvas
      camera={{
        position: [
          0,
          1.15,
          7.7,
        ],
        fov: 45,
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
      <ambientLight intensity={0.75} />

      <directionalLight
        position={[4, 6, 5]}
        intensity={3.8}
        color="#ffffff"
      />

      <pointLight
        position={[
          4,
          1,
          3,
        ]}
        intensity={12}
        color="#6547ff"
      />

      <pointLight
        position={[
          -4,
          -1,
          3,
        ]}
        intensity={8}
        color="#20cfff"
      />

      <DeveloperRig />

      <Sparkles
        count={65}
        scale={[
          6,
          5,
          4,
        ]}
        size={1.35}
        speed={0.18}
        opacity={0.38}
        color="#a78bfa"
      />
    </Canvas>
  );
}