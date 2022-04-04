varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
uniform float u_ime;
void main (){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}