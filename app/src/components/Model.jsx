import React, {Suspense, useRef} from 'react'
import {useGLTF} from "@react-three/drei";
import galaxyShaderMaterial from './GalaxyShader';

const GLTF = (props) => {
    let model = useGLTF(props.url, true);
    return <primitive object={model.scene} />;
  }

const Model = (props) => {
    const ref = useRef();
    let model = useGLTF(props.url, true);
    return (
        <Suspense fallback={null}>
            <mesh ref={ref} recieveShadow={true} castShadow={true} position={props.position} scale={props.scale}>
                <GLTF url={props.url}/>
                <galaxyShaderMaterial attach="material" uColor={"hotpink"}/>
            </mesh>
    </Suspense>
    )
}

export default Model