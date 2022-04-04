uniform float time;
uniform float progress;
uniform sampler2D uTexture;
uniform vec4 resolution;
uniform vec3 uColor;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

float PI = 3.14159265359;

void main(){
    float diff = dot(vec3(1.), vNormal);
    // vec4 texture = texture2D(uTexture, vUv);
    gl_FragColor = vec4(vUv, 0.0, 1.);
    // gl_FragColor = vec4(vNormal, 1.);
    // gl_FragColor = vec4(abs(sin(diff*10.0)));
    // gl_FragColor = texture;
    
}