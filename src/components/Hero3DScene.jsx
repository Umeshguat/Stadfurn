import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

/* ── Bright golden particles ── */
function GoldParticles({ count = 350 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.03
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.015) * 0.15
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#f0d080"
        size={0.08}
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/* ── Bright wireframe building structure ── */
function WireframeStructure() {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.06) * 0.2
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
  })

  return (
    <group ref={groupRef} position={[3, 0.5, -1]}>
      <mesh>
        <boxGeometry args={[2.8, 4, 2.8]} />
        <meshStandardMaterial
          color="#C9A961"
          wireframe
          transparent
          opacity={0.45}
          emissive="#C9A961"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.8, 3, 1.8]} />
        <meshStandardMaterial
          color="#d4bc82"
          wireframe
          transparent
          opacity={0.3}
          emissive="#C9A961"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0, 2.8, 0]}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#f0d080"
          wireframe
          transparent
          opacity={0.5}
          emissive="#C9A961"
          emissiveIntensity={0.4}
        />
      </mesh>
      {/* Glowing core */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#C9A961"
          transparent
          opacity={0.6}
          emissive="#C9A961"
          emissiveIntensity={1.5}
        />
      </mesh>
    </group>
  )
}

/* ── Floating geometric orbs - brighter ── */
function FloatingOrb({ position, scale = 1, speed = 1 }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.4 * speed
    ref.current.rotation.z = state.clock.elapsedTime * 0.3 * speed
  })

  return (
    <Float speed={speed * 2} rotationIntensity={0.8} floatIntensity={2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#C9A961"
          wireframe
          transparent
          opacity={0.4}
          emissive="#C9A961"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

/* ── Rotating rings - brighter ── */
function GoldenRing({ position, rotation, size = 1 }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z += 0.008
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.5
  })

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <torusGeometry args={[size, 0.04, 16, 100]} />
      <meshStandardMaterial
        color="#f0d080"
        transparent
        opacity={0.6}
        emissive="#C9A961"
        emissiveIntensity={0.8}
      />
    </mesh>
  )
}

/* ── Pulsing energy sphere ── */
function EnergySphere({ position }) {
  const ref = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    if (!ref.current) return
    const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.15 + 1
    ref.current.scale.set(pulse, pulse, pulse)
    if (glowRef.current) {
      glowRef.current.scale.set(pulse * 1.5, pulse * 1.5, pulse * 1.5)
      glowRef.current.material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.08
    }
  })

  return (
    <group position={position}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#C9A961"
          transparent
          opacity={0.8}
          emissive="#C9A961"
          emissiveIntensity={2}
        />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#C9A961"
          transparent
          opacity={0.15}
          emissive="#f0d080"
          emissiveIntensity={1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

/* ── Orbiting particles around a center ── */
function OrbitingParticles({ center = [0, 0, 0], count = 40, radius = 3 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const r = radius + (Math.random() - 0.5) * 0.5
      arr[i * 3] = Math.cos(angle) * r + center[0]
      arr[i * 3 + 1] = (Math.random() - 0.5) * 1.5 + center[1]
      arr[i * 3 + 2] = Math.sin(angle) * r + center[2]
    }
    return arr
  }, [count, radius, center])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.15
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#f0d080"
        size={0.06}
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/* ── Grid floor - brighter ── */
function GridFloor() {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.z = (state.clock.elapsedTime * 0.3) % 1
  })

  return (
    <group ref={ref} position={[0, -3.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper
        args={[30, 30, '#C9A961', '#C9A961']}
        rotation={[Math.PI / 2, 0, 0]}
        material-transparent
        material-opacity={0.08}
      />
    </group>
  )
}

/* ── Connection lines - brighter ── */
function ConnectionLines() {
  const ref = useRef()
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i < 12; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8
        )
      )
    }
    return pts
  }, [])

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = []
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 7) {
          positions.push(points[i].x, points[i].y, points[i].z)
          positions.push(points[j].x, points[j].y, points[j].z)
        }
      }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    return geometry
  }, [points])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.02
  })

  return (
    <lineSegments ref={ref} geometry={lineGeometry}>
      <lineBasicMaterial color="#C9A961" transparent opacity={0.15} />
    </lineSegments>
  )
}

/* ── Scanning beam effect ── */
function ScanBeam() {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 4
    ref.current.material.opacity = 0.03 + Math.sin(state.clock.elapsedTime * 1.5) * 0.02
  })

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 0.05]} />
      <meshBasicMaterial
        color="#C9A961"
        transparent
        opacity={0.05}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

/* ── Main 3D Scene ── */
export default function Hero3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 65 }}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 2,
        pointerEvents: 'none',
      }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      {/* Stronger lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#C9A961" />
      <pointLight position={[-5, 3, 2]} intensity={0.8} color="#C9A961" distance={15} />
      <pointLight position={[5, -3, -2]} intensity={0.5} color="#ffffff" distance={12} />
      <pointLight position={[0, 0, 5]} intensity={0.3} color="#f0d080" distance={10} />

      {/* 3D Elements */}
      <GoldParticles count={350} />
      <WireframeStructure />
      <FloatingOrb position={[-4, 2, -2]} scale={0.8} speed={0.8} />
      <FloatingOrb position={[5, -2, -3]} scale={0.5} speed={1.2} />
      <FloatingOrb position={[-3, -1.5, 1]} scale={0.5} speed={0.6} />
      <FloatingOrb position={[2, 3, -2]} scale={0.4} speed={1} />
      <GoldenRing position={[3.5, 2.5, -2]} rotation={[0.5, 0.3, 0]} size={1.8} />
      <GoldenRing position={[-4.5, -1, -1]} rotation={[1, 0.5, 0]} size={1.2} />
      <GoldenRing position={[0, -2, -3]} rotation={[0.3, 1, 0.5]} size={2.2} />
      <EnergySphere position={[-5, 2.5, -2]} />
      <EnergySphere position={[6, -1, -3]} />
      <OrbitingParticles center={[3, 0.5, -1]} count={50} radius={3.5} />
      <GridFloor />
      <ConnectionLines />
      <ScanBeam />
    </Canvas>
  )
}
