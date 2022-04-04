import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import galaxyShaderMaterial from './GalaxyShader';

const Floor = (props) => {
    const texture = useTexture('/textures/sky.jpg');
    return (
        <mesh {...props} recieveShadow={true}>
          <boxBufferGeometry args={[30,1,30]} />
          <meshPhysicalMaterial color='white' />
          <galaxyShaderMaterial attach="material" uColor={"hotpink"} uTexture={texture}/>
        </mesh>
    )
}

export default Floor