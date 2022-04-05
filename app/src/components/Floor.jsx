import React, {useRef} from 'react'
import {useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import galaxyShaderMaterial from './GalaxyShader';

const Floor = (props) => {
    const ref = useRef()
    const mesh = useRef();
    const texture = useTexture('/textures/sky.jpg');
    useFrame(({clock}) => {ref.current.time = clock.getElapsedTime()});
    console.log(ref)
    return (
        <mesh ref={mesh} scale={props.scale} {...props} recieveShadow={true}>
          <boxBufferGeometry args={[45,0,60]} />
          <meshPhysicalMaterial color='white' />
          <galaxyShaderMaterial ref={ref} attach="material" uTexture={texture}/>
        </mesh>
    )
}

export default Floor