import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { Experience } from '@App/components/Experiece'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Canvas >
        <Experience />
      </Canvas>
    </>
  )
}
