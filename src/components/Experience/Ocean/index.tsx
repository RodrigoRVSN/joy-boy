
import { shaderMaterial } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import * as THREE from 'three'
import oceanFragmentShader from './shaders/fragment'
import oceanVertexShader from './shaders/vertex'

const WORLD_SIZE = 10000

const OceanMaterial = shaderMaterial({
  uTime: 0,
  uColorStart: new THREE.Color('#0096c7'),
  uColorEnd: new THREE.Color('#023e8a')
}, oceanVertexShader, oceanFragmentShader)

extend({ OceanMaterial })

declare module '@react-three/fiber' {
  interface ThreeElements {
    oceanMaterial: unknown
  }
}

export const Ocean = () => {
  const oceanMaterial = useRef<{ uTime: number }>(null)

  useFrame((_, delta) => {
    oceanMaterial.current!.uTime += delta
  })

  return (
    <RigidBody type='fixed'>
      <mesh
        scale={WORLD_SIZE}
        receiveShadow
        rotation-x={-Math.PI * 0.5}
        position-y={0}
      >
        <planeGeometry />

        <oceanMaterial ref={oceanMaterial} />
      </mesh>
    </RigidBody>
  )
}
