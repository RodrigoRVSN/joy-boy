import { Text } from '@react-three/drei'
import { useGetProjectsQuery } from '@App/core/graphql/generated'
import { GenericIsland } from '../components/GenericIsland'

export const Projects = () => {
  const { data } = useGetProjectsQuery()

  return (
    <>

      <GenericIsland
        title='Projetos'
        objectUrl='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
        islandNumber={1}
        position={[30, 0, -30]}
        rotationY={-Math.PI / 4}
      />

      <Text
        font='/fonts/bangers-regular.woff'
        position-y={10}
        fontSize={3}
        color='salmon'>
          {data?.projects[0].title}
      </Text>
    </>
  )
}
