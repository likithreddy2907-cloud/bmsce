import { Canvas } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ScrollHero3D() {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to rotation and scale
  const rotationX = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 0.8]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-bms-nearBlack to-black opacity-80 z-0">
        <div className="w-full h-full bg-[url('/hero.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#c8102E" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#bea65b" />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <motion.mesh 
            rotation-x={rotationX} 
            rotation-y={rotationY}
            scale={scale}
          >
            <icosahedronGeometry args={[1.5, 2]} />
            <MeshDistortMaterial 
              color="#c8102E" 
              emissive="#bea65b"
              emissiveIntensity={0.2}
              wireframe={true}
              distort={0.4} 
              speed={2} 
            />
          </motion.mesh>
        </Float>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
