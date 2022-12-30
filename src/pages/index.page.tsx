import { KeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { Suspense } from 'react'
import { Experience } from '@App/components/Experience'
import { Loading } from '@App/components/Loading'
import { keyboardMap } from '@App/core/utils/keyboardMap'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfólio - Rodrigo Victor</title>
      </Head>

      <KeyboardControls map={keyboardMap}>
        <Canvas shadows>
          <Suspense fallback={<Loading />}>
            <Experience />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </>
  )
}
