/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SMK – National Gallery of Denmark (https://sketchfab.com/smkmuseum)
license: CC0-1.0 (http://creativecommons.org/publicdomain/zero/1.0/)
source: https://sketchfab.com/3d-models/discobolus-the-discus-thrower-50f50abf45414ad8a658325df7a5fcb3
title: Discobolus (The Discus Thrower)
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import galaxyShaderMaterial from './GalaxyShader';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/discobolos/scene.gltf')
  const texture = useTexture('/textures/sky.jpg');
  console.log(texture);
  return (
    <group ref={group} {...props} dispose={null} recieveShadow={true} castShadow={true} position={props.position}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={props.scale}>
        <group position={[-462, -221.47, -1.58]}>
          <mesh geometry={nodes.Object_3.geometry}  >
            <galaxyShaderMaterial attach="material"  uColor={"hotpink"} uTexture={texture}/>
          </mesh>
          <mesh geometry={nodes.Object_4.geometry}  >
            <galaxyShaderMaterial attach="material" uColor={"hotpink"} uTexture={texture}/>
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/discobolos/scene.gltf')