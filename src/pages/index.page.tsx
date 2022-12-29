import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { Experience } from '@App/components/Experience'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfólio - Rodrigo Victor</title>
      </Head>

      <Canvas shadows>
        <Experience />
      </Canvas>
    </>
  )
}
