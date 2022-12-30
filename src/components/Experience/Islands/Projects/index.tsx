import { Float, Text, useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useEffect, useState } from 'react'

export const Projects = () => {
  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

  computer.scene.children.forEach(mesh => {
    mesh.castShadow = true
  })

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    document.body.style.cursor = isHovering ? 'pointer' : 'auto'
  }, [isHovering])

  return (
    <RigidBody
      type='fixed'
      colliders='hull'
      position={[30, 0, -30]}
      restitution={0.2}
    >
      <Text
        font='/fonts/bangers-regular.woff'
        position-y={10}
        fontSize={3}
        color='salmon'
      >
        Projetos
      </Text>

      <primitive
        rotation-y={-Math.PI / 4}
        scale={3}
        object={computer.scene}
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={() => setIsHovering(false)}
      />

      <mesh scale={[20, 2, 20]} receiveShadow>
        <boxGeometry />
        <meshStandardMaterial color='yellow' />
      </mesh>

      {isHovering && (
        <Float speed={10} floatingRange={[0, 0.5]} >
          <mesh
            scale={[10, 10, 2]}
            position-y={2}
            rotation-x={Math.PI / 2}
            receiveShadow
          >
            <torusGeometry args={[1, 0.05, 16, 32]} />
            <meshStandardMaterial color='cyan' />
          </mesh>
        </Float>
      )}
    </RigidBody>
  )
}
