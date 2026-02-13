import { useRef, useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sphere, Cylinder, Box, Torus, Octahedron } from "@react-three/drei";
import * as THREE from "three";

// Material Constants - Defined OUTSIDE component to prevent recreation on every render
const metalMaterial = new THREE.MeshStandardMaterial({
  color: "#888888", // Medium Grey (Lighter)
  metalness: 0.5,
  roughness: 0.2,
});

const glowBlue = new THREE.MeshStandardMaterial({
  color: "#3b82f6",
  emissive: "#3b82f6",
  emissiveIntensity: 2,
  toneMapped: false,
});

const glowCyan = new THREE.MeshStandardMaterial({
  color: "#06b6d4",
  emissive: "#06b6d4",
  emissiveIntensity: 1.5,
  toneMapped: false,
});

const blackGlassMaterial = new THREE.MeshStandardMaterial({
  color: "#000000",
  metalness: 1,
  roughness: 0.1,
});

const darkMetalMaterial = new THREE.MeshStandardMaterial({
  color: "#334155",
  metalness: 0.6,
  roughness: 0.4,
});

const baseRingMaterial = new THREE.MeshBasicMaterial({
  color: "#3b82f6",
  transparent: true,
  opacity: 0.3,
});

const Robot3D = () => {
  const { viewport, size } = useThree();
  const isMobile = viewport.width < 7;
  const isTablet = viewport.width >= 7 && viewport.width < 10;

  const groupRef = useRef<THREE.Group>(null!);
  const headRef = useRef<THREE.Group>(null!);
  const bodyRef = useRef<THREE.Group>(null!);

  // Responsive settings
  const { scale, position } = useMemo(() => {

    // Pixel-to-3D conversion
    // viewport.width is the width of the canvas in 3D units
    // size.width is the width of the canvas in pixels (window width)

    const maxContentWidth = 1280; // max-w-7xl
    const contentWidth = Math.min(size.width, maxContentWidth);

    // We want the robot centered in the right half of the content container
    // Offset from center = contentWidth / 4. User wants it further right -> 0.35
    const pixelOffset = contentWidth * 0.35;

    // Convert to 3D units
    const xPos = (pixelOffset / size.width) * viewport.width;

    if (isMobile) {
      return {
        scale: 0.6,
        // Move to right: x > 0.
        // Try x = 1.8 to nudge it right.
        position: [1.8, 1.3, 0] as [number, number, number]
      };
    }

    if (isTablet) {
      return {
        scale: 0.8,
        position: [xPos, 0.5, 0] as [number, number, number]
      };
    }

    // Desktop
    // STATIC scale allows natural zooming (object gets bigger as viewport shrinks/zooms in)
    return {
      scale: 1.55,
      position: [xPos, 0, 0] as [number, number, number]
    };
  }, [isMobile, isTablet, viewport.width, size.width]);

  // Smooth mouse tracking
  const targetRotation = useRef(new THREE.Vector2(0, 0));
  const mouseRef = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouse = mouseRef.current;

    // 1. Floating Animation (Entire Droid)
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(time * 1) * 0.15;
    }

    // 2. Head Tracking (Look at cursor)
    targetRotation.current.x = THREE.MathUtils.lerp(
      targetRotation.current.x,
      -mouse.y * 0.8,
      0.1,
    );
    targetRotation.current.y = THREE.MathUtils.lerp(
      targetRotation.current.y,
      mouse.x * 0.8,
      0.1,
    );

    if (headRef.current) {
      headRef.current.rotation.x = targetRotation.current.x;
      headRef.current.rotation.y = targetRotation.current.y;
    }

    // 3. Body Idle Animations (Breathing/Rotating parts)
    if (bodyRef.current) {
      bodyRef.current.rotation.y = THREE.MathUtils.lerp(
        bodyRef.current.rotation.y,
        mouse.x * 0.2,
        0.05,
      );
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={[0, -0.2, 0]}
      scale={scale}
    >
      {/* --- HEAD GROUP --- */}
      <group ref={headRef} position={[0, 1.2, 0]}>
        {/* Main Head Shape */}
        <Box args={[0.8, 0.5, 0.6]}>
          <primitive object={metalMaterial} attach="material" />
        </Box>
        {/* Top Dome */}
        <Cylinder args={[0.3, 0.4, 0.2, 32]} position={[0, 0.35, 0]}>
          <primitive object={metalMaterial} attach="material" />
        </Cylinder>

        {/* Face Plate */}
        <Box args={[0.7, 0.3, 0.05]} position={[0, 0, 0.3]}>
          <primitive object={blackGlassMaterial} attach="material" />
        </Box>

        {/* Glowing Eyes */}
        <Sphere args={[0.08]} position={[-0.15, 0, 0.32]}>
          <primitive object={glowCyan} attach="material" />
        </Sphere>
        <Sphere args={[0.08]} position={[0.15, 0, 0.32]}>
          <primitive object={glowCyan} attach="material" />
        </Sphere>

        {/* Side Ears/Antenna borders */}
        <Box args={[0.1, 0.4, 0.4]} position={[0.45, 0, 0]}>
          <primitive object={metalMaterial} attach="material" />
        </Box>
        <Box args={[0.1, 0.4, 0.4]} position={[-0.45, 0, 0]}>
          <primitive object={metalMaterial} attach="material" />
        </Box>
      </group>

      {/* --- NECK --- */}
      <Cylinder args={[0.1, 0.1, 0.4]} position={[0, 0.9, 0]}>
        <primitive object={darkMetalMaterial} attach="material" />
      </Cylinder>

      {/* --- BODY GROUP --- */}
      <group ref={bodyRef} position={[0, 0, 0]}>
        {/* Upper Torso */}
        <Cylinder args={[0.3, 0.6, 0.8, 6]} position={[0, 0.4, 0]}>
          <primitive object={metalMaterial} attach="material" />
        </Cylinder>

        {/* Glowing Core Reactor */}
        <Octahedron args={[0.25]} position={[0, 0.4, 0.35]}>
          <primitive object={glowBlue} attach="material" />
        </Octahedron>

        {/* Floating Ring around Core */}
        <Torus
          args={[0.6, 0.02, 16, 32]}
          rotation={[1.5, 0, 0]}
          position={[0, 0.4, 0]}
        >
          <primitive object={glowBlue} attach="material" />
        </Torus>

        {/* Lower Chassis */}
        <Sphere args={[0.5, 32, 32]} position={[0, -0.2, 0]}>
          <primitive object={metalMaterial} attach="material" />
        </Sphere>

        {/* Stabilizer Fins */}
        <Box
          args={[0.1, 0.4, 0.8]}
          position={[0.6, -0.1, 0]}
          rotation={[0, 0, -0.2]}
        >
          <primitive object={metalMaterial} attach="material" />
        </Box>
        <Box
          args={[0.1, 0.4, 0.8]}
          position={[-0.6, -0.1, 0]}
          rotation={[0, 0, 0.2]}
        >
          <primitive object={metalMaterial} attach="material" />
        </Box>
      </group>

      {/* --- FLOATING BASE EFFECT --- */}
      <Torus
        args={[0.4, 0.05, 16, 32]}
        position={[0, -0.8, 0]}
        rotation={[1.5, 0, 0]}
      >
        <primitive object={baseRingMaterial} attach="material" />
      </Torus>
    </group>
  );
};

export default Robot3D;
