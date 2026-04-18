import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useMemo, Suspense } from 'react'
import * as THREE from 'three'
import { useScroll, useTransform, useSpring } from 'motion/react'

function Knot({ scroll }: { scroll: ReturnType<typeof useSpring> }) {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.15
    mesh.current.rotation.y += delta * 0.2
    const s = scroll.get()
    mesh.current.scale.setScalar(1 + s * 0.4)
    mesh.current.position.y = -s * 1.5
    const t = state.clock.getElapsedTime()
    mesh.current.position.x = Math.sin(t * 0.3) * 0.2
  })

  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={mesh} castShadow>
        <torusKnotGeometry args={[1.1, 0.36, 240, 32]} />
        <MeshDistortMaterial
          color="#ffffff"
          roughness={0.15}
          metalness={0.95}
          distort={0.35}
          speed={1.4}
        />
      </mesh>
    </Float>
  )
}

function Particles({ count = 800 }: { count?: number }) {
  const points = useRef<THREE.Points>(null!)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (!points.current) return
    points.current.rotation.y += delta * 0.03
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export function HeroScene() {
  const { scrollYProgress } = useScroll()
  const scroll = useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 1]), {
    damping: 30,
    stiffness: 120,
  })

  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 6, 14]} />

      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 5, 5]} intensity={1.6} color="#ffffff" />
      <directionalLight position={[-5, -2, -3]} intensity={0.7} color="#a0a0a0" />

      <Suspense fallback={null}>
        <Knot scroll={scroll} />
        <Particles />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  )
}
