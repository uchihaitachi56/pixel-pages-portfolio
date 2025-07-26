import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text3D, Center, OrbitControls, Float } from "@react-three/drei";

const Signature3D = () => {
  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <Center>
        <Text3D
          font="/fonts/signature.json"
          size={1.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          John Doe
          <meshStandardMaterial color="#3b82f6" />
        </Text3D>
      </Center>
    </Float>
  );
};

const SignatureIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [showSignature, setShowSignature] = useState(false);
  const [signatureComplete, setSignatureComplete] = useState(false);
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // Start signature animation
    const timer1 = setTimeout(() => setShowSignature(true), 500);
    
    // Complete signature
    const timer2 = setTimeout(() => setSignatureComplete(true), 3000);
    
    // Show 3D name
    const timer3 = setTimeout(() => setShow3D(true), 3500);
    
    // Transition to main portfolio
    const timer4 = setTimeout(() => onComplete(), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-hero flex items-center justify-center">
      {/* Signature Animation */}
      <div className="text-center">
        {showSignature && (
          <div className="mb-8">
            <svg
              width="400"
              height="120"
              viewBox="0 0 400 120"
              className="mx-auto"
            >
              <path
                d="M20 80 Q40 20 60 80 T100 80 M120 80 Q140 20 160 80 T200 80 M220 40 L240 80 L260 40 M280 80 Q300 20 320 80 T360 80"
                stroke="hsl(var(--signature-blue))"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`signature-path ${signatureComplete ? 'complete' : ''}`}
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: showSignature ? 0 : 1000,
                  transition: 'stroke-dashoffset 2.5s ease-in-out',
                  filter: 'drop-shadow(0 0 10px hsl(var(--signature-blue)))'
                }}
              />
            </svg>
          </div>
        )}

        {/* 3D Name */}
        {show3D && (
          <div className="h-40 animate-fade-in">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Signature3D />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        )}

        {signatureComplete && (
          <div className="animate-fade-in">
            <p className="text-xl text-muted-foreground mt-4">
              Welcome to my portfolio
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse mx-2" style={{animationDelay: '0.2s'}} />
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignatureIntro;