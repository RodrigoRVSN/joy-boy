import { Float, Text, useGLTF } from '@react-three/drei'
import { Object3DProps } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useEffect, useState } from 'react'
import { BufferGeometry, Material } from 'three'

type GenericIslandProps = {
  objectUrl: string
  islandNumber: number
  position: Object3DProps['position']
  title: string
  rotationY?: number
  onClickObject: () => void
  objectScale?: number
}

type Geometry = {
  geometry: BufferGeometry
  material: Material
}

export const GenericIsland = ({
  objectUrl,
  islandNumber = 1,
  position,
  title,
  rotationY = 0,
  onClickObject,
  objectScale = 2
}: GenericIslandProps) => {
  const [isHovering, setIsHovering] = useState(false)

  const object = useGLTF(objectUrl)
  const { nodes } = useGLTF(`/assets/islands/island-${islandNumber}.glb`)

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
            material={(mesh as unknown as Geometry).material}
          />
        ))}
      </group>

      <primitive
        rotation-y={rotationY}
        scale={objectScale}
        object={object.scene}
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={() => setIsHovering(false)}
        onClick={onClickObject}
        position={[0, 1, 0]}
      />

      {isHovering && (
        <Float speed={10} floatingRange={[0, 0.5]} >
          <mesh
            scale={[10, 10, 2]}
            position={[0, 2, 1]}
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
