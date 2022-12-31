import { Float, Text, useGLTF } from '@react-three/drei'
import { Object3DProps } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useEffect, useState } from 'react'
import { BufferGeometry } from 'three'

type GenericIslandProps = {
  objectUrl: string
  islandNumber: number
  position: Object3DProps['position']
  title: string
  rotationY: number
  onClickObject: () => void
}

type Geometry = {
  geometry: BufferGeometry
}

export const GenericIsland = ({
  objectUrl,
  islandNumber = 1,
  position,
  title,
  rotationY,
  onClickObject
}: GenericIslandProps) => {
  const [isHovering, setIsHovering] = useState(false)

  const object = useGLTF(objectUrl)
  const { nodes, materials } = useGLTF(`/assets/islands/island-${islandNumber}.glb`)

  useEffect(() => {
    document.body.style.cursor = isHovering ? 'pointer' : 'auto'
  }, [isHovering])

  return (
    <RigidBody
      type='fixed'
      colliders='hull'
      position={position}
      restitution={0.2}
    >
      <Float>
        <Text
          font='/fonts/bangers-regular.woff'
          position-y={10}
          fontSize={3}
          color='salmon'
        >
          {title}
        </Text>
      </Float>

      <group
        scale={1}
      >
        {nodes.island.children.map(mesh => (
          <mesh
            key={mesh.id}
            position={[10, 0, 0]}
            geometry={(mesh as unknown as Geometry).geometry}
            material={materials.material}
          />
        ))}
      </group>

      <primitive
        rotation-y={rotationY}
        scale={3}
        object={object.scene}
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={() => setIsHovering(false)}
        onClick={onClickObject}
      />

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
