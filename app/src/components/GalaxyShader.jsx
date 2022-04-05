import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import galaxyFragment from '../glsl/galaxyFragment.glsl';
import galaxyVertex from '../glsl/galaxyVertex.glsl';
import * as THREE from 'three'

const GalaxyShaderMaterial = shaderMaterial(
    {
        uColor: new THREE.Color(0.0, 0.0, 0.0), 
        uTexture: new THREE.Texture(),
        time: { type: 'f', value: 0.0 }
    },
    galaxyVertex,
    galaxyFragment
)

extend({GalaxyShaderMaterial});
export default GalaxyShaderMaterial;