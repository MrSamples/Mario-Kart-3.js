import { Environment, OrbitControls, PerspectiveCamera, Lightformer } from '@react-three/drei'
import { Ground } from './Ground'
import { RigidBody } from '@react-three/rapier'
import { PlayerController } from './PlayerController'
import { Track } from './models/Spafrancorchamps-REALISTIC'
import { Paris } from './models/Tour_paris_promenade'
import { EffectComposer, N8AO, Bloom, DepthOfField, TiltShift2, HueSaturation, SMAA } from '@react-three/postprocessing'

export const Experience = () => {
  return (
    <>
      <PlayerController />
      <Ground position={[0, 0, 0]} />
      <Environment
        resolution={256}
        preset='lobby'
      />

      <directionalLight
        position={[10, 50, -30]}
        intensity={1}
        shadow-bias={-0.0001}
        shadow-mapSize={[4096, 4096]}
        shadow-camera-left={-300}
        shadow-camera-right={300}
        shadow-camera-top={300}
        shadow-camera-bottom={-3000}
        castShadow
      />

      {/* <ambientLight intensity={0.2} /> */}
      {/* <spotLight position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} /> */}
      <Paris position={[0, 0, 0]} />
      <EffectComposer
        multisampling={0}
        disableNormalPass
      >
        <SMAA />
        {/* <N8AO distanceFalloff={1} aoRadius={1} intensity={4} /> */}
        <Bloom
          luminanceThreshold={0}
          mipmapBlur
          luminanceSmoothing={0.01}
          intensity={0.5}
        />
        <DepthOfField
          target={[0, 0, 13]}
          focalLength={0.3}
          bokehScale={20}
          // height={700}
          resolutionScale={0.3}
        />
        {/* <TiltShift2/> */}
        <HueSaturation saturation={0.1} />
      </EffectComposer>
    </>
  )
}
