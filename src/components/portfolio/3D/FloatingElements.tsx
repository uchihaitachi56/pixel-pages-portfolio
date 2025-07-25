import { Canvas } from "@react-three/fiber";
import { Float, Sphere, Box, Torus } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AnimatedSphere = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </Sphere>
    </Float>
  );
};

const AnimatedBox = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <Box ref={meshRef} position={position} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </Box>
    </Float>
  );
};

const AnimatedTorus = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <Torus ref={meshRef} position={position} args={[0.6, 0.2, 16, 100]}>
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </Torus>
    </Float>
  );
};

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />
        
        <AnimatedSphere position={[-4, 2, -2]} color="#3b82f6" />
        <AnimatedBox position={[4, -2, -1]} color="#8b5cf6" />
        <AnimatedTorus position={[-3, -3, -3]} color="#f97316" />
        <AnimatedSphere position={[3, 3, -4]} color="#ec4899" />
        <AnimatedBox position={[0, -4, -2]} color="#06b6d4" />
      </Canvas>
    </div>
  );
};

export default FloatingElements;