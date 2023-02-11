import { KeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import { Experience } from '@App/components/Experience'
import { SplashScreen } from '@App/components/Loading'
import { keyboardMap } from '@App/core/utils/keyboardMap'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfólio 🦜 - Rodrigo Victor</title>
      </Head>

      <KeyboardControls map={keyboardMap}>
        <Canvas shadows>
          <Perf />

          <Suspense fallback={<SplashScreen />}>
            <Experience />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </>
  )
}
