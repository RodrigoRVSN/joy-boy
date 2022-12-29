import { KeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { Experience } from '@App/components/Experience'
import { keyboardMap } from '@App/core/utils/keyboardMap'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfólio - Rodrigo Victor</title>
      </Head>

      <KeyboardControls map={keyboardMap}>
        <Canvas shadows>
          <Experience />
        </Canvas>
      </KeyboardControls>
    </>
  )
}
