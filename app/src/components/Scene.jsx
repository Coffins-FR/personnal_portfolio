/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Rigsters (https://sketchfab.com/rigsters)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/the-thinker-by-auguste-rodin-08a1e693c9674a3292dec2298b09e0ae
title: The Thinker by Auguste Rodin
*/

import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import galaxyShaderMaterial from './GalaxyShader';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {

  const group = useRef()
  useFrame(({clock}) => {group.current.time = clock.getElapsedTime();});
  const { nodes, materials } = useGLTF('/thinker/scene.gltf');
  const texture = useTexture('/textures/sky.png');
  console.log(texture)
  return (
    <group recieveShadow={true} {...props} dispose={null}>
      <group position={props.position} rotation={props.rotation} scale={props.scale}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} >
          <galaxyShaderMaterial ref={group}  attach="material" uTexture={texture}/>
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/thinker/scene.gltf');
