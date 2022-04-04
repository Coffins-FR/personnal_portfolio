import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import galaxyShaderMaterial from './GalaxyShader';

const Floor = (props) => {
    const texture = useTexture('/textures/sky.jpg');
    return (
        <mesh {...props} recieveShadow={true}>
          <boxBufferGeometry args={[90,0,90]} />
          <meshPhysicalMaterial color='white' />
        </mesh>
    )
}

export default Floor